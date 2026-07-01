import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Bolt projects usually need this for GitHub Pages
  base: './', 
})
