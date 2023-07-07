/*
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-16 18:23:47
 * @LastEditTime: 2023-07-04 18:02:07
 * @Description: Edit By LiaoJunfeng(Department of Development)
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(
      {
        template: {
          compilerOptions: {
            // i am ignorning my custom '<container>' tag
            isCustomElement: (tag) => ['Upload'].includes(tag)
          }
        }
      }
    ),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
