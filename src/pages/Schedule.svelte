<script>
  import { onDestroy } from 'svelte'
  import {
    collection, doc, addDoc, updateDoc, deleteDoc,
    onSnapshot, serverTimestamp, query, orderBy, where
  } from 'firebase/firestore'
  import { db } from '../firebase.js'
  import { user } from '../stores/auth.js'
  import { currentGroup } from '../stores/group.js'
  import { buildDayRouteUrl, buildDayRouteLink, excludedFromRoute, extractCoordsForStorage, isShortMapUrl } from '../utils/maps.js'

  const CATEGORIES = ['이동', '식사', '관광', '숙박', '기타']

  let view = 'list'   // 'list' | 'create' | 'detail'
  let trips = []
  let selectedTrip = null
  let items = []
  let tripDays = []
  let unsubTrips, unsubItems, unsubVotes

  let tripForm = { title: '', destination: '', startDate: '', endDate: '' }
  let editingItem = null
  let expandedDayMaps = new Set()

  function toggleDayMap(date) {
    if (expandedDayMaps.has(date)) expandedDayMaps.delete(date)
    else expandedDayMaps.add(date)
    expandedDayMaps = expandedDayMaps
  }

  // 투표 연동: 마감된 여행지·관광지 투표 데이터
  let closedVotes = []
  $: destinationWinners = [...new Set(
    closedVotes
      .filter(v => v.voteType === 'destination' && v.winners?.length)
      .flatMap(v => v.winners.map(w => w.placeName ?? w))
  )]
  $: attractionWinners = selectedTrip
    ? closedVotes
        .filter(v => v.voteType === 'attraction'
          && v.linkedDestination === selectedTrip.destination
          && v.winners?.length)
        .flatMap(v => v.winners)
    : []

  $: if ($currentGroup) {
    startTripsListener()
    startVotesListener()
  } else {
    trips = []
    closedVotes = []
    unsubTrips?.()
    unsubVotes?.()
  }

  // selectedTrip이 trips 배열 업데이트 시 동기화
  $: if (selectedTrip && trips.length > 0) {
    const updated = trips.find(t => t.id === selectedTrip.id)
    if (updated) selectedTrip = updated
  }

  function startTripsListener() {
    unsubTrips?.()
    unsubTrips = onSnapshot(
      query(collection(db, 'groups', $currentGroup.id, 'trips'), orderBy('createdAt', 'desc')),
      snap => { trips = snap.docs.map(d => ({ id: d.id, ...d.data() })) }
    )
  }

  function startVotesListener() {
    unsubVotes?.()
    unsubVotes = onSnapshot(
      query(collection(db, 'groups', $currentGroup.id, 'votes'), where('status', '==', 'closed')),
      snap => { closedVotes = snap.docs.map(d => ({ id: d.id, ...d.data() })) }
    )
  }

  function generateDays(startDate, endDate) {
    const days = []
    // YYYY-MM-DD 문자열을 로컬 시간으로 파싱
    const [sy, sm, sd] = startDate.split('-').map(Number)
    const [ey, em, ed] = endDate.split('-').map(Number)
    const start = new Date(sy, sm - 1, sd)
    const end = new Date(ey, em - 1, ed)
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const y = d.getFullYear()
      const m = String(d.getMonth() + 1).padStart(2, '0')
      const day = String(d.getDate()).padStart(2, '0')
      days.push(`${y}-${m}-${day}`)
    }
    return days
  }

  function formatDate(dateStr, dayIndex) {
    const [y, m, d] = dateStr.split('-').map(Number)
    const date = new Date(y, m - 1, d)
    const weekday = date.toLocaleDateString('ko-KR', { weekday: 'short' })
    return `Day ${dayIndex + 1} — ${y}.${String(m).padStart(2,'0')}.${String(d).padStart(2,'0')} (${weekday})`
  }

  function openDetail(trip) {
    selectedTrip = trip
    view = 'detail'
    items = []
    editingItem = null
    unsubItems?.()
    tripDays = generateDays(trip.startDate, trip.endDate)
    unsubItems = onSnapshot(
      query(
        collection(db, 'groups', $currentGroup.id, 'trips', trip.id, 'items'),
        orderBy('createdAt', 'asc')
      ),
      snap => { items = snap.docs.map(d => ({ id: d.id, ...d.data() })) }
    )
  }

  $: itemsByDate = Object.fromEntries(
    tripDays.map(date => {
      const day = items.filter(i => i.date === date)
      return [date, [
        ...day.filter(i => i.time).sort((a, b) => a.time.localeCompare(b.time)),
        ...day.filter(i => !i.time),
      ]]
    })
  )

  async function createTrip() {
    if (!tripForm.title.trim() || !tripForm.startDate || !tripForm.endDate) return
    if (tripForm.startDate > tripForm.endDate) return
    await addDoc(collection(db, 'groups', $currentGroup.id, 'trips'), {
      title: tripForm.title.trim(),
      destination: tripForm.destination.trim() || null,
      startDate: tripForm.startDate,
      endDate: tripForm.endDate,
      createdBy: $user.uid,
      createdAt: serverTimestamp(),
    })
    tripForm = { title: '', destination: '', startDate: '', endDate: '' }
    view = 'list'
  }

  function startAdd(date) {
    editingItem = { isNew: true, date, id: null, time: '', placeName: '', category: '관광', memo: '', mapUrl: '' }
  }

  function startEdit(item) {
    editingItem = { isNew: false, ...item }
  }

  async function saveItem() {
    if (!editingItem.placeName.trim()) return
    const mapUrl = editingItem.mapUrl?.trim() || null
    const { lat, lng } = extractCoordsForStorage(mapUrl)
    const data = {
      date: editingItem.date,
      time: editingItem.time || null,
      placeName: editingItem.placeName.trim(),
      category: editingItem.category,
      memo: editingItem.memo.trim(),
      mapUrl,
      lat,
      lng,
      updatedAt: serverTimestamp(),
    }
    if (editingItem.isNew) {
      await addDoc(
        collection(db, 'groups', $currentGroup.id, 'trips', selectedTrip.id, 'items'),
        { ...data, createdBy: $user.uid, createdByName: $user.displayName, createdAt: serverTimestamp() }
      )
    } else {
      await updateDoc(
        doc(db, 'groups', $currentGroup.id, 'trips', selectedTrip.id, 'items', editingItem.id),
        data
      )
    }
    editingItem = null
  }

  async function deleteTrip(trip, e) {
    e?.stopPropagation()
    if (!confirm(`"${trip.title}" 일정을 삭제하시겠습니까?`)) return
    await deleteDoc(doc(db, 'groups', $currentGroup.id, 'trips', trip.id))
    if (selectedTrip?.id === trip.id) back()
  }

  async function deleteItem(item) {
    items = items.filter(i => i.id !== item.id)
    await deleteDoc(
      doc(db, 'groups', $currentGroup.id, 'trips', selectedTrip.id, 'items', item.id)
    )
  }

  function back() {
    view = 'list'
    selectedTrip = null
    items = []
    tripDays = []
    editingItem = null
    unsubItems?.()
  }

  onDestroy(() => {
    unsubTrips?.()
    unsubItems?.()
    unsubVotes?.()
  })
</script>

{#if !$currentGroup}
  <p>먼저 <a href="#groups">그룹</a>을 선택해 주세요.</p>

{:else if view === 'list'}
  <h2>여행 일정 — {$currentGroup.name}</h2>
  <button on:click={() => view = 'create'}>+ 새 일정 만들기</button>
  <hr>
  {#if trips.length === 0}
    <p>생성된 일정이 없습니다.</p>
  {:else}
    {#each trips as trip}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="card" style="cursor: pointer" on:click={() => openDetail(trip)}>
        <strong>{trip.title}</strong>
        {#if trip.destination}<span> · {trip.destination}</span>{/if}
        {#if trip.createdBy === $user.uid}
          <span style="float: right">
            <button on:click={(e) => deleteTrip(trip, e)}>삭제</button>
          </span>
        {/if}
        <br>
        <small>{trip.startDate} ~ {trip.endDate}</small>
      </div>
    {/each}
  {/if}

{:else if view === 'create'}
  <h2>새 일정 만들기</h2>
  <button on:click={back}>← 뒤로</button>
  <hr>

  <label>여행명 *<br>
    <input bind:value={tripForm.title} placeholder="예: 제주 3박 4일" style="width: 100%" />
  </label>
  <br><br>

  <label>여행지<br>
    {#if destinationWinners.length > 0}
      <select bind:value={tripForm.destination}>
        <option value="">직접 입력</option>
        {#each destinationWinners as dest}
          <option value={dest}>{dest}</option>
        {/each}
      </select>
      {#if !tripForm.destination}
        <input bind:value={tripForm.destination} placeholder="여행지 직접 입력" style="margin-top: 0.3rem" />
      {/if}
    {:else}
      <input bind:value={tripForm.destination} placeholder="예: 제주도" />
    {/if}
  </label>
  <br><br>

  <label>시작일 *<br>
    <input type="date" bind:value={tripForm.startDate} />
  </label>
  &nbsp;
  <label>종료일 *<br>
    <input type="date" bind:value={tripForm.endDate} />
  </label>
  <br><br>

  <button on:click={createTrip}>일정 만들기</button>
  <button on:click={back}>취소</button>

{:else if view === 'detail' && selectedTrip}
  <h2>{selectedTrip.title}</h2>
  <button on:click={back}>← 목록으로</button>
  {#if selectedTrip.destination}
    <span> · {selectedTrip.destination}</span>
  {/if}
  <small> {selectedTrip.startDate} ~ {selectedTrip.endDate}</small>
  <hr>

  {#if attractionWinners.length > 0}
    <div class="card">
      <strong>투표 당선 관광지</strong> —
      <select on:change={(e) => {
        const w = attractionWinners.find(w => w.placeName === e.target.value)
        if (!w) return
        if (!editingItem) editingItem = { isNew: true, date: tripDays[0] ?? '', id: null, time: '', placeName: '', category: '관광', memo: '', mapUrl: '' }
        editingItem = { ...editingItem, placeName: w.placeName, memo: w.description || '', mapUrl: w.mapUrl || '' }
        e.target.value = ''
      }}>
        <option value="">선택 시 항목 추가폼에 자동입력</option>
        {#each attractionWinners as w}
          <option value={w.placeName}>{w.placeName}{w.description ? ` — ${w.description}` : ''}</option>
        {/each}
      </select>
    </div>
    <hr>
  {/if}

  {#each tripDays as date, i}
    <h3>{formatDate(date, i)}</h3>

    {#each (itemsByDate[date] ?? []) as item}
      {#if editingItem && !editingItem.isNew && editingItem.id === item.id}
        <!-- 수정 인라인 폼 -->
        <div class="card">
          <input type="time" bind:value={editingItem.time} />
          &nbsp;
          <select bind:value={editingItem.category}>
            {#each CATEGORIES as cat}<option>{cat}</option>{/each}
          </select>
          <br><br>
          <input bind:value={editingItem.placeName} placeholder="장소명 *" style="width: 100%" />
          <br><br>
          <textarea bind:value={editingItem.memo} placeholder="메모" rows="2" style="width: 100%"></textarea>
          <br><br>
          <input bind:value={editingItem.mapUrl} placeholder="Google Maps URL (선택)" style="width: 100%" />
          {#if isShortMapUrl(editingItem.mapUrl)}
            <br><small style="color: #c00">단축 URL은 좌표 추출 불가. 주소창의 전체 URL을 사용해 주세요.</small>
          {/if}
          <br>
          <button on:click={saveItem}>저장</button>
          <button on:click={() => editingItem = null}>취소</button>
        </div>
      {:else}
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:flex-start">
            <div>
              {#if item.time}<strong>{item.time}</strong> · {/if}
              <span>[{item.category}]</span>
              <strong> {item.placeName}</strong>
              {#if item.memo}<br><small>{item.memo}</small>{/if}
            </div>
            <div style="white-space:nowrap; margin-left:0.5rem">
              <button on:click={() => startEdit(item)}>수정</button>
              <button on:click={() => deleteItem(item)}>삭제</button>
            </div>
          </div>
        </div>
      {/if}
    {/each}

    {#if (itemsByDate[date] ?? []).length === 0 && !(editingItem?.isNew && editingItem?.date === date)}
      <p style="margin-left: 0.5rem; color: #666">아직 일정 없음</p>
    {/if}

    {@const dayItems = itemsByDate[date] ?? []}
    {@const dayRouteUrl = buildDayRouteUrl(dayItems)}
    {@const dayRouteLink = buildDayRouteLink(dayItems)}
    {@const excluded = excludedFromRoute(dayItems)}
    {#if dayRouteUrl}
      <button on:click={() => toggleDayMap(date)}>
        {expandedDayMaps.has(date) ? '▲ 경로 닫기' : '▼ 경로 보기'}
      </button>
      <a href={dayRouteLink} target="_blank" rel="noopener noreferrer">↗ Google Maps에서 열기</a>
      {#if excluded > 0}
        <small> (지도 링크 없는 항목 {excluded}개 경로 제외)</small>
      {/if}
      {#if expandedDayMaps.has(date)}
        <iframe
          class="map-embed"
          src={dayRouteUrl}
          title="{date} 경로"
          allowfullscreen
          loading="lazy"
        ></iframe>
      {/if}
    {/if}

    <!-- 추가 인라인 폼 -->
    {#if editingItem?.isNew && editingItem?.date === date}
      <div class="card">
        <input type="time" bind:value={editingItem.time} />
        &nbsp;
        <select bind:value={editingItem.category}>
          {#each CATEGORIES as cat}<option>{cat}</option>{/each}
        </select>
        <br><br>
        <input bind:value={editingItem.placeName} placeholder="장소명 *" style="width: 100%" />
        <br><br>
        <textarea bind:value={editingItem.memo} placeholder="메모" rows="2" style="width: 100%"></textarea>
        <br><br>
        <input bind:value={editingItem.mapUrl} placeholder="Google Maps URL (선택)" style="width: 100%" />
        {#if isShortMapUrl(editingItem.mapUrl)}
          <br><small style="color: #c00">단축 URL은 좌표 추출 불가. 주소창의 전체 URL을 사용해 주세요.</small>
        {/if}
        <br>
        <button on:click={saveItem}>저장</button>
        <button on:click={() => editingItem = null}>취소</button>
      </div>
    {:else}
      <button on:click={() => startAdd(date)}>+ 항목 추가</button>
    {/if}

    <hr>
  {/each}
{/if}
