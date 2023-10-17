// import path from 'path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

/*const pathResolve = pathStr => {
  return path.resolve(path.dirname(fileURLToPath(import.meta.url)), pathStr)
}*/

export default defineConfig({ // doc: https://vitejs.dev/config/
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // iconDirs: [pathResolve('./src/assets/svgs')],
      iconDirs: [fileURLToPath(new URL('./src/assets/svgs', import.meta.url))],
      symbolId: 'svg-[dir]-[name]',
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
