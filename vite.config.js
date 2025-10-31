import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project uses the existing `src/` folder as the Vite root (contains index.html)
export default defineConfig({
  plugins: [react()],
  root: 'src',
})
