import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/product-research-board/',
  build: { outDir: 'dist' }
})
