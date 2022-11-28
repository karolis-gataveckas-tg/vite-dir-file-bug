import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Uncomment the next line to go to Error 2.
        // dir: null,
        file: path.resolve('./dist', 'bundle.js'),
        format: 'iife',
      }
    }
  }
})
