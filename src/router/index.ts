import { createRouter, createWebHistory } from 'vue-router'
import Pokemon from '../views/PokemonView.vue'
import SinglePokemon from '../views/SinglePokemonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pokemon',
      component: Pokemon
    },
    {
      path: '/pokemon/:id',
      name: 'single-pokemon',
      component: SinglePokemon,
      props: true
    }
  ]
})

export default router
