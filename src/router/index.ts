/*
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-12 11:21:15
 * @LastEditTime: 2023-06-29 16:39:58
 * @Description: Edit By LiaoJunfeng(Department of Development)
 */

import { createRouter, createWebHistory } from 'vue-router'
import BasicExercise from "@/views/BasicExercise.vue";
import MyTransition from "@/views/Slot.vue"
import father from "@/views/Father.vue";
import hooks from "@/views/hooks.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BasicExercise
    },
    {
      path:'/a',
      name: 'a',
      component: father
    },
    {
      path:'/b',
      name: 'b',
      component: MyTransition
    },
  ]
})

export default router
