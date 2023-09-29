<template>
  <div class="single-pokemon-container" v-if="pokemon">
    <div class="details">
      <p><strong>id</strong>: {{ pokemon.id }}</p>
      <p><strong>name</strong>: {{ pokemon.name }}</p>
      <p><strong>height</strong>: {{ pokemon.height }}</p>
      <p><strong>weight</strong>: {{ pokemon.weight }}</p>
      <p>
        <strong>types</strong>
        <Pill v-for="type in pokemon.types" :type="type" />
      </p>
      <p><strong>sprite</strong>: <a :href="pokemon.sprite">PokeAPI</a></p>
      <div><CatchButton :id="pokemon.id" /> <HeartButton :id="pokemon.id" /></div>
      <br />
      <RouterLink to="/">
        <q-btn push color="primary" label="BACK" />
      </RouterLink>
    </div>
    <img :src="pokemon.sprite" :alt="pokemon.name" />
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import { defineComponent, ref, onMounted } from 'vue'
import Pill from '../components/Pill.vue'
import Pokemon from '../types/Pokemon'
import getPokemon from '@/Composables/getPokemon.ts'
import HeartButton from '../components/HeartButton.vue'
import CatchButton from '../components/CatchButton.vue'

export default defineComponent({
  name: 'SinglePokemonView',
  props: ['id'],
  components: { Pill, HeartButton, CatchButton },
  setup({ id }) {
    const pokemon = ref<Pokemon | null>(null)

    onMounted(async () => {
      const response = await getPokemon(id)
      if (response !== null) {
        pokemon.value = response
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
  /* background-color: rgba(107, 64, 64, 0.342); */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 0 auto;
  padding: 1rem;
}

.details {
  /* background-color: aqua; */
  margin: 5rem 0 0 2rem;
}
</style>
