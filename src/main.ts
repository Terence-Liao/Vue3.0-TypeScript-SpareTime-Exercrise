/*
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-16 18:23:47
 * @LastEditTime: 2023-08-28 17:51:03
 * @Description: Edit By LiaoJunfeng(Department of Development)
 */
import './assets/main.css'
import globalComponent from "@/config/install";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// iconfont css
import "@/assets/iconfont/iconfont.scss";
// font css
import "@/assets/fonts/font.scss";
// element css
import "element-plus/dist/index.css";
// element dark css
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element dark css
import "@/styles/element-dark.scss";
// custom element css
import "@/styles/element.scss";
// svg icons
import "virtual:svg-icons-register";
// custom directives
//import directives from "@/directives/index";
// vue Router
// vue i18n
//import I18n from "@/languages/index";

const app = createApp(App)
const myPlugin = {
    install() {
      // 配置此应用
    }
}
app.use(globalComponent)
app.use(router)
app.mount('#app')
