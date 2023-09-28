<template>
  <q-rating
    v-model="ratingModel"
    max="1"
    size="2rem"
    color="dark"
    color-selected="red"
    icon="catching_pokemon"
    icon-selected="catching_pokemon"
    icon-half="catching_pokemon"
    @click.stop
  />
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import { caughtPokemons } from '../data/db'
import addCaughtPokemon from '../composables/catch-count/addCaughtPokemon'
import removeCaughtPokemon from '../composables/catch-count/removeCaughtPokemon'

export default {
  props: ['id'],
  setup({ id }) {
    const ratingModel = ref(caughtPokemons.includes(id) ? 1 : 0)
    watch(ratingModel, () => {
      if (ratingModel.value === 1) {
        addCaughtPokemon(id)
      } else if (ratingModel.value === 0) {
        removeCaughtPokemon(id)
      }
    })
    return {
      ratingModel
    }
  }
}
</script>
