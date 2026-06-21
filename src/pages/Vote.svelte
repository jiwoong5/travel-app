<script>
  import { onDestroy } from 'svelte'
  import {
    collection, doc, addDoc, setDoc, updateDoc, deleteDoc, onSnapshot,
    serverTimestamp, query, orderBy, increment
  } from 'firebase/firestore'
  import { db } from '../firebase.js'
  import { user } from '../stores/auth.js'
  import { currentGroup } from '../stores/group.js'
  import { buildEmbedUrl, extractCoordsForStorage, isShortMapUrl } from '../utils/maps.js'

  let view = 'list'
  let votes = []
  let selectedVote = null
  let voteOptions = []
  let voteRecords = {}      // optionId → 총 득표수
  let myVoteCounts = {}     // optionId → 내가 제출한 횟수 (Firestore 기준)
  let localSelections = {}  // optionId → 로컬 선택 횟수 (제출 전)
  let unsubVotes, unsubOptions, unsubRecords

  let form = { title: '', voteType: 'destination', linkedDestination: '', deadline: '', maxVotesPerUser: 1, winnersCount: 1 }
  let newOption = emptyOption()
  let closedDestinations = []   // 마감된 여행지 투표의 당선 여행지 목록

  $: if (form.voteType === 'attraction' || form.voteType === 'accommodation' || form.voteType === 'restaurant') {
    closedDestinations = votes
      .filter(v => v.voteType === 'destination' && v.status === 'closed' && v.winners?.length)
      .flatMap(v => v.winners.map(w => w.placeName ?? w))
    form.linkedDestination = closedDestinations[0] ?? ''
  }

  function emptyOption() {
    return { placeName: '', description: '', mapUrl: '', price: '', bedCount: '', siteUrl: '', priceRange: '', mealType: [], hours: '', mainMenu: '' }
  }

  function normalizeUrl(url) {
    const s = url?.trim()
    if (!s) return null
    return /^https?:\/\//i.test(s) ? s : 'https://' + s
  }

  function statusLabel(vote) {
    if (vote.status === 'recruiting') return '모집중'
    if (isClosed(vote)) return '마감'
    return '투표중'
  }

  function typeLabel(vote) {
    if (vote.voteType === 'destination') return '여행지'
    if (vote.voteType === 'attraction') return '관광지'
    if (vote.voteType === 'accommodation') return '숙소'
    if (vote.voteType === 'restaurant') return '맛집'
    return ''
  }

  $: if ($currentGroup) {
    startVoteListener()
  } else {
    votes = []
    unsubVotes?.()
  }

  $: if (selectedVote && votes.length > 0) {
    const updated = votes.find(v => v.id === selectedVote.id)
    if (updated) selectedVote = updated
  }

  $: totalMyVotes = Object.values(myVoteCounts).reduce((a, b) => a + b, 0)
  $: isSubmitted = totalMyVotes > 0
  $: totalLocalVotes = Object.values(localSelections).reduce((a, b) => a + Math.abs(b), 0)
  $: localRemaining = selectedVote ? maxVotes(selectedVote) - totalLocalVotes : 0

  function startVoteListener() {
    unsubVotes?.()
    unsubVotes = onSnapshot(
      query(collection(db, 'groups', $currentGroup.id, 'votes'), orderBy('createdAt', 'desc')),
      snap => { votes = snap.docs.map(d => ({ id: d.id, ...d.data() })) }
    )
  }

  function isClosed(vote) {
    if (vote.status === 'closed') return true
    if (vote.status !== 'ongoing') return false
    if (!vote.deadline) return false
    const d = vote.deadline.toDate ? vote.deadline.toDate() : new Date(vote.deadline)
    return d < new Date()
  }

  function formatDeadline(deadline) {
    if (!deadline) return '없음'
    const d = deadline.toDate ? deadline.toDate() : new Date(deadline)
    return d.toLocaleDateString('ko-KR')
  }

  function maxVotes(vote) {
    return vote.maxVotesPerUser ?? 1
  }

  function openDetail(vote) {
    selectedVote = vote
    view = 'detail'
    voteOptions = []
    voteRecords = {}
    myVoteCounts = {}
    localSelections = {}
    unsubOptions?.()
    unsubRecords?.()

    unsubOptions = onSnapshot(
      collection(db, 'groups', $currentGroup.id, 'votes', vote.id, 'options'),
      snap => { voteOptions = snap.docs.map(d => ({ id: d.id, ...d.data() })) }
    )

    unsubRecords = onSnapshot(
      collection(db, 'groups', $currentGroup.id, 'votes', vote.id, 'records'),
      snap => {
        const counts = {}
        let mine = {}
        snap.docs.forEach(d => {
          const data = d.data()
          if (data.votes) {
            // 현재 형식: votes map
            Object.entries(data.votes).forEach(([id, n]) => {
              counts[id] = (counts[id] || 0) + n
            })
            if (d.id === $user.uid) mine = { ...data.votes }
          } else {
            // 구버전 호환: optionIds 배열
            const ids = data.optionIds ?? (data.optionId ? [data.optionId] : [])
            ids.forEach(id => { counts[id] = (counts[id] || 0) + 1 })
            if (d.id === $user.uid) ids.forEach(id => { mine[id] = (mine[id] || 0) + 1 })
          }
        })
        voteRecords = counts
        myVoteCounts = mine
      }
    )
  }

  function addLocal(optionId) {
    if (isSubmitted || isClosed(selectedVote)) return
    const cur = localSelections[optionId] || 0
    // 음수→0 방향은 절댓값이 줄어 항상 허용, 0 이상 방향은 표 소비
    if (cur >= 0 && localRemaining <= 0) return
    const next = cur + 1
    if (next === 0) {
      const { [optionId]: _, ...rest } = localSelections
      localSelections = rest
    } else {
      localSelections = { ...localSelections, [optionId]: next }
    }
  }

  function removeLocal(optionId) {
    if (isSubmitted || isClosed(selectedVote)) return
    const cur = localSelections[optionId] || 0
    // 양수→0 방향은 절댓값이 줄어 항상 허용, 0 이하 방향은 표 소비
    if (cur <= 0 && localRemaining <= 0) return
    const next = cur - 1
    if (next === 0) {
      const { [optionId]: _, ...rest } = localSelections
      localSelections = rest
    } else {
      localSelections = { ...localSelections, [optionId]: next }
    }
  }

  async function submitVote() {
    if (totalLocalVotes === 0 || isSubmitted) return
    const recordRef = doc(
      db, 'groups', $currentGroup.id, 'votes', selectedVote.id, 'records', $user.uid
    )
    await setDoc(recordRef, {
      votes: { ...localSelections },
      totalVotes: totalLocalVotes,
      votedAt: serverTimestamp(),
    })
    localSelections = {}
  }

  async function startVote() {
    if (voteOptions.length === 0) return
    await updateDoc(
      doc(db, 'groups', $currentGroup.id, 'votes', selectedVote.id),
      { status: 'ongoing' }
    )
  }

  async function addOptionToVote() {
    if (!newOption.placeName.trim()) return
    const mapUrl = newOption.mapUrl.trim() || null
    const { lat, lng } = extractCoordsForStorage(mapUrl)
    await addDoc(
      collection(db, 'groups', $currentGroup.id, 'votes', selectedVote.id, 'options'),
      {
        placeName: newOption.placeName.trim(),
        description: newOption.description.trim(),
        mapUrl,
        lat,
        lng,
        price: newOption.price?.trim() || null,
        bedCount: newOption.bedCount ? Number(newOption.bedCount) : null,
        siteUrl: normalizeUrl(newOption.siteUrl),
        priceRange: newOption.priceRange?.trim() || null,
        mealType: newOption.mealType?.length ? newOption.mealType : null,
        hours: newOption.hours?.trim() || null,
        mainMenu: newOption.mainMenu?.trim() || null,
        createdBy: $user.uid,
      }
    )
    newOption = emptyOption()
  }

  async function deleteOption(opt) {
    await deleteDoc(
      doc(db, 'groups', $currentGroup.id, 'votes', selectedVote.id, 'options', opt.id)
    )
  }

  // 투표 자체 수정
  let editingVote = false
  let voteEditForm = {}

  function startEditVote() {
    voteEditForm = {
      title: selectedVote.title,
      deadline: selectedVote.deadline
        ? (selectedVote.deadline.toDate?.() ?? new Date(selectedVote.deadline)).toISOString().slice(0, 10)
        : '',
      maxVotesPerUser: selectedVote.maxVotesPerUser ?? 1,
      linkedDestination: selectedVote.linkedDestination ?? '',
    }
    editingVote = true
  }

  async function saveVote() {
    const isRecruiting = selectedVote.status === 'recruiting'
    const data = { deadline: voteEditForm.deadline ? new Date(voteEditForm.deadline) : null }
    if (isRecruiting) {
      data.title = voteEditForm.title.trim() || selectedVote.title
      data.maxVotesPerUser = Number(voteEditForm.maxVotesPerUser) || 1
      data.linkedDestination = voteEditForm.linkedDestination || null
    }
    await updateDoc(doc(db, 'groups', $currentGroup.id, 'votes', selectedVote.id), data)
    editingVote = false
  }

  // 후보 항목 수정
  let editingOption = null
  let optionEditForm = {}

  function startEditOption(opt) {
    optionEditForm = {
      placeName: opt.placeName ?? '',
      description: opt.description ?? '',
      mapUrl: opt.mapUrl ?? '',
      price: opt.price ?? '',
      bedCount: opt.bedCount ?? '',
      siteUrl: opt.siteUrl ?? '',
      priceRange: opt.priceRange ?? '',
      mealType: opt.mealType ?? [],
      hours: opt.hours ?? '',
      mainMenu: opt.mainMenu ?? '',
    }
    editingOption = opt.id
  }

  async function saveOption() {
    const mapUrl = optionEditForm.mapUrl.trim() || null
    const { lat, lng } = extractCoordsForStorage(mapUrl)
    await updateDoc(
      doc(db, 'groups', $currentGroup.id, 'votes', selectedVote.id, 'options', editingOption),
      {
        placeName: optionEditForm.placeName.trim(),
        description: optionEditForm.description.trim(),
        mapUrl, lat, lng,
        price: optionEditForm.price?.trim() || null,
        bedCount: optionEditForm.bedCount ? Number(optionEditForm.bedCount) : null,
        siteUrl: normalizeUrl(optionEditForm.siteUrl),
        priceRange: optionEditForm.priceRange?.trim() || null,
        mealType: optionEditForm.mealType?.length ? optionEditForm.mealType : null,
        hours: optionEditForm.hours?.trim() || null,
        mainMenu: optionEditForm.mainMenu?.trim() || null,
      }
    )
    editingOption = null
  }

  function canEditOption(opt) {
    return selectedVote.status === 'recruiting' &&
      (opt.createdBy === $user.uid || selectedVote.createdBy === $user.uid)
  }

  async function closeVote() {
    const n = selectedVote.winnersCount ?? 1
    // 득표(양수)한 후보만 대상으로 정렬
    const positive = voteOptions
      .map(o => ({ ...o, score: voteRecords[o.id] || 0 }))
      .filter(o => o.score > 0)
      .sort((a, b) => b.score - a.score)

    let winners = []
    if (positive.length > 0) {
      // 상위 n번째 점수를 기준으로, 동점이면 모두 포함
      const cutoffScore = positive[Math.min(n, positive.length) - 1].score
      winners = positive
        .filter(o => o.score >= cutoffScore)
        .map(o => ({ placeName: o.placeName, description: o.description || '', mapUrl: o.mapUrl || null, lat: o.lat || null, lng: o.lng || null }))
    }

    await updateDoc(
      doc(db, 'groups', $currentGroup.id, 'votes', selectedVote.id),
      { status: 'closed', winners }
    )
  }

  async function deleteVote(vote, e) {
    e?.stopPropagation()
    if (!confirm(`"${vote.title}" 투표를 삭제하시겠습니까?`)) return
    await deleteDoc(doc(db, 'groups', $currentGroup.id, 'votes', vote.id))
    if (selectedVote?.id === vote.id) back()
  }

  function addOption() {
    newOptions = [...newOptions, emptyOption()]
  }

  function removeOption(i) {
    if (newOptions.length === 1) return
    newOptions = newOptions.filter((_, idx) => idx !== i)
  }

  async function createVote() {
    if (!form.title.trim()) return
    if ((form.voteType === 'attraction' || form.voteType === 'restaurant') && !form.linkedDestination) return

    const needsDestination = form.voteType === 'attraction' || form.voteType === 'accommodation' || form.voteType === 'restaurant'
    await addDoc(
      collection(db, 'groups', $currentGroup.id, 'votes'),
      {
        title: form.title.trim(),
        voteType: form.voteType,
        linkedDestination: needsDestination ? form.linkedDestination : null,
        deadline: form.deadline ? new Date(form.deadline) : null,
        maxVotesPerUser: Number(form.maxVotesPerUser) || 1,
        winnersCount: form.voteType === 'attraction' ? Number(form.winnersCount) || 1 : null,
        status: 'recruiting',
        createdBy: $user.uid,
        createdAt: serverTimestamp(),
      }
    )

    form = { title: '', voteType: 'destination', linkedDestination: '', deadline: '', maxVotesPerUser: 1, winnersCount: 1 }
    view = 'list'
  }

  function back() {
    view = 'list'
    selectedVote = null
    voteOptions = []
    voteRecords = {}
    myVoteCounts = {}
    localSelections = {}
    unsubOptions?.()
    unsubRecords?.()
  }

  onDestroy(() => {
    unsubVotes?.()
    unsubOptions?.()
    unsubRecords?.()
  })

  $: sortedOptions = [...voteOptions].sort(
    (a, b) => (voteRecords[b.id] || 0) - (voteRecords[a.id] || 0)
  )
  $: topCount = sortedOptions[0] ? (voteRecords[sortedOptions[0].id] || 0) : 0

  // 저장된 winners 배열 대신 voteRecords + winnersCount 로 실시간 계산
  $: winnerIds = (() => {
    if (!selectedVote) return new Set()
    const n = selectedVote.winnersCount ?? 1
    const positive = sortedOptions
      .map(o => ({ id: o.id, score: voteRecords[o.id] || 0 }))
      .filter(o => o.score > 0)
    if (positive.length === 0) return new Set()
    const cutoff = positive[Math.min(n, positive.length) - 1].score
    return new Set(positive.filter(o => o.score >= cutoff).map(o => o.id))
  })()
</script>

{#if !$currentGroup}
  <p>먼저 <a href="#groups">그룹</a>을 선택해 주세요.</p>

{:else if view === 'list'}
  <h2>투표 — {$currentGroup.name}</h2>
  <button on:click={() => view = 'create'}>+ 새 투표 만들기</button>
  <hr>
  {#if votes.length === 0}
    <p>진행 중인 투표가 없습니다.</p>
  {:else}
    {#each votes as v}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="card" style="cursor: pointer" on:click={() => openDetail(v)}>
        <span>[{typeLabel(v)}]</span>
        <strong> {v.title}</strong>
        <span style="float: right">
          {statusLabel(v)}
          {#if v.createdBy === $user.uid}
            &nbsp;<button on:click={(e) => deleteVote(v, e)}>삭제</button>
          {/if}
        </span>
        <br>
        <small>
          {#if v.deadline}마감일: {formatDeadline(v.deadline)} · {/if}
          1인 {maxVotes(v)}표
        </small>
      </div>
    {/each}
  {/if}

{:else if view === 'create'}
  <h2>새 투표 만들기</h2>
  <button on:click={back}>← 뒤로</button>
  <hr>

  <label>투표 유형<br>
    <select bind:value={form.voteType}>
      <option value="destination">여행지 투표</option>
      <option value="attraction">관광지 투표</option>
      <option value="accommodation">숙소 투표</option>
      <option value="restaurant">맛집 투표</option>
    </select>
  </label>
  <br><br>

  {#if form.voteType === 'attraction' || form.voteType === 'accommodation' || form.voteType === 'restaurant'}
    <label>연결할 여행지<br>
      {#if closedDestinations.length === 0}
        <p>마감된 여행지 투표가 없습니다. 여행지를 먼저 결정해 주세요.</p>
      {:else}
        <select bind:value={form.linkedDestination}>
          {#each closedDestinations as dest}
            <option value={dest}>{dest}</option>
          {/each}
        </select>
      {/if}
    </label>
    <br><br>
  {/if}

  <label>투표 제목<br>
    <input bind:value={form.title} placeholder="예: 여름 여행지 투표" style="width: 100%" />
  </label>
  <br><br>

  <label>마감 날짜 (선택)<br>
    <input type="date" bind:value={form.deadline} />
  </label>
  &nbsp;&nbsp;
  <label>1인당 최대 투표 수<br>
    <input type="number" bind:value={form.maxVotesPerUser} min="1" max="10" style="width: 4rem" />
  </label>
  {#if form.voteType === 'attraction'}
    &nbsp;&nbsp;
    <label>당선 인원 수<br>
      <input type="number" bind:value={form.winnersCount} min="1" style="width: 4rem" />
    </label>
  {/if}
  <br><br>

  <button on:click={createVote}>모집 시작</button>
  <button on:click={back}>취소</button>

{:else if view === 'detail' && selectedVote}
  <h2>{selectedVote.title}</h2>
  <button on:click={back}>← 목록으로</button>
  <span style="margin-left: 1rem">
    [{typeLabel(selectedVote)}]
    {isClosed(selectedVote) ? ' 마감' : selectedVote.status === 'recruiting' ? ' 모집중' : ' 투표중'}
  </span>
  {#if selectedVote.deadline}
    <small> · 마감일: {formatDeadline(selectedVote.deadline)}</small>
  {/if}
  {#if (selectedVote.voteType === 'attraction' || selectedVote.voteType === 'accommodation' || selectedVote.voteType === 'restaurant') && selectedVote.linkedDestination}
    <small> · 여행지: {selectedVote.linkedDestination}</small>
  {/if}
  {#if selectedVote.createdBy === $user.uid && !isClosed(selectedVote)}
    <button on:click={startEditVote} style="margin-left:0.5rem">투표 수정</button>
  {/if}

  {#if editingVote}
    <div class="card" style="margin-top:0.8rem">
      {#if selectedVote.status === 'recruiting'}
        <label>제목<br><input bind:value={voteEditForm.title} style="width:100%" /></label><br><br>
        <label>1인당 최대 투표 수<br>
          <input type="number" bind:value={voteEditForm.maxVotesPerUser} min="1" max="10" style="width:4rem" />
        </label><br><br>
        {#if selectedVote.voteType !== 'destination'}
          <label>연결 여행지<br>
            <select bind:value={voteEditForm.linkedDestination}>
              <option value="">없음</option>
              {#each closedDestinations as dest}
                <option value={dest}>{dest}</option>
              {/each}
            </select>
          </label><br><br>
        {/if}
      {/if}
      <label>마감일<br><input type="date" bind:value={voteEditForm.deadline} /></label><br><br>
      <button on:click={saveVote}>저장</button>
      <button on:click={() => editingVote = false}>취소</button>
    </div>
  {/if}
  <hr>

  {#if selectedVote.status === 'recruiting'}
    <p>후보 모집 중입니다. 그룹원 누구나 후보를 추가할 수 있습니다.</p>

    {#each voteOptions as opt}
      <div class="card">
        <strong>{opt.placeName}</strong>
        {#if opt.description}<span> — {opt.description}</span>{/if}
        {#if selectedVote.voteType === 'accommodation'}
          <br>
          {#if opt.price}<span>{opt.price}</span>{/if}
          {#if opt.bedCount}<span> · 침대 {opt.bedCount}개</span>{/if}
          {#if opt.siteUrl}<span> · <a href={opt.siteUrl} target="_blank" rel="noopener noreferrer">예약 사이트</a></span>{/if}
        {/if}
        {#if selectedVote.voteType === 'restaurant'}
          <br>
          {#if opt.mealType?.length}<span>{opt.mealType.join('·')}</span>{/if}
          {#if opt.priceRange}<span>{opt.mealType?.length ? ' · ' : ''}{opt.priceRange}</span>{/if}
          {#if opt.hours}<span> · 영업시간: {opt.hours}</span>{/if}
          {#if opt.mainMenu}<span> · 주메뉴: {opt.mainMenu}</span>{/if}
        {/if}
        {#if opt.mapUrl}
          <iframe class="map-embed" src={buildEmbedUrl(opt.mapUrl, opt.placeName)}
            title={opt.placeName} allowfullscreen loading="lazy"></iframe>
        {/if}
        {#if canEditOption(opt)}
          <br>
          <button on:click={() => startEditOption(opt)}>수정</button>
          <button on:click={() => deleteOption(opt)}>삭제</button>
        {/if}

        {#if editingOption === opt.id}
          <div style="margin-top:0.5rem">
            <input bind:value={optionEditForm.placeName} placeholder="장소명 *" style="width:100%" /><br><br>
            <input bind:value={optionEditForm.description} placeholder="설명" style="width:100%" /><br><br>
            <input bind:value={optionEditForm.mapUrl} placeholder="Google Maps URL" style="width:100%" />
            {#if isShortMapUrl(optionEditForm.mapUrl)}
              <br><small style="color:#c00">단축 URL은 좌표 추출 불가. 전체 URL을 사용해 주세요.</small>
            {/if}
            {#if selectedVote.voteType === 'accommodation'}
              <br><br>
              <input bind:value={optionEditForm.price} placeholder="가격" style="width:100%" /><br><br>
              <input type="number" bind:value={optionEditForm.bedCount} placeholder="침대 개수" style="width:5rem" /><br><br>
              <input bind:value={optionEditForm.siteUrl} placeholder="숙소 사이트 URL" style="width:100%" />
            {/if}
            {#if selectedVote.voteType === 'restaurant'}
              <br><br>
              <input bind:value={optionEditForm.priceRange} placeholder="가격대" style="width:100%" /><br><br>
              <input bind:value={optionEditForm.hours} placeholder="영업시간" style="width:100%" /><br><br>
              <input bind:value={optionEditForm.mainMenu} placeholder="주메뉴" style="width:100%" />
            {/if}
            <br><br>
            <button on:click={saveOption}>저장</button>
            <button on:click={() => editingOption = null}>취소</button>
          </div>
        {/if}
      </div>
    {/each}

    <hr>
    <strong>후보 추가</strong>
    <div class="card">
      <label>장소명 *<br>
        <input bind:value={newOption.placeName} placeholder="예: 제주도" style="width: 100%" />
      </label>
      <br>
      <label>설명<br>
        <input bind:value={newOption.description} placeholder="간단한 설명" style="width: 100%" />
      </label>
      <br>
      <label>Google Maps URL (선택)<br>
        <input bind:value={newOption.mapUrl} placeholder="https://maps.google.com/..." style="width: 100%" />
      </label>
      {#if isShortMapUrl(newOption.mapUrl)}
        <br><small style="color: #c00">단축 URL(maps.app.goo.gl)은 좌표 추출이 불가합니다. Google Maps 주소창의 전체 URL을 붙여넣어 주세요.</small>
      {/if}
      {#if selectedVote?.voteType === 'accommodation'}
        <br>
        <label>가격<br>
          <input bind:value={newOption.price} placeholder="예: 1박 12만원" style="width: 100%" />
        </label>
        <br>
        <label>침대 개수<br>
          <input type="number" bind:value={newOption.bedCount} min="1" placeholder="예: 2" style="width: 5rem" />
        </label>
        <br>
        <label>숙소 사이트 URL (선택)<br>
          <input bind:value={newOption.siteUrl} placeholder="https://www.airbnb.com/..." style="width: 100%" />
        </label>
      {/if}
      {#if selectedVote?.voteType === 'restaurant'}
        <br>
        <fieldset style="border: none; padding: 0; margin: 0">
          <legend>식사 유형</legend>
          <label><input type="checkbox" bind:group={newOption.mealType} value="조식"> 조식</label>
          &nbsp;
          <label><input type="checkbox" bind:group={newOption.mealType} value="중식"> 중식</label>
          &nbsp;
          <label><input type="checkbox" bind:group={newOption.mealType} value="석식"> 석식</label>
        </fieldset>
        <br>
        <label>가격대<br>
          <input bind:value={newOption.priceRange} placeholder="예: 1인 1만원대" style="width: 100%" />
        </label>
        <br>
        <label>영업시간<br>
          <input bind:value={newOption.hours} placeholder="예: 11:00 - 21:00" style="width: 100%" />
        </label>
        <br>
        <label>주메뉴<br>
          <input bind:value={newOption.mainMenu} placeholder="예: 삼겹살, 냉면" style="width: 100%" />
        </label>
      {/if}
      <br><br>
      <button on:click={addOptionToVote}>+ 후보 등록</button>
    </div>

    {#if selectedVote.createdBy === $user.uid}
      <hr>
      <button on:click={startVote} disabled={voteOptions.length === 0}>투표 시작</button>
      {#if voteOptions.length === 0}<small> (후보가 1개 이상이어야 합니다)</small>{/if}
    {/if}

  {:else if isClosed(selectedVote)}
    {#if sortedOptions.length === 0}
      <p>투표 없이 마감되었습니다.</p>
    {:else}
      {#each sortedOptions as opt, i}
        {@const count = voteRecords[opt.id] || 0}
        {@const isWinner = winnerIds.has(opt.id)}
        <div class="card">
          {#if isWinner}<strong>[당선] </strong>{/if}
          <strong>{opt.placeName}</strong>
          {#if opt.description}<span> — {opt.description}</span>{/if}
          <span style="float: right">{count}표</span>
          {#if myVoteCounts[opt.id]}
            <span> (내 선택{myVoteCounts[opt.id] > 1 ? ` ×${myVoteCounts[opt.id]}` : ''})</span>
          {/if}
          {#if selectedVote.voteType === 'accommodation'}
            <br>
            {#if opt.price}<span>{opt.price}</span>{/if}
            {#if opt.bedCount}<span> · 침대 {opt.bedCount}개</span>{/if}
            {#if opt.siteUrl}<span> · <a href={opt.siteUrl} target="_blank" rel="noopener noreferrer">예약 사이트</a></span>{/if}
          {/if}
          {#if selectedVote.voteType === 'restaurant'}
            <br>
            {#if opt.mealType?.length}<span>{opt.mealType.join('·')}</span>{/if}
            {#if opt.priceRange}<span>{opt.mealType?.length ? ' · ' : ''}{opt.priceRange}</span>{/if}
            {#if opt.hours}<span> · 영업시간: {opt.hours}</span>{/if}
            {#if opt.mainMenu}<span> · 주메뉴: {opt.mainMenu}</span>{/if}
          {/if}
          {#if opt.mapUrl}
            <iframe
              class="map-embed"
              src={buildEmbedUrl(opt.mapUrl, opt.placeName)}
              title={opt.placeName}
              allowfullscreen
              loading="lazy"
            ></iframe>
          {/if}
        </div>
      {/each}
      <hr>
    {/if}

  {:else}
    {#if isSubmitted}
      <p>투표 완료. 마감 후 결과를 확인하세요.</p>
    {:else}
      <p>
        선택 후 제출 버튼을 누르세요.
        (남은 선택: <strong>{localRemaining}표</strong> / {maxVotes(selectedVote)}표)
      </p>
    {/if}

    {#each voteOptions as opt}
      <div class="card">
        <!-- 1행: 장소명 + 총 득표수 -->
        <div>
          <strong>{opt.placeName}</strong>
          {#if opt.description}<span> — {opt.description}</span>{/if}
          <span style="float: right">{voteRecords[opt.id] || 0}표</span>
          <br style="clear: both">
          {#if selectedVote.voteType === 'accommodation'}
            {#if opt.price}<span>{opt.price}</span>{/if}
            {#if opt.bedCount}<span> · 침대 {opt.bedCount}개</span>{/if}
            {#if opt.siteUrl}<span> · <a href={opt.siteUrl} target="_blank" rel="noopener noreferrer">예약 사이트</a></span>{/if}
          {/if}
          {#if selectedVote.voteType === 'restaurant'}
            {#if opt.mealType?.length}<span>{opt.mealType.join('·')}</span>{/if}
            {#if opt.priceRange}<span>{opt.mealType?.length ? ' · ' : ''}{opt.priceRange}</span>{/if}
            {#if opt.hours}<span> · 영업시간: {opt.hours}</span>{/if}
            {#if opt.mainMenu}<span> · 주메뉴: {opt.mainMenu}</span>{/if}
          {/if}
        </div>
        <!-- 2행: 내 선택 표시 or +/- 컨트롤 -->
        {#if isSubmitted}
          {#if myVoteCounts[opt.id]}
            <div style="text-align: right; margin-top: 0.3rem">
              <small>내 선택: {myVoteCounts[opt.id]}표</small>
            </div>
          {/if}
        {:else}
          <div style="text-align: right; margin-top: 0.3rem">
            <button on:click={() => removeLocal(opt.id)} disabled={(localSelections[opt.id] || 0) <= 0 && localRemaining <= 0}>-</button>
            <span style="display: inline-block; width: 1.5rem; text-align: center">{localSelections[opt.id] || 0}</span>
            <button on:click={() => addLocal(opt.id)} disabled={(localSelections[opt.id] || 0) >= 0 && localRemaining <= 0}>+</button>
          </div>
        {/if}

        {#if opt.mapUrl}
          <iframe
            class="map-embed"
            src={buildEmbedUrl(opt.mapUrl, opt.placeName)}
            title={opt.placeName}
            allowfullscreen
            loading="lazy"
          ></iframe>
        {/if}
      </div>
    {/each}

    {#if !isSubmitted}
      <hr>
      <button on:click={submitVote} disabled={totalLocalVotes === 0}>제출</button>
    {/if}

    {#if selectedVote.createdBy === $user.uid}
      <hr>
      <button on:click={closeVote}>투표 마감</button>
      <button on:click={(e) => deleteVote(selectedVote, e)}>투표 삭제</button>
    {/if}
  {/if}
{/if}
