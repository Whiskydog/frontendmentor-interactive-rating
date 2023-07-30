import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [react()],
  base: '/frontendmentor-interactive-rating'
})
