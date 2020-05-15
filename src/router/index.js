import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Detail from '../views/Detail.vue'
import FilterCategory from '../views/FilterCategory.vue'
import FilterArea from '../views/FilterArea.vue'
import FilterIngredient from '../views/FilterIngredient.vue'
import Filter from '../views/Filter.vue'
import Favorit from '../views/Favorit.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/category/:name',
    name: 'FilterCategory',
    component: FilterCategory
  },
  {
    path: '/area/:name',
    name: 'FilterArea',
    component: FilterArea
  },
  {
    path: '/ingredient/:name',
    name: 'FilterIngredient',
    component: FilterIngredient
  },
  {
    path: '/filter',
    name: 'Filter',
    component: Filter
  },
  {
    path: '/favorit',
    name: 'Favorit',
    component: Favorit,
    beforeEach: (to, from, next) => {
      if (this.$store.state.isLoggedIn === false) {
        alert('Please Login First!')
        next('/Login')
      } else {
        next()
      }
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
