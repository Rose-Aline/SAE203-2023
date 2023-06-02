import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import '../src/css/style.css'
import { createHead } from "@unhead/vue"

const app = createApp(App)

app.use(
  createRouter({
    history: createWebHistory(),
    routes,

  }),
)

const head = createHead()
app.use(head)

app.mount('#app')