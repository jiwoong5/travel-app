<script>
  import { onDestroy } from 'svelte'
  import { db, storage } from '../firebase.js'
  import { user } from '../stores/auth.js'
  import { currentGroup } from '../stores/group.js'
  import {
    collection, doc, addDoc, setDoc, updateDoc, deleteDoc,
    getDocs, onSnapshot, query, orderBy, serverTimestamp, increment
  } from 'firebase/firestore'
  import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
  import { compressImage } from '../utils/compress.js'

  // 뷰 상태: 'albums' | 'album' | 'photo'
  let view = 'albums'

  let albums = []
  let currentAlbum = null
  let photos = []
  let currentPhoto = null
  let comments = []
  let trips = []
  let scheduleItems = []  // 현재 앨범 연결 여행의 일정 항목

  // 앨범 생성 폼
  let showAlbumForm = false
  let newAlbumTitle = ''
  let newAlbumTripId = ''

  // 사진 업로드 폼
  let showUploadForm = false
  let uploadFile = null
  let uploadScheduleItemId = ''
  let uploadComment = ''
  let uploading = false
  let uploadError = ''

  // 코멘트 폼
  let newComment = ''
  let submittingComment = false

  let unsubAlbums = null
  let unsubPhotos = null
  let unsubComments = null

  $: groupId = $currentGroup?.id

  $: if (groupId) onGroupChange()

  function onGroupChange() {
    if (unsubPhotos) { unsubPhotos(); unsubPhotos = null }
    if (unsubComments) { unsubComments(); unsubComments = null }
    view = 'albums'
    currentAlbum = null
    currentPhoto = null
    photos = []
    comments = []
    scheduleItems = []
    showAlbumForm = false
    showUploadForm = false
    loadAlbums()
    loadTrips()
  }

  function loadAlbums() {
    if (unsubAlbums) unsubAlbums()
    unsubAlbums = onSnapshot(
      query(collection(db, 'groups', groupId, 'albums'), orderBy('createdAt', 'desc')),
      snap => { albums = snap.docs.map(d => ({ id: d.id, ...d.data() })) }
    )
  }

  async function loadTrips() {
    try {
      const snap = await getDocs(
        query(collection(db, 'groups', groupId, 'trips'), orderBy('startDate'))
      )
      trips = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    } catch (_) {
      trips = []
    }
  }

  async function openAlbum(album) {
    currentAlbum = album
    scheduleItems = []
    uploadScheduleItemId = ''
    showUploadForm = false
    uploadError = ''

    if (album.tripId) {
      try {
        const snap = await getDocs(
          query(
            collection(db, 'groups', groupId, 'trips', album.tripId, 'items'),
            orderBy('date')
          )
        )
        const raw = snap.docs.map(d => ({ id: d.id, ...d.data() }))
        raw.sort((a, b) => {
          if (a.date !== b.date) return a.date.localeCompare(b.date)
          if (!a.time && !b.time) return 0
          if (!a.time) return 1
          if (!b.time) return -1
          return a.time.localeCompare(b.time)
        })
        scheduleItems = raw
      } catch (e) {
        console.error('일정 항목 로드 실패:', e)
        scheduleItems = []
      }
    }

    if (unsubPhotos) unsubPhotos()
    unsubPhotos = onSnapshot(
      query(
        collection(db, 'groups', groupId, 'albums', album.id, 'photos'),
        orderBy('uploadedAt', 'desc')
      ),
      snap => { photos = snap.docs.map(d => ({ id: d.id, ...d.data() })) }
    )
    view = 'album'
  }

  // 앨범이 일정 연결된 경우 장소별 그룹핑
  $: groupedPhotos = (currentAlbum?.tripId && photos.length)
    ? buildGroups(photos)
    : null

  function buildGroups(list) {
    const map = {}
    for (const p of list) {
      const key = p.scheduleItemId || '__other__'
      if (!map[key]) map[key] = { label: p.placeName || '기타', date: p.date || null, photos: [] }
      map[key].photos.push(p)
    }
    return Object.values(map).sort((a, b) => {
      if (!a.date) return 1
      if (!b.date) return -1
      return a.date.localeCompare(b.date)
    })
  }

  function openPhoto(photo) {
    currentPhoto = photo
    newComment = ''
    if (unsubComments) unsubComments()
    unsubComments = onSnapshot(
      query(
        collection(db, 'groups', groupId, 'albums', currentAlbum.id, 'photos', photo.id, 'comments'),
        orderBy('createdAt', 'asc')
      ),
      snap => { comments = snap.docs.map(d => ({ id: d.id, ...d.data() })) }
    )
    view = 'photo'
  }

  function goBack() {
    if (view === 'photo') {
      if (unsubComments) { unsubComments(); unsubComments = null }
      currentPhoto = null
      comments = []
      view = 'album'
    } else if (view === 'album') {
      if (unsubPhotos) { unsubPhotos(); unsubPhotos = null }
      currentAlbum = null
      photos = []
      scheduleItems = []
      showUploadForm = false
      view = 'albums'
    }
  }

  async function createAlbum() {
    if (!newAlbumTitle.trim()) return
    await addDoc(collection(db, 'groups', groupId, 'albums'), {
      title: newAlbumTitle.trim(),
      tripId: newAlbumTripId || null,
      createdBy: $user.uid,
      createdByName: $user.displayName,
      createdAt: serverTimestamp(),
      photoCount: 0,
    })
    newAlbumTitle = ''
    newAlbumTripId = ''
    showAlbumForm = false
  }

  async function uploadPhoto() {
    if (!uploadFile) return
    const ALLOWED = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
    if (!ALLOWED.includes(uploadFile.type)) {
      uploadError = 'jpg, jpeg, png, gif, webp 파일만 업로드 가능합니다.'
      return
    }
    if (uploadFile.size > 10 * 1024 * 1024) {
      uploadError = '파일 크기는 10MB 이하여야 합니다.'
      return
    }
    uploadError = ''
    uploading = true
    try {
      const blob = await compressImage(uploadFile)
      const photoDocRef = doc(collection(db, 'groups', groupId, 'albums', currentAlbum.id, 'photos'))
      const storagePath = `groups/${groupId}/albums/${currentAlbum.id}/${photoDocRef.id}_${uploadFile.name}`
      const storageRef = ref(storage, storagePath)
      await uploadBytes(storageRef, blob)
      const downloadURL = await getDownloadURL(storageRef)

      const selected = scheduleItems.find(s => s.id === uploadScheduleItemId)
      await setDoc(photoDocRef, {
        storagePath,
        downloadURL,
        originalFilename: uploadFile.name,
        uploadedBy: $user.uid,
        uploadedByName: $user.displayName,
        uploadedAt: serverTimestamp(),
        comment: uploadComment.trim() || null,
        scheduleItemId: selected?.id || null,
        placeName: selected?.placeName || null,
        date: selected?.date || null,
      })
      await updateDoc(doc(db, 'groups', groupId, 'albums', currentAlbum.id), {
        photoCount: increment(1)
      })
      uploadFile = null
      uploadScheduleItemId = ''
      uploadComment = ''
      showUploadForm = false
    } catch (e) {
      uploadError = '업로드 실패: ' + e.message
    } finally {
      uploading = false
    }
  }

  async function deleteAlbum(album, e) {
    e.stopPropagation()
    if (!confirm(`"${album.title}" 앨범을 삭제하시겠습니까? 사진과 코멘트가 모두 삭제됩니다.`)) return
    const photosSnap = await getDocs(
      collection(db, 'groups', groupId, 'albums', album.id, 'photos')
    )
    for (const pd of photosSnap.docs) {
      const photo = pd.data()
      try { await deleteObject(ref(storage, photo.storagePath)) } catch (_) {}
      const commentsSnap = await getDocs(
        collection(db, 'groups', groupId, 'albums', album.id, 'photos', pd.id, 'comments')
      )
      for (const cd of commentsSnap.docs) await deleteDoc(cd.ref)
      await deleteDoc(pd.ref)
    }
    await deleteDoc(doc(db, 'groups', groupId, 'albums', album.id))
  }

  async function deletePhoto(photo) {
    if (!confirm('사진을 삭제하시겠습니까? 코멘트도 함께 삭제됩니다.')) return
    try {
      await deleteObject(ref(storage, photo.storagePath))
    } catch (_) {}
    const commentsSnap = await getDocs(
      collection(db, 'groups', groupId, 'albums', currentAlbum.id, 'photos', photo.id, 'comments')
    )
    for (const cd of commentsSnap.docs) await deleteDoc(cd.ref)
    await deleteDoc(doc(db, 'groups', groupId, 'albums', currentAlbum.id, 'photos', photo.id))
    await updateDoc(doc(db, 'groups', groupId, 'albums', currentAlbum.id), {
      photoCount: increment(-1)
    })
    if (view === 'photo') goBack()
  }

  async function addComment() {
    if (!newComment.trim() || submittingComment) return
    submittingComment = true
    try {
      await addDoc(
        collection(db, 'groups', groupId, 'albums', currentAlbum.id, 'photos', currentPhoto.id, 'comments'),
        {
          userId: $user.uid,
          displayName: $user.displayName,
          content: newComment.trim(),
          createdAt: serverTimestamp(),
        }
      )
      newComment = ''
    } finally {
      submittingComment = false
    }
  }

  async function deleteComment(c) {
    if (!confirm('코멘트를 삭제하시겠습니까?')) return
    await deleteDoc(
      doc(db, 'groups', groupId, 'albums', currentAlbum.id, 'photos', currentPhoto.id, 'comments', c.id)
    )
  }

  function canDeletePhoto(photo) {
    return photo.uploadedBy === $user?.uid || $currentGroup?.createdBy === $user?.uid
  }

  function scheduleItemLabel(item) {
    const trip = trips.find(t => t.id === currentAlbum?.tripId)
    if (!trip?.startDate) return `${item.date} ${item.time ?? ''} ${item.placeName}`.trim()
    const [sy, sm, sd] = trip.startDate.split('-').map(Number)
    const [iy, im, iday] = item.date.split('-').map(Number)
    const diff = Math.round((new Date(iy, im - 1, iday) - new Date(sy, sm - 1, sd)) / 86400000)
    const timePart = item.time ? ` ${item.time}` : ''
    return `Day ${diff + 1}${timePart} — ${item.placeName}`
  }

  function fmt(ts) {
    if (!ts) return '-'
    const d = ts.toDate ? ts.toDate() : new Date(ts)
    return d.toLocaleDateString('ko-KR')
  }

  onDestroy(() => {
    if (unsubAlbums) unsubAlbums()
    if (unsubPhotos) unsubPhotos()
    if (unsubComments) unsubComments()
  })
</script>

{#if !$currentGroup}
  <p>그룹을 먼저 선택해주세요.</p>

{:else if view === 'albums'}
  <h2>여행 추억</h2>
  <button on:click={() => { showAlbumForm = !showAlbumForm }}>+ 새 추억 앨범 만들기</button>

  {#if showAlbumForm}
    <div class="card" style="margin-top:0.8rem">
      <div><input bind:value={newAlbumTitle} placeholder="앨범 제목" style="width:100%" /></div>
      {#if trips.length}
        <div style="margin-top:0.4rem">
          <select bind:value={newAlbumTripId} style="width:100%">
            <option value="">연결된 일정 없음</option>
            {#each trips as t}
              <option value={t.id}>{t.title}</option>
            {/each}
          </select>
        </div>
      {/if}
      <div style="margin-top:0.6rem">
        <button on:click={createAlbum}>만들기</button>
        <button on:click={() => showAlbumForm = false} style="margin-left:0.4rem">취소</button>
      </div>
    </div>
  {/if}

  <hr>

  {#if albums.length === 0}
    <p>아직 추억 앨범이 없습니다.</p>
  {:else}
    {#each albums as album}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="card album-card" on:click={() => openAlbum(album)}>
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>
            <strong>{album.title}</strong>
            <span class="count">{album.photoCount ?? 0}장</span>
            <div class="meta">{fmt(album.createdAt)} · {album.createdByName}</div>
          </div>
          {#if album.createdBy === $user?.uid || $currentGroup?.createdBy === $user?.uid}
            <button on:click={(e) => deleteAlbum(album, e)}>삭제</button>
          {/if}
        </div>
      </div>
    {/each}
  {/if}

{:else if view === 'album'}
  <h2>
    <button on:click={goBack}>← 목록</button>
    {currentAlbum.title}
  </h2>
  <button on:click={() => { showUploadForm = !showUploadForm; uploadError = '' }}>+ 사진 추가</button>

  {#if showUploadForm}
    <div class="card" style="margin-top:0.8rem">
      <div>
        <input type="file" accept="image/jpeg,image/png,image/gif,image/webp"
          on:change={e => { uploadFile = e.target.files[0]; uploadError = '' }} />
      </div>
      {#if currentAlbum.tripId && scheduleItems.length}
        <div style="margin-top:0.4rem">
          <select bind:value={uploadScheduleItemId} style="width:100%">
            <option value="">일정 항목 연결 안 함</option>
            {#each scheduleItems as s}
              <option value={s.id}>{scheduleItemLabel(s)}</option>
            {/each}
          </select>
        </div>
      {/if}
      <div style="margin-top:0.4rem">
        <input bind:value={uploadComment} placeholder="한 줄 코멘트 (선택)" style="width:100%" />
      </div>
      {#if uploadError}<p class="error">{uploadError}</p>{/if}
      <div style="margin-top:0.6rem">
        <button on:click={uploadPhoto} disabled={uploading || !uploadFile}>
          {uploading ? '업로드 중...' : '업로드'}
        </button>
        <button on:click={() => { showUploadForm = false; uploadError = '' }} style="margin-left:0.4rem">취소</button>
      </div>
    </div>
  {/if}

  <hr>

  {#if photos.length === 0}
    <p>아직 추가된 사진이 없습니다.</p>

  {:else if groupedPhotos}
    <!-- 일정 연결 앨범: 장소별 그룹핑 -->
    {#each groupedPhotos as group}
      <div class="place-section">
        <h3 class="place-label">
          {group.label}
          {#if group.date}<span class="meta" style="font-weight:normal"> · {group.date}</span>{/if}
        </h3>
        <div class="photo-grid">
          {#each group.photos as photo}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="photo-thumb" on:click={() => openPhoto(photo)}>
              <img src={photo.downloadURL} alt={photo.originalFilename} loading="lazy" />
              <div class="photo-meta">{photo.comment || ''}</div>
            </div>
          {/each}
        </div>
      </div>
    {/each}

  {:else}
    <!-- 일정 미연결 앨범: 업로드 순 단순 나열 -->
    <div class="photo-grid">
      {#each photos as photo}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="photo-thumb" on:click={() => openPhoto(photo)}>
          <img src={photo.downloadURL} alt={photo.originalFilename} loading="lazy" />
          <div class="photo-meta">{photo.comment || photo.uploadedByName}</div>
        </div>
      {/each}
    </div>
  {/if}

{:else if view === 'photo'}
  <h2>
    <button on:click={goBack}>← 앨범</button>
    {currentAlbum.title}
  </h2>

  <img src={currentPhoto.downloadURL} alt={currentPhoto.originalFilename} class="full-photo" />

  <table style="margin-top:0.8rem">
    {#if currentPhoto.placeName}
      <tr><th>장소</th><td>{currentPhoto.placeName}</td></tr>
    {/if}
    {#if currentPhoto.comment}
      <tr><th>코멘트</th><td>{currentPhoto.comment}</td></tr>
    {/if}
    <tr><th>업로더</th><td>{currentPhoto.uploadedByName}</td></tr>
  </table>

  <div style="margin-top:0.8rem">
    <a href={currentPhoto.downloadURL} download={currentPhoto.originalFilename} target="_blank" rel="noreferrer">
      <button>다운로드</button>
    </a>
    {#if canDeletePhoto(currentPhoto)}
      <button on:click={() => deletePhoto(currentPhoto)} style="margin-left:0.5rem">삭제</button>
    {/if}
  </div>

  <hr>

  <h3>코멘트 ({comments.length})</h3>

  {#each comments as c}
    <div class="card">
      <div class="comment-header">
        <strong>{c.displayName}</strong>
        <span class="meta">{fmt(c.createdAt)}</span>
        {#if c.userId === $user?.uid}
          <button on:click={() => deleteComment(c)} class="btn-small">삭제</button>
        {/if}
      </div>
      <p style="margin:0.3rem 0 0">{c.content}</p>
    </div>
  {/each}

  <div class="comment-form">
    <textarea bind:value={newComment} placeholder="코멘트 입력" rows="2"></textarea>
    <button on:click={addComment} disabled={submittingComment || !newComment.trim()}>작성</button>
  </div>
{/if}

<style>
  .album-card { cursor: pointer; }
  .album-card:hover { background: #f5f5f5; }
  .count { margin-left: 0.8rem; color: #555; }
  .meta { font-size: 0.85em; color: #555; margin-top: 0.2rem; }
  .error { color: red; margin: 0.4rem 0 0; }

  .place-section { margin-bottom: 1.2rem; }
  .place-label { margin: 0 0 0.5rem; font-size: 1em; border-bottom: 1px solid #111; padding-bottom: 0.3rem; }

  .photo-grid { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .photo-thumb {
    width: calc(33.33% - 0.34rem);
    border: 1px solid #111;
    cursor: pointer;
  }
  .photo-thumb:hover { border-color: #555; }
  .photo-thumb img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    display: block;
  }
  .photo-meta {
    font-size: 0.8em;
    padding: 0.3rem;
    color: #555;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .full-photo { max-width: 100%; border: 1px solid #111; display: block; }

  .comment-header { display: flex; align-items: baseline; gap: 0.5rem; }
  .comment-header .meta { margin-top: 0; }
  .btn-small { margin-left: auto; font-size: 0.8em; padding: 0.1rem 0.4rem; }
  .comment-form { display: flex; gap: 0.4rem; margin-top: 0.8rem; align-items: flex-start; }
  .comment-form textarea { flex: 1; }
</style>
