<template>
  <q-chip :style="{ backgroundColor: color?.backgroundColor, color: color?.textColor }">
    {{ type }}
  </q-chip>
</template>

<script lang="ts">
import { ref } from 'vue'
import { pokemonTypesColors } from '../data/db'
export default {
  props: ['type'],
  setup({ type }, ctx) {
    const color = ref(pokemonTypesColors.find((typeData) => typeData.name === type))
    console.log(
      pokemonTypesColors,
      type,
      pokemonTypesColors.find((typeData) => typeData.name === type)
    )
    return { color }
  }
}
</script>

<style scoped>
.pill {
  background-color: red;
}
</style>
