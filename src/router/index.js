import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import Form from '@/components/Form'
import Detail from '@/components/Detail'
import Cocktail from '@/components/Cocktail'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI, { locale })

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
