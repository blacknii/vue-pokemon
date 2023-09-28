<template>
  <q-rating
    v-model="ratingModel"
    max="1"
    size="2rem"
    color="grey"
    color-selected="red"
    icon="favorite_border"
    icon-selected="favorite"
    icon-half="favorite"
    no-dimming
    @click.stop
  />
</template>

<script lang="ts">
import { ref } from 'vue'
import { likedPokemons } from '../data/db'

export default {
  props: ['id'],
  setup({ id }) {
    const ratingModel = ref(likedPokemons.includes(id) ? 1 : 0)
    return {
      ratingModel
    }
  }
}
</script>
