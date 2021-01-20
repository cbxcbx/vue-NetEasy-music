import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from 'pages/homepage/homepage'
import UserLogin from 'pages/userLogin/userLogin'
import Main from 'pages/main/main'
// import Discovery from '@/discovery/discovery'
import Welcome from '@/welcome/welcome'
import Recommend from '@/recommend/recommend'
import Singer from '@/singer/singer'
import Rank from '@/rank/rank'
import Test from '@/test'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/user-login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/home',
    component: Main,
    children: [
      {
        path: '',
        component: Homepage,
        children: [
          {
            path: 'recommend',
            name: 'Recommend',
            component: Recommend
          }
        ]
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
