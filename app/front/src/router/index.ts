import { createRouter, createWebHistory } from 'vue-router'
import Education from '@/components/Education.vue'
import Projects from '@/components/Projects.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/education',
      component: Education
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})

export default router
