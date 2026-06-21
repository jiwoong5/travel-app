# 기술 구현 명세

## 아키텍처 개요

```
[브라우저]
    |  Firebase JS SDK (직접 호출)
    v
[Firebase]
    ├── Authentication  (로그인/세션)
    ├── Firestore       (DB — 그룹, 투표, 일정)
    └── Storage         (사진 파일 — 여행 추억)

[GitHub Pages]  ← Vite 빌드 결과물(정적 파일) 배포
[GitHub Actions] ← main 브랜치 push 시 자동 빌드 & 배포
```

별도 서버 없음. 브라우저가 Firebase SDK를 통해 직접 Firestore/Storage에 접근.

---

## 기술 스택

| 영역 | 기술 | 비고 |
|------|------|------|
| 프론트엔드 | Svelte + Vite | 반응형 내장, 런타임 없음 |
| 스타일 | CSS (최소) | 투박한 스타일 방침 유지 |
| DB | Firebase Firestore | NoSQL, 실시간 업데이트 지원 |
| 인증 | Firebase Authentication | Google 로그인 사용 |
| 파일 저장 | Firebase Storage | 여행 추억 사진 전용 |
| 지도 | Google Maps Embed API | 투표 후보 카드 인라인 지도 |
| 배포 | GitHub Pages | `gh-pages` 브랜치 서빙 |
| CI/CD | GitHub Actions | push 시 자동 빌드 & 배포 |

---

## Firebase 서비스별 용도

### Authentication
- Google 소셜 로그인 단일 방식
- 로그인한 사용자만 그룹 생성/참여 가능
- 초대는 링크(`/#/join?code=XXXX`) 방식 — 링크 접근 후 로그인 유도

### Firestore 데이터 구조

```
/groups/{groupId}
  name, createdBy, inviteCode, createdAt

  /members/{userId}
    displayName, joinedAt

  /votes/{voteId}
    title, voteType, linkedDestination, deadline, createdBy, createdAt
    status: recruiting | ongoing | closed
    voteType: destination | accommodation | attraction | restaurant
    winners: { placeName, description, mapUrl }[]   ← 마감 시 저장, 동률 시 복수

    /options/{optionId}
      placeName, description, mapUrl, lat, lng, createdBy
      price, bedCount, siteUrl            ← 숙소 투표 전용 (nullable)
      priceRange, mealType, hours, mainMenu  ← 맛집 투표 전용 (nullable)

    /records/{userId}          ← 문서 ID를 userId로 사용 → 1인 1표 자동 보장
      optionId, votedAt

  /trips/{tripId}
    title, destination, startDate, endDate, createdBy, createdAt

    /items/{itemId}
      date, time, placeName, category, memo, mapUrl, lat, lng, createdBy, createdAt

  /albums/{albumId}
    title, tripId, createdBy, createdAt

    /photos/{photoId}
      storagePath, originalFilename, takenAt, uploadedBy, uploadedAt, comment
      scheduleItemId, placeName, date   ← 일정 항목 연결 (nullable, 비정규화)

      /comments/{commentId}
        userId, displayName, content, createdAt
```

### Storage
- 경로 규칙: `groups/{groupId}/albums/{albumId}/{photoId}_{filename}`
- 업로드 허용 타입: image/jpeg, image/png, image/gif, image/webp
- 파일 크기 제한: 10MB (Storage Rules에서 강제)

#### 클라이언트 사이드 이미지 압축
Firebase Storage 무료 플랜 한계(5GB 저장 / 1GB 다운로드/일) 안에서 운영하기 위해 업로드 전 브라우저에서 압축 처리.

- 목표 크기: 1MB 이하로 압축
- 방식: Canvas API로 리사이즈 후 `toBlob()`으로 재인코딩
- 압축 대상: jpeg, png (gif, webp는 원본 유지)
- 압축 후에도 10MB 초과 시 업로드 차단 (사실상 발생하지 않음)

```js
// 압축 흐름 (utils/compress.js)
File → createImageBitmap() → Canvas 리사이즈 → toBlob(quality=0.8) → 압축된 Blob → Storage 업로드
```

### Firestore Security Rules 방침
- 그룹 멤버만 해당 그룹 데이터 읽기/쓰기 가능
- `/groups/{groupId}/members/{userId}` 존재 여부로 멤버 판단
- 투표 기록(`records`)은 본인 문서만 쓰기 가능 (`request.auth.uid == userId`)

---

## Google Maps Embed API

- API 키 발급 후 환경변수로 관리 (`VITE_MAPS_API_KEY`)
- 후보 항목에 `mapUrl` 저장 → 서버 없이 클라이언트에서 place_id 추출 시도
- 추출 실패 시 `q=placeName` 파라미터로 fallback

```js
// maps.js
function buildEmbedUrl(mapUrl, placeName) {
  const placeId = extractPlaceId(mapUrl)
  const base = 'https://www.google.com/maps/embed/v1/place'
  const key = import.meta.env.VITE_MAPS_API_KEY
  const q = placeId ? `place_id:${placeId}` : encodeURIComponent(placeName)
  return `${base}?key=${key}&q=${q}`
}
```

---

## GitHub Pages 배포

### 설정
- Vite `base` 옵션을 레포 이름으로 지정 (예: `/travel-app/`)
- 빌드 결과물: `dist/` 폴더
- GitHub Actions가 `dist/`를 `gh-pages` 브랜치에 자동 push

### 환경변수 처리
- Firebase config, Maps API 키는 GitHub Secrets에 등록
- Actions에서 빌드 시 `.env` 파일로 주입 → `import.meta.env.VITE_*`로 접근
- **절대 API 키를 소스코드에 하드코딩하지 않음**

---

## 아키텍처 패턴

```
Firebase(Firestore) → onSnapshot → Svelte store → UI 자동 재렌더링
```

패턴 및 프레임워크 선택 근거는 [ADR.md](ADR.md) 참고.

---

## 라우팅

Hash 라우팅 방식 채택 (`/#/votes` 형태). 별도 라이브러리 없이 `App.svelte`에서 직접 구현.

```
location.hash 읽기 → 해당 페이지 컴포넌트 렌더링
window.hashchange 이벤트 → hash 변경 감지 → 컴포넌트 교체
```

결정 근거는 [ADR.md](ADR.md) ADR-003 참고.

---

## 프로젝트 구조

```
travel-app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # main push → 자동 빌드 & gh-pages 배포
│
├── index.html                  # 진입점 HTML (Vite 기본 위치)
├── src/
│   ├── main.js                 # Svelte 앱 마운트
│   ├── App.svelte              # 루트 컴포넌트 (라우터 + 인증)
│   ├── firebase.js             # auth / db / storage 초기화
│   ├── style.css               # 전역 스타일 (최소)
│   ├── stores/
│   │   ├── auth.js             # 로그인 사용자 상태 (user store)
│   │   └── group.js            # 현재 선택된 그룹 상태 (currentGroup store)
│   ├── pages/
│   │   ├── Groups.svelte       # 그룹 목록 / 생성 / 초대
│   │   ├── Vote.svelte         # 여행지·관광지 투표
│   │   ├── Schedule.svelte     # 여행 일정 관리
│   │   └── Memory.svelte       # 여행 추억 앨범
│   └── utils/
│       ├── maps.js             # Google Maps Embed URL 생성
│       └── compress.js         # 업로드 전 이미지 압축 (Canvas API)
│
├── .nvmrc                      # Node 버전 고정 (20)
├── .gitignore
├── .env.local.example          # 환경변수 템플릿
├── firebase.json               # Firestore / Storage rules 경로
├── firestore.rules             # Firestore 보안 규칙
├── storage.rules               # Storage 보안 규칙
├── package.json
└── vite.config.js              # Svelte 플러그인 + base 경로 설정
```

---

## 로컬 개발 환경

Node 버전 관리는 **nvm-windows** 사용 (`.nvmrc`에 버전 고정).  
프로젝트 폴더 진입 후 반드시 `nvm use` 먼저 실행할 것.

```bash
nvm use            # .nvmrc 읽어 Node 20으로 전환
npm install
npm run dev        # Vite 개발 서버 (localhost:5173)
npm run build      # dist/ 빌드
npm run preview    # 빌드 결과 로컬 미리보기
```

`.env.local` 파일에 키 설정:
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_PROJECT_ID=...
VITE_MAPS_API_KEY=...
```
