import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <-- Poner un punto y barra elimina el problema de las rutas absolutas en subcarpetas de GitHub Pages
}) 