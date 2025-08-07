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
  // chat组件测试页面-列表
  {
    path: '/chat-example-chat-list',
    name: 'ChatExampleChatList',
    component: () => import('@/views/chat-example-chat-list/index')
  },
  // chat组件测试页面-滚动控件
  {
    path: '/chat-example-scrolling',
    name: 'ChatExampleScrolling',
    component: () => import('@/views/chat-example-scrolling/index')
  },
  // 测试页面
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
