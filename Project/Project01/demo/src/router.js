import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/Home.vue'
import Shopcar from './components/tabbar/Shopcar.vue'
import Search from './components/tabbar/Search.vue'
import Member from './components/tabbar/Member.vue'
import Newslist from './components/news/Newslist.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // component: Home ,
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/shopcar',
      component:Shopcar
    },
    {
      path: '/search',
      component: Search
    },
    {
      path:'/home/Newlist',
      component: Newslist
    }

  ]
})
