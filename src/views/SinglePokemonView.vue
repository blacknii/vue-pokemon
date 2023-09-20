<template>
  <div v-if="pokemon">
    <img :src="pokemon.sprite" :alt="pokemon.name" />
    <p>Pokemon id {{ pokemon.id }}</p>
    <p>Pokemon name {{ pokemon.name }}</p>
    <p>Pokemon height {{ pokemon.height }}</p>
    <p>Pokemon weight {{ pokemon.weight }}</p>
    <p>
      Pokemon types
      <q-chip v-for="type in pokemon.types">
        {{ type }}
      </q-chip>
    </p>
    <p>Pokemon sprite {{ pokemon.sprite }}</p>
    <RouterLink to="/">
      <q-btn push color="primary" label="BACK" />
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import { defineComponent, ref, onMounted } from 'vue'
import Pokemon from '../types/Pokemon'
import getPokemon from '@/Composables/getPokemon.ts'

export default defineComponent({
  name: 'SinglePokemonView',
  props: ['id'],
  components: {},
  setup({ id }) {
    const pokemon = ref<Pokemon | null>(null)

    onMounted(async () => {
      const response = await getPokemon(id)
      if (response !== null) {
        pokemon.value = response
        console.log(response)
      }
    })

    return {
      pokemon
    }
  }
})
</script>
