import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import '../src/css/style.css'
import { createHead } from "@unhead/vue"

const app = createApp(App)

app.use(
  createRouter({
    history: createWebHistory(),
    routes,
// Pour mettre en haut de page dès le changement de page

   /* scrollBehavior(to, from, savedPosition) {
    return { top : 0}
    }, */
  }),
)

const head = createHead()
app.use(head)

app.mount('#app')