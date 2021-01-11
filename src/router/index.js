import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/homepage/homepage'
import Welcome from '@/welcome/welcome.vue'
import Recommend from '@/recommend/recommend.vue'
import Singer from '@/singer/singer.vue'
import Rank from '@/rank/rank.vue'
import Test from '@/test.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/homepage'
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
