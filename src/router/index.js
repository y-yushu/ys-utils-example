import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index')
  },
  // 大屏适配插件
  {
    path: '/screen-example',
    name: 'ScreenExample',
    component: () => import('@/views/screen-example/index')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
