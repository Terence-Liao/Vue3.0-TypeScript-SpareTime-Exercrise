/*
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-16 18:23:47
 * @LastEditTime: 2023-06-30 14:34:22
 * @Description: Edit By LiaoJunfeng(Department of Development)
 */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const myPlugin = {
    install() {
      // 配置此应用
    }
}

app.use(router)

app.mount('#app')
