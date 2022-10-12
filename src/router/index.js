import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      // redirect: 'rank1'
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue') 
  }, 
  
  {
    path: '/rank2',
    name: 'rank2',
    component: () => import(/* webpackChunkName: "ranks" */ '@/views/ranks/rank2.vue')
  },
  {
    path: '/region',
    name: 'region',
    component: () => import(/* webpackChunkName: "cash" */ '@/views/cash/region.vue')
  },
  {
    path: '/prove',
    name: 'prove',
    component: () => import(/* webpackChunkName: "cash" */ '@/views/cash/prove.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
