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
import { ref, watch } from 'vue'
import { likedPokemons } from '../data/db'
import { useCounterStore } from '../stores/counter'

export default {
  props: ['id'],
  setup({ id }) {
    const counterStore = useCounterStore()

    const ratingModel = ref(likedPokemons.includes(id) ? 1 : 0)
    watch(ratingModel, () => {
      if (ratingModel.value === 1) {
        counterStore.addLikedPokemonTwo(id)
      } else if (ratingModel.value === 0) {
        counterStore.removeLikedPokemonTwo(id)
      }
    })
    return {
      ratingModel
    }
  }
}
</script>
