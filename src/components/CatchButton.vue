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
import { ref } from 'vue'
import { caughtPokemons } from '../data/db'

export default {
  props: ['id'],
  setup({ id }) {
    const ratingModel = ref(caughtPokemons.includes(id) ? 1 : 0)
    return {
      ratingModel
    }
  }
}
</script>
