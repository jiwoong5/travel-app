const API_KEY = import.meta.env.VITE_MAPS_API_KEY

export function buildEmbedUrl(mapUrl, placeName, lat, lng) {
  if (lat && lng) return `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${lat},${lng}`
  const placeId = extractPlaceId(mapUrl)
  const q = placeId ? `place_id:${placeId}` : encodeURIComponent(placeName)
  return `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${q}`
}

// 하루 경로 — 인라인 임베드용 (Directions Embed API)
export function buildDayRouteUrl(items) {
  const valid = routeItems(items)
  const locs = valid.map(itemLocation)
  if (locs.length < 2) return null
  const origin = locs[0]
  const destination = locs[locs.length - 1]
  const middle = locs.slice(1, -1).join('|')
  let url = `https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=${origin}&destination=${destination}`
  if (middle) url += `&waypoints=${middle}`
  return url
}

// 하루 경로 — 새 탭 링크용 (maps/dir/)
export function buildDayRouteLink(items) {
  const valid = routeItems(items)
  const locs = valid.map(itemLocation)
  if (locs.length < 2) return null
  return 'https://www.google.com/maps/dir/' + locs.join('/')
}

// 경로에서 제외된 항목 수 반환 (UI 안내용)
export function excludedFromRoute(items) {
  return items.length - routeItems(items).length
}

// 단축 URL 여부 확인 (좌표 추출 불가 → 경고 표시용)
export function isShortMapUrl(mapUrl) {
  if (!mapUrl) return false
  return /maps\.app\.goo\.gl|goo\.gl\/maps/.test(mapUrl)
}

// 저장 시점에 호출 — Firestore에 넣을 { lat, lng } 반환
export function extractCoordsForStorage(mapUrl) {
  const str = extractLatLng(mapUrl)
  if (!str) return { lat: null, lng: null }
  const [lat, lng] = str.split(',').map(Number)
  return { lat, lng }
}

// 저장된 좌표 우선 사용 → 없으면 mapUrl 파싱 → 없으면 장소명
function itemLocation(item) {
  if (item.lat && item.lng) return `${item.lat},${item.lng}`
  return extractLatLng(item.mapUrl) ?? encodeURIComponent(item.placeName?.trim())
}

// 좌표 또는 place_id가 있는 항목만 경로에 포함
function routeItems(items) {
  return items.filter(i =>
    (i.lat && i.lng) || extractLatLng(i.mapUrl) || extractPlaceId(i.mapUrl)
  )
}

function extractPlaceId(mapUrl) {
  if (!mapUrl) return null
  const match = mapUrl.match(/place_id[=:]([A-Za-z0-9_-]+)/)
  return match ? match[1] : null
}

function extractLatLng(mapUrl) {
  if (!mapUrl) return null
  // !3d!4d 우선 — 실제 핀 위치 (@ 좌표는 뷰포트 중심이라 부정확할 수 있음)
  const m = mapUrl.match(/!3d(-?\d+\.?\d*)!4d(-?\d+\.?\d*)/)
    || mapUrl.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/)
    || mapUrl.match(/[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/)
    || mapUrl.match(/ll=(-?\d+\.\d+),(-?\d+\.\d+)/)
  return m ? `${m[1]},${m[2]}` : null
}
