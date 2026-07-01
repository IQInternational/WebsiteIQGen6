import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Replace 'IQTeacherDay' with your actual repository name
  base: '/IQTeacherDay/', 
})
