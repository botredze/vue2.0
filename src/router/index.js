import { createRouter, createWebHistory } from 'vue-router'
import Coffe from '../views/Coffe'
import Reg from '../views/Reg'
import  Login from '../views/Login'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Coffe
  },

  {
    path: '/login',
    name: 'login',
    component: Login
    // meta: {layout: 'main'} ,
    // component: () => {import('../components/LoginLayout')}
  },

  {
    path: '/register',
    name: 'register',
    component: Reg
    // meta: {layout: 'log'},
    // component: () => {import('../components/RegisterLayout')}
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
