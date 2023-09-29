import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import addLikedPokemon from '../composables/likes/addLikedPokemon'
import removeLikedPokemon from '../composables/likes/removeLikedPokemon'
import addCaughtPokemon from '../composables/catch-count/addCaughtPokemon'
import removeCaughtPokemon from '../composables/catch-count/removeCaughtPokemon'

export const useCounterStore = defineStore('counter', () => {
  const likedPokemons = ref<number[]>([])
  const LikedPokemonArray = localStorage.getItem('LikedPokemon')
  if (LikedPokemonArray !== null) {
    likedPokemons.value = JSON.parse(LikedPokemonArray)
  }

  const caughtPokemons = ref<number[]>([])
  const CaughtPokemonArray = localStorage.getItem('CaughtPokemon')
  if (CaughtPokemonArray !== null) {
    caughtPokemons.value = JSON.parse(CaughtPokemonArray)
  }

  const addLikedPokemonTwo = (id: number) => {
    addLikedPokemon(id)
    likedPokemons.value.push(id)
  }
  const removeLikedPokemonTwo = (id: number) => {
    removeLikedPokemon(id)
    likedPokemons.value.splice(likedPokemons.value.indexOf(id), 1)
  }

  const addCaughtPokemonTwo = (id: number) => {
    addCaughtPokemon(id)
    caughtPokemons.value.push(id)
  }

  const removeCaughtPokemonTwo = (id: number) => {
    removeCaughtPokemon(id)
    caughtPokemons.value = caughtPokemons.value.filter((pokemon) => pokemon !== id)
  }

  return {
    likedPokemons,
    caughtPokemons,
    addLikedPokemonTwo,
    removeLikedPokemonTwo,
    addCaughtPokemonTwo,
    removeCaughtPokemonTwo
  }
})
