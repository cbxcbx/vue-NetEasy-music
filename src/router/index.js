import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from 'pages/homepage/homepage'
import UserLogin from 'pages/userLogin/userLogin'
import Main from 'pages/main/main'
import Welcome from '@/welcome/welcome'
import Recommend from '@/recommend/recommend'
import Singer from '@/singer/singer'
import Rank from '@/rank/rank'
import RankDetail from "@/rank-detail/rank-detail";
import SingerDetail from '@/singer-detail/singer-detail'
import Test from '@/test'

import { Message } from 'element-ui';
import { getLoginToken } from 'common/js/util/getToken'
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
            component: Recommend,
            meta: {
              requireAuth: true
            }
          }
        ]
      },
      {
        path: '/singer',
        component: Singer,
        children: [
          {
            path: ':id',
            component: SingerDetail
          }
        ]
      },
      {
        path: '/rank',
        component: Rank,
        children: [
          {
            path: ':id',
            component: RankDetail
          }
        ]
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

// 登录验证
router.beforeEach((to, from, next) => {
  let isLogin = getLoginToken();
  if (to.matched.some(m => m.meta.requireAuth)) {
    if (isLogin) {
      next()
    } else {
      next({ path: '/user-login' });
      Message({
        type: "error",
        message: "请先登录"
      });
    }
  } else {
    if (to.path === '/user-login') {
      if (isLogin) {
        next({ path: '/home' })
        Message({
          type: "warning",
          message: "当前已有登录账号"
        });
      } else {
        next()
      }
    } else {
      next()
    }
  }
});
export default router
