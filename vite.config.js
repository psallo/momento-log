import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change '/momento-log/' to your GitHub repo name
// e.g. if repo is github.com/yourname/momento-log → base: '/momento-log/'
// if using custom domain or user page → base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/momento-log/', // GitHub repo: psallo/momento-log
})
