import { createRouter, createWebHistory } from 'vue-router'
import Education from '../components/Education.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/education',
      component: Education
    },
  ]
})

export default router
