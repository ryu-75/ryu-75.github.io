import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/deploying-vite-project-example/',
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {

    /** If you set esmExternals to true, this plugins assumes that 
      all external dependencies are ES modules */
    chunkSizeWarningLimit: 550,
    commonjsOptions: {
       esmExternals: true 
    },
  }
})