export async function compressImage(file) {
  if (!file.type.match(/^image\/(jpeg|png)$/)) return file

  const bitmap = await createImageBitmap(file)
  const canvas = document.createElement('canvas')
  let { width, height } = bitmap
  const MAX = 1920
  if (width > MAX || height > MAX) {
    const r = Math.min(MAX / width, MAX / height)
    width = Math.round(width * r)
    height = Math.round(height * r)
  }
  canvas.width = width
  canvas.height = height
  canvas.getContext('2d').drawImage(bitmap, 0, 0, width, height)

  return new Promise(resolve => {
    canvas.toBlob(blob => resolve(blob ?? file), 'image/jpeg', 0.8)
  })
}
