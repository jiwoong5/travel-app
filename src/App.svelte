<script>
  import { user } from './stores/auth.js'
  import { auth } from './firebase.js'
  import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
  import Groups from './pages/Groups.svelte'
  import Vote from './pages/Vote.svelte'
  import Schedule from './pages/Schedule.svelte'
  import Memory from './pages/Memory.svelte'
  import './style.css'

  let hash = location.hash || '#groups'
  window.addEventListener('hashchange', () => hash = location.hash)

  const pages = {
    '#groups':   Groups,
    '#vote':     Vote,
    '#schedule': Schedule,
    '#memory':   Memory,
  }

  $: page = pages[hash] ?? Groups

  async function login() {
    await signInWithPopup(auth, new GoogleAuthProvider())
  }
</script>

{#if $user}
  <header>
    <h1>그룹 여행</h1>
    <nav>
      <a href="#groups">그룹</a> |
      <a href="#vote">투표</a> |
      <a href="#schedule">일정</a> |
      <a href="#memory">추억</a> |
      <span>{$user.displayName}</span>
      <button on:click={() => signOut(auth)}>로그아웃</button>
    </nav>
    <hr>
  </header>
  <main>
    <svelte:component this={page} />
  </main>
{:else}
  <p>로그인이 필요합니다.</p>
  <button on:click={login}>Google 로그인</button>
{/if}
