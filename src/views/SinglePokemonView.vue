<template>
  <p>single pokemon id: {{ id }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Character from '../types/Character'

export default defineComponent({
  name: 'SinglePokemonView',
  props: ['id'],
  components: {},
  setup() {
    return {}
  }
})
</script>
