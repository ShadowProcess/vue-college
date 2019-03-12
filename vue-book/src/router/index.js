import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Collect from '../components/Collect.vue'
import Detail from '../components/Detail.vue'
import List from '../components/List.vue'
import Add from '../components/Add.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        keepAlive: true,
        title:'首页'
      }
    },// this.$route.meta.keepAlive
    {
      path: '/collect',
      component: Collect,
      meta: {
        title: '收藏'
      }
    },
    {
      path: '/add',
      component: Add,
      meta: {
        title: '添加'
      }
    },
    // /detail/1   {bid:1}   路径参数   必须有但是可以随机
    {
      path: '/detail/:bid',
      component: Detail,
      name: 'detail',
      meta: {
        title: '详情'
      }
    },
    {
      path: '/list',
      component: List,
      meta: {
        title: '列表页'
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
