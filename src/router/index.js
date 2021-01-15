import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLogin from 'pages/userLogin/userLogin'
import Homepage from 'pages/homepage/homepage'
import Welcome from '@/welcome/welcome.vue'
import Recommend from '@/recommend/recommend.vue'
import Singer from '@/singer/singer.vue'
import Rank from '@/rank/rank.vue'
import Test from '@/test.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/user-login'
  },
  {
    path: '/user-login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage,
    children: [
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
      }
    ]
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
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
