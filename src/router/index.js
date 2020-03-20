import Vue from 'vue'
import VueRouter from 'vue-router'
import Tipography from '../views/demo/tipography/component.vue';
import Button from '../views/demo/button/component.vue';
import Card from '../views/demo/card/component.vue';
import Chips from '../views/demo/chips/component.vue';
import Control from '../views/demo/control/component.vue';
import Text from '../views/demo/text/component.vue';
import Headers from '../views/demo/headers/component.vue';
import Menu from '../views/demo/menu/component.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Tipography
  },
  {
    path: '/button',
    name: 'button',
    component: Button
  },
  {
    path: '/card',
    name: 'card',
    component: Card
  },
  {
    path: '/chips',
    name: 'chips',
    component: Chips
  },
  {
    path: '/control',
    name: 'control',
    component: Control
  },
  {
    path: '/headers',
    name: 'headers',
    component: Headers
  },
  {
    path: '/text',
    name: 'text',
    component: Text
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
