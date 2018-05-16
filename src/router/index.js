import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Index.vue'
import Login from '@/pages/login/Index.vue'
import User from '@/pages/User/Index.vue'
import News from '@/pages/News/Index.vue'
import Case from '@/pages/Cases/Index.vue'
import Charts from '@/pages/Cases/charts/Index.vue'
import Profit from '@/pages/Cases/Profit.vue'
import Prospect from '@/pages/Cases/Prospect.vue'
import Company from '@/pages/Cases/Company.vue'
import Government from '@/pages/Cases/Government.vue'
import Grid from '@/pages/Cases/Grid.vue'
import Customization from '@/pages/Customization/Index.vue'
import Questionaire from '@/pages/Questionaire/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/case',
      name: 'Case',
      component: Case,
      redirect: '/case/index',
      children: [
        {
          path: 'index',
          name: 'Index',
          component: Charts
        },
        {
          path: 'profit',
          name: 'Profit',
          component: Profit
        },
        {
          path: 'prospect',
          name: 'prospect',
          component: Prospect
        },
        {
          path: 'company',
          name: 'company',
          component: Company
        },
        {
          path: 'government',
          name: 'government',
          component: Government
        },
        {
          path: 'grid',
          name: 'grid',
          component: Grid
        }
      ]
    },
    {
      path: '/customization',
      name: 'customization',
      component: Customization
    },
    {
      path: '/questionaire',
      name: 'questionaire',
      component: Questionaire
    }
  ]
})
