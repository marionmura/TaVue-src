import { createRouter, createWebHistory } from 'vue-router'
import HomeView from            '../views/HomeView.vue'
import Panier from             '../views/Panier.vue'
import Personnalisation from '../views/Personnalisation.vue'
import connexion from '../views/Connexion.vue'
import inscription from '../views/Inscription.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',              name: 'HomeView',           component: HomeView },
    { path: '/panier',         name: 'Panier',          component: Panier },
    { path: '/personnalisation',        name: 'personnalisation',         component: Personnalisation },
    { path: '/connexion',        name: 'connexion',         component: connexion },
    { path: '/inscription',        name: 'inscription',         component: inscription },
  ]
})

export default router
