<script>
  import { onMount, onDestroy } from 'svelte'
  import {
    collection, query, where, onSnapshot,
    addDoc, doc, setDoc, getDocs, deleteDoc,
    updateDoc, arrayUnion, arrayRemove, serverTimestamp
  } from 'firebase/firestore'
  import { db } from '../firebase.js'
  import { user } from '../stores/auth.js'
  import { currentGroup } from '../stores/group.js'

  let groups = []
  let createMode = false
  let joinMode = false
  let newGroupName = ''
  let joinCode = ''
  let joinError = ''
  let unsub

  onMount(() => {
    const q = query(
      collection(db, 'groups'),
      where('memberIds', 'array-contains', $user.uid)
    )
    unsub = onSnapshot(q, snap => {
      groups = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    })
  })

  onDestroy(() => unsub?.())

  function generateCode() {
    return Math.random().toString(36).slice(2, 8).toUpperCase()
  }

  async function createGroup() {
    if (!newGroupName.trim()) return
    const inviteCode = generateCode()
    const ref = await addDoc(collection(db, 'groups'), {
      name: newGroupName.trim(),
      createdBy: $user.uid,
      inviteCode,
      memberIds: [$user.uid],
      createdAt: serverTimestamp(),
    })
    await setDoc(doc(db, 'groups', ref.id, 'members', $user.uid), {
      displayName: $user.displayName,
      joinedAt: serverTimestamp(),
    })
    newGroupName = ''
    createMode = false
  }

  async function joinGroup() {
    if (!joinCode.trim()) return
    joinError = ''
    const snap = await getDocs(
      query(collection(db, 'groups'), where('inviteCode', '==', joinCode.trim().toUpperCase()))
    )
    if (snap.empty) {
      joinError = '유효하지 않은 초대 코드입니다.'
      return
    }
    const gDoc = snap.docs[0]
    await updateDoc(doc(db, 'groups', gDoc.id), {
      memberIds: arrayUnion($user.uid),
    })
    await setDoc(doc(db, 'groups', gDoc.id, 'members', $user.uid), {
      displayName: $user.displayName,
      joinedAt: serverTimestamp(),
    })
    joinCode = ''
    joinMode = false
  }

  function selectGroup(g) {
    currentGroup.set(g)
    location.hash = '#vote'
  }

  async function leaveGroup(g) {
    if (!confirm(`"${g.name}"에서 나가시겠습니까?`)) return
    await updateDoc(doc(db, 'groups', g.id), { memberIds: arrayRemove($user.uid) })
    await deleteDoc(doc(db, 'groups', g.id, 'members', $user.uid))
    if ($currentGroup?.id === g.id) currentGroup.set(null)
  }

  async function deleteGroup(g) {
    if (!confirm(`"${g.name}"을 삭제하시겠습니까? 되돌릴 수 없습니다.`)) return
    await deleteDoc(doc(db, 'groups', g.id))
    if ($currentGroup?.id === g.id) currentGroup.set(null)
  }
</script>

<h2>내 그룹</h2>

{#if groups.length === 0}
  <p>참여 중인 그룹이 없습니다.</p>
{:else}
  {#each groups as g}
    <div class="card">
      <strong>{g.name}</strong>
      {#if $currentGroup?.id === g.id}<span> ← 현재 선택됨</span>{/if}
      <br>
      초대 코드: <code>{g.inviteCode}</code>
      <br><br>
      <button on:click={() => selectGroup(g)}>이 그룹으로 →</button>
      {#if g.createdBy === $user.uid}
        <button on:click={() => deleteGroup(g)}>삭제</button>
      {:else}
        <button on:click={() => leaveGroup(g)}>나가기</button>
      {/if}
    </div>
  {/each}
{/if}

<hr>

{#if !createMode && !joinMode}
  <button on:click={() => { createMode = true; joinMode = false }}>+ 새 그룹 만들기</button>
  <button on:click={() => { joinMode = true; createMode = false }}>초대 코드로 참여</button>
{/if}

{#if createMode}
  <h3>새 그룹 만들기</h3>
  <input bind:value={newGroupName} placeholder="그룹 이름 (예: 2025 제주 여행)" style="width: 100%" />
  <br><br>
  <button on:click={createGroup}>만들기</button>
  <button on:click={() => { createMode = false; newGroupName = '' }}>취소</button>
{/if}

{#if joinMode}
  <h3>초대 코드로 참여</h3>
  <input bind:value={joinCode} placeholder="초대 코드 6자리" />
  <br><br>
  <button on:click={joinGroup}>참여하기</button>
  <button on:click={() => { joinMode = false; joinCode = ''; joinError = '' }}>취소</button>
  {#if joinError}<p style="color: red">{joinError}</p>{/if}
{/if}
