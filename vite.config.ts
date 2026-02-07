import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // IMPORTANT for EasyPanel / reverse proxy
  base: '/',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },

  preview: {
    host: '0.0.0.0',
    port: 4173
  }
})
