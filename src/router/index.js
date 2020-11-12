import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddToy from '../views/AddToy.vue'
import firebase from 'firebase'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: ["/home"],
    meta:{
      login:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/addToy',
    name: 'AddToy',
    component: AddToy,
    meta:{
      login:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser

  let authRequired = to.matched.some(route => route.meta.login)
  if(!user && authRequired){
    next('/login')
  } else {
    next()
  }
})

export default router
