import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const likedPokemons = ref([2, 34, 6, 7])
  const doubleCount = computed(() => count.value * 2)
  const increment = () => {
    count.value++
  }
  const addLikedPokemon = (id) => {
    likedPokemons.value.push(id)
  }

  return { count, doubleCount, increment, likedPokemons, addLikedPokemon }
})
