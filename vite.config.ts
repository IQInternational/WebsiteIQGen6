import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/WebsiteIQGen6/', // Essential for GitHub Pages
});
