import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/arquitetura',  // Adicione o nome do seu repositório GitHub
  build: {
    outDir: 'dist',
  },
  plugins: [
    tailwindcss(),
  ],
})