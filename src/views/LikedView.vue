<template>
  <div
    class="q-pa-md row items-start q-gutter-md pokemon-container"
    style="justify-content: center; padding-bottom: 1.5rem"
  >
    <h1 :style="{ fontWeight: 500, color: '#3c2100', margin: 0 }">LIKED POKEMONS</h1>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import Pokemon from '../types/Pokemon'
import getLikedPokemon from '@/composables/getLikedPokemon'
import Cart from '@/components/CartComponent.vue'
import { useCounterStore } from '../stores/counter'

export default defineComponent({
  name: 'PokemonView',
  components: { Cart },
  setup() {
    const counterStore = useCounterStore()
    const pokemons = ref<Pokemon[] | null>(null)
    const currentPage = ref(1)
    onMounted(async () => {
      const response = await getLikedPokemon(counterStore.likedPokemons)
      if (response !== null) {
        pokemons.value = response
      }
    })
    console.log(counterStore.likedPokemons)

    watch(counterStore.likedPokemons, async () => {
      const response = await getLikedPokemon(counterStore.likedPokemons)
      if (response !== null) {
        pokemons.value = response
      }
      console.log(counterStore.likedPokemons)
      console.log('test')
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
