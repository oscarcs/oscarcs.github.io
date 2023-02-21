import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'bulma-scss/': require('path').join(__dirname, 'node_modules/bulma-scss/'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bulma-scss"; @import "@/styles/oscar.scss";`
      }
    },
  },
})
