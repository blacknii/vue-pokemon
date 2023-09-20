<template>
  <div class="q-pa-md row items-start q-gutter-md" style="justify-content: center">
    <p v-for="pokemon in pokemons" :key="pokemon.name"><Cart :pokemon="pokemon" /></p>
    <!-- <p v-for="pokemon in pokemons" :key="pokemon.name">{{ pokemon.name }}</p> -->
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

    return { pokemons }
  }
})
</script>
../types/Pokemon
