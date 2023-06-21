/*
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-12 11:21:15
 * @LastEditTime: 2023-06-13 16:14:02
 * @Description: Edit By LiaoJunfeng(Department of Development)
 */

import { createRouter, createWebHistory } from 'vue-router'
import BasicExercise from "@/views/BasicExercise.vue";
import Excrise from "@/views/SetUp.vue";
import father from "@/views/Father.vue";


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
    }

  ]
})

export default router
