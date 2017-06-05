import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Item from '../pages/item/Item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/item',
      name: 'item',
      component: Item
    }
  ]
})
