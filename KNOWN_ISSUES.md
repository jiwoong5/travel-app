# 알려진 문제 및 해결책

---

## [SVELTE-001] Svelte 템플릿에서 함수 내부의 반응형 변수가 추적되지 않는 문제

### 증상

- `items` 배열이 변경(추가·수정·삭제)되어도 화면이 즉시 갱신되지 않음
- 다른 페이지로 나갔다가 돌아와야 변경 사항이 반영됨
- `onSnapshot` 리스너, 낙관적 업데이트(`items = items.filter(...)`) 모두 적용해도 동일 증상

### 원인

Svelte 4 컴파일러는 **템플릿에 직접 작성된 표현식**만 의존성으로 추적한다.

```svelte
<!-- ❌ Svelte는 itemsForDate 내부의 items를 추적하지 못함 -->
{#each itemsForDate(date) as item}
```

위 코드에서 Svelte는 `date`만 의존성으로 인식한다.
`itemsForDate` 함수 내부에서 `items`를 읽더라도 Svelte 컴파일러는 이를 해당 `{#each}` 블록의 의존성으로 등록하지 않는다.
결과적으로 `items`가 변경되어도 `{#each}` 블록이 재실행되지 않는다.

### 해결책

`$:` 반응형 선언으로 `items`를 **직접 참조**하는 파생 값을 만들고, 템플릿에서 그 값을 사용한다.

```js
// ✅ items와 tripDays를 직접 참조 → 둘 중 하나가 바뀌면 자동 재계산
$: itemsByDate = Object.fromEntries(
  tripDays.map(date => {
    const day = items.filter(i => i.date === date)
    return [date, [
      ...day.filter(i => i.time).sort((a, b) => a.time.localeCompare(b.time)),
      ...day.filter(i => !i.time),
    ]]
  })
)
```

```svelte
<!-- ✅ 파생 값을 직접 사용 -->
{#each (itemsByDate[date] ?? []) as item}
```

### 일반 규칙

Svelte `$:` 선언 또는 템플릿 표현식에서 **반응형 변수는 반드시 직접 참조**해야 한다.
함수 호출로 감싸면 내부 의존성은 추적되지 않는다.

| 패턴 | 추적 여부 |
|------|----------|
| `{#each items.filter(...) as item}` | ✅ `items` 추적됨 |
| `{#each filteredItems as item}` (`$: filteredItems = items.filter(...)`) | ✅ `items` 추적됨 |
| `{#each getItems(date) as item}` (함수 내부에서 `items` 사용) | ❌ `items` 추적 안 됨 |

### 관련 파일

- `src/pages/Schedule.svelte` — 이 패턴으로 수정 완료 (`itemsForDate` → `$: itemsByDate`)
