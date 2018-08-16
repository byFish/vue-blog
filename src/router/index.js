import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/user/Login'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
