import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/Bienvenue.vue')
    },
    {
      path: '/education',
      component: () => import('@/components/Education.vue')
    },
    {
      path: '/projects',
      component: () => import('@/components/Projects.vue')
    },
    {
      path: '/contact',
      component: () => import('@/components/Contact.vue')
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

export default router
