import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/travel-app/',
  plugins: [svelte()],
  build: {
    outDir: 'dist',
  },
})
