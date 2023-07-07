/*
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-16 18:23:47
 * @LastEditTime: 2023-07-03 09:51:35
 * @Description: Edit By LiaoJunfeng(Department of Development)
 */

import { createRouter, createWebHistory } from 'vue-router'
import BasicExercise from "@/views/BasicExercise.vue";
import MyTransition from "@/views/Slot.vue"
import father from "@/views/Father.vue";
import testComponent from "@/views/TestComponent.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/test'
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
    {
      path:'/test',
      name: 'test',
      component: testComponent
    },
  ]
})

export default router
