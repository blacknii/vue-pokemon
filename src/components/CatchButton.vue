<template>
  <q-rating
    v-model="ratingModel"
    max="1"
    size="2rem"
    color="brown"
    color-selected="red-9"
    icon="pets_border"
    icon-selected="pets"
    icon-half="pets"
    no-dimming
    @click.stop
  />
</template>

<script lang="ts">
import { ref } from 'vue'
import { likedPokemons } from '../data/db.ts'

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
