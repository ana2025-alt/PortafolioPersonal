import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // <-- Esto obliga a Vite a usar rutas relativas para que no se quede la pantalla en blanco
}) 