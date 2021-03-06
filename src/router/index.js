import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//创建组件
import Login from '@/components/Login'
import home from '@/components/home'
import mine from '@/components/mine'
import search from '@/components/search'
import List from '@/components/list'

const routes = [
  {
    path: '/',
    name:'login',
    component: Login
  },
  {
    path: '/mine',
    component: mine
  },
  {
    path:'/home',
    component:home
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/list',
    name: 'List',
    component: List,
    meta: {
      keepAlive: true // 需要被缓存
    }
  }
  // {path: '/play/:aid', component: play},
  //默认跳转路由
  // {
  //   path: '*',
  //   redirect: '/Login'
  // },
]
export default new Router({
  routes
})
