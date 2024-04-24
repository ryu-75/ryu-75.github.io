import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Bienvenue.vue')
    },
    {
      path: '/education',
      component: () => import('@/views/Education.vue')
    },
    {
      path: '/projects',
      component: () => import('@/views/Projects.vue')
    },
    {
      path: '/contact',
      component: () => import('@/views/Contact.vue')
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

export default router
