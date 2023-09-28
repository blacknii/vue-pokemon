import { createRouter, createWebHistory } from 'vue-router'
import Pokemon from '../views/PokemonView.vue'
import Liked from '../views/LikedView.vue'
import Caught from '../views/CaughtView.vue'
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
    },
    {
      path: '/liked',
      name: 'liked',
      component: Liked
    },
    {
      path: '/caught',
      name: 'caught',
      component: Caught
    }
  ]
})

export default router
