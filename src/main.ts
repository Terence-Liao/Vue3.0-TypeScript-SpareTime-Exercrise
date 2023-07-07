/*
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-16 18:23:47
 * @LastEditTime: 2023-07-04 16:14:27
 * @Description: Edit By LiaoJunfeng(Department of Development)
 */
import './assets/main.css'
import globalComponent from "@/config/install";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const myPlugin = {
    install() {
      // 配置此应用
    }
}
app.use(globalComponent)
app.use(router)
app.mount('#app')
