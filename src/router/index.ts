import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Cache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  // 找不到页面
  {
    path: '/404',
    name: 'notFound',
    meta: {
      title: '找不到页面'
    },
    component: () => import('@/views/not-found/not-found.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = Cache.getCache('token')
    if (!token) {
      return '/login'
    }
  }

  // console.log(router.getRoutes())
  // console.log(to)

  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
