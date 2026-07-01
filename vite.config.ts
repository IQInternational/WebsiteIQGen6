<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
=======
=======
>>>>>>> aff0c93801ee43cb6fbf489502ea7026821c2225
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  // Bolt projects usually need this for GitHub Pages
  base: './', 
})
>>>>>>> 6b02d1d7c95134d07689ece1d79278a07cfe6218
=======
  // Replace 'IQTeacherDay' with your actual repository name
  base: '/IQTeacherDay/', 
})
>>>>>>> aff0c93801ee43cb6fbf489502ea7026821c2225
