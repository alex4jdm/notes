import Vue from 'vue'
import VueRouter from 'vue-router'
import FlowCreateNote from '../views/FlowCreateNote'

Vue.use(VueRouter)

const routes = [
  {
    path: '/create',
    name: 'FlowCreateNote',
    component: FlowCreateNote
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
