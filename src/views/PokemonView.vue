<template>
  <div
    class="q-pa-md row items-start q-gutter-md pokemon-container"
    style="justify-content: center; padding-bottom: 1.5rem"
  >
    <h1 :style="{ fontWeight: 500, color: '#3c2100', margin: 0 }">POKEDEX</h1>
    <div
      class="q-pa-md row items-start q-gutter-md pokemon-container"
      style="justify-content: center"
      v-if="pokemons"
    >
      <Cart v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" />
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md pokemon-container"
      style="justify-content: center"
      v-else
    >
      <p>LOADING..</p>
    </div>
    <q-pagination
      v-model="currentPage"
      color="black"
      :max="60"
      :max-pages="6"
      :boundary-numbers="false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import Pokemon from '../types/Pokemon'
import getPokemons from '@/composables/getPokemons'
import Cart from '@/components/CartComponent.vue'

export default defineComponent({
  name: 'PokemonView',
  components: { Cart },
  setup() {
    const pokemons = ref<Pokemon[] | null>(null)
    const currentPage = ref(1)
    onMounted(async () => {
      const response = await getPokemons(currentPage.value)
      if (response !== null) {
        pokemons.value = response
      }
    })

    watch(currentPage, async () => {
      const response = await getPokemons(currentPage.value)
      if (response !== null) {
        pokemons.value = response
      }
    })

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
