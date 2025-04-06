import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Add Tailwind CSS to the plugins array


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});