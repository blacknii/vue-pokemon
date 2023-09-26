<template>
  <div
    class="q-pa-md row items-start q-gutter-md pokemon-container"
    style="justify-content: center; padding-bottom: 1.5rem"
  >
    <h1 :style="{ fontWeight: 500, color: '#3c2100', margin: 0 }">POKEDEX</h1>
    <div
      class="q-pa-md row items-start q-gutter-md pokemon-container"
      style="justify-content: center"
    >
      <Cart v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" />
    </div>
    <q-pagination
      v-model="currentPage"
      color="black"
      :max="100"
      :max-pages="6"
      :boundary-numbers="false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Pokemon from '../types/Pokemon'
import getPokemons from '@/composables/getPokemons'
import Cart from '@/components/Cart.vue'

export default defineComponent({
  name: 'PokemonView',
  components: { Cart },
  setup() {
    const pokemons = ref<Pokemon[] | null>(null)
    onMounted(async () => {
      const response = await getPokemons()
      if (response !== null) {
        pokemons.value = response
        console.log(pokemons.value)
      }
    })

    const currentPage = ref(1)

    return { pokemons, currentPage }
  }
})
</script>

<style scoped>
.pokemon-container {
  max-width: 90rem;
  margin: 0 auto;
  background-color: bisque;
}
</style>
