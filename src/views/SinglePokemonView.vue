<template>
  <p>single pokemon id: {{ id }}</p>
  <p>Pokemon name {{ character.name }}</p>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Character from '../types/Character'
import getPokemon from '@/Composables/getPokemon.ts'

export default defineComponent({
  name: 'SinglePokemonView',
  props: ['id'],
  components: {},
  setup({ id }) {
    const character = ref('')

    onMounted(async () => {
      const response = await getPokemon(id)
      if (response !== null) {
        character.value = response
      }
    })

    return {
      character
    }
  }
})
</script>
