import Vue from 'vue'
import Router from 'vue-router'
import index from './items/index.vue'
import category from './items/Category.vue'
import Rank from './items/Rank.vue'
import Bookshelf from './items/Bookshelf.vue'
import Category_view from './items/Category_view.vue'
import Section from './items/Section.vue'
import EssayPage from './items/EssayPage.vue'
import Regist from './items/Regist.vue'
import details from './items/details/details.vue'
import navseek from './items/navseek/Navseek.vue'
import login from './items/login/Login.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {path:'/category',component:category},
    {path:'/rank',component:Rank},
    {path:'/bookshelf',component:Bookshelf},
    {path:'/Category_view',component:Category_view},
    {path:'/section',component:Section},
    {path:'/EssayPage',component:EssayPage},
    {path:'/regist',component:Regist},
    {path:'/details',component:details},
    {path:'/navseek',component:navseek},
    {path:'/login',component:login},
  ]
})
