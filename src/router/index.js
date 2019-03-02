import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/Detail'
import Cocktail from '@/components/Cocktail'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Cocktail',
      component: Cocktail
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
