<template>
  <div class="single-pokemon-container" v-if="pokemon">
    <img :src="pokemon.sprite" :alt="pokemon.name" />
    <p><strong>id</strong>: {{ pokemon.id }}</p>
    <p><strong>name</strong>: {{ pokemon.name }}</p>
    <p><strong>height</strong>: {{ pokemon.height }}</p>
    <p><strong>weight</strong>: {{ pokemon.weight }}</p>
    <p>
      <strong>types</strong>
      <q-chip v-for="type in pokemon.types">
        {{ type }}
      </q-chip>
    </p>
    <p><strong>sprite</strong> {{ pokemon.sprite }}</p>
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

<style scoped>
.single-pokemon-container {
  background-color: rgba(107, 64, 64, 0.342);
  margin: 0 auto;
  max-width: 70rem;
  padding: 1rem;
}
</style>
