import { fileURLToPath, URL } from 'node:url'
import { execSync } from 'node:child_process'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
  define: {
    GIT_COMMIT_HASH: JSON.stringify(execSync('git rev-parse HEAD').toString().trim()),
    PACKAGE_VERSION: JSON.stringify(require('./package').version),
    BUILT_AT: JSON.stringify(Date.now()),
  },
  plugins: [
    vue(),
    VueRouter({
      dts: true,
    }),
    AutoImport({
      imports: ['vue', VueRouterAutoImports],
      dts: true,
      vueTemplate: true,
    }),
    Components({ dts: true }),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
