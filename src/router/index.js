import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirstPageView from '../views/FirstPage.vue'
import SecondPageView from '../views/SecondPage.vue'
import SignInPageView from '../views/Signin.vue'
import SignInSuccessView from '../views/SignedInSuccess.vue'
import IndSignin from '../views/IndSignin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aboutzzzzz',
      name: 'about',
      component: AboutView
    },
    {
      path: '/first',
      name: 'first',
      component: FirstPageView
    }
    ,
    {
      path: '/Second',
      name: 'Second',
      component: SecondPageView
    }
    ,
    {
      path: '/signin',
      name: 'signin',
      component: SignInPageView
    }
    ,
    {
      path: '/signedinsuccess',
      name: 'signinsuccess',
      component: SignInSuccessView
    },
    {
      path: '/indSignin',
      name: 'indSignin',
      component: IndSignin
    }
  ]
})

export default router
