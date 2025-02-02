import { createRouter, createWebHistory} from 'vue-router'

import Index from '@/pages/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name:'accueil', component: Index},
  ]
})

export default router
