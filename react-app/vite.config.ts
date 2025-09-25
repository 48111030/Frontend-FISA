import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: 'react-app',  // ← Add this line!
  build: {
    outDir: '../dist',  // ← And this line!
  },
  plugins: [react()],
})