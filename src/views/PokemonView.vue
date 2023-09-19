<template>
  <main>
    <p v-for="pokemon in pokemons" :key="pokemon.name">{{ pokemon.name }}</p>
    <Cart :pokemon="pokemon" />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Character from '../types/Character'
import getPokemons from '@/composables/getPokemons'
import Cart from '@/components/Cart.vue'

export default defineComponent({
  name: 'PokemonView',
  components: { Cart },
  setup() {
    const pokemons = ref(null)
    onMounted(async () => {
      const response = await getPokemons()
      if (response !== null) {
        pokemons.value = response
        console.log(pokemons.value)
      }
    })

    return { pokemons }
  }
})
</script>
