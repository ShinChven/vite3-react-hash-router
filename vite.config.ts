import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  css:{
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
        },
        javascriptEnabled: true,
      }
    }
  }
})
