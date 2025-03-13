import { createRouter, createWebHistory } from 'vue-router'
import { calculateAccessRoutes, calculateNavigationMenu } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:calculateAccessRoutes()
})

export default router
