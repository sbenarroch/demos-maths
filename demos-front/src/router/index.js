import { createRouter, createWebHistory } from 'vue-router'

/* Pages globales */

import HomeView from '../views/HomeView.vue'

/* Collège */

import AccueilCollege from '../views/college/AccueilCollege.vue'

/* Lycée */

import AccueilLycee from '../views/lycee/AccueilLycee.vue'
import AccueilTerminale from '../views/lycee/terminale/AccueilTerminale.vue'
import t5_integration from '../views/lycee/terminale/cours/ch5_integration.vue'

/* Sup */

const routes = [

  /* Pages globales */

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  /* Collège */

  {
    path: '/college',
    name: 'Collège',
    component: AccueilCollege
  },

  /* Lycée */

  {
    path: '/lycee',
    name: 'Lycée',
    component: AccueilLycee
  },

  {
    path: '/lycee/terminale',
    name: 'Terminale',
    component: AccueilTerminale
  },

  {
    path: '/lycee/terminale/5_calcul_integral',
    name: 'Chapitre 5 - Calcul intégral (T)',
    component: t5_integration
  },

  /* Sup */


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
