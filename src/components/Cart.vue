<template>
  <q-card class="my-card" @click="redirectToProfile">
    <img :src="pokemon.sprite" />

    <q-card-section>
      <div class="text-h6">{{ pokemon.name }}</div>
      <div class="text-subtitle2">
        <q-chip v-for="type in pokemon.types">
          {{ type }}
        </q-chip>
      </div>
    </q-card-section>
    <q-rating
      v-model="model3"
      max="1"
      size="2rem"
      color="red"
      color-selected="red-9"
      icon="favorite_border"
      icon-selected="favorite"
      icon-half="favorite"
      no-dimming
    />

    <q-card-section class="q-pt-none">
      {{ lorem }}
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import Pokemon from '../types/Pokemon'

export default {
  props: ['pokemon'],

  setup({ pokemon }) {
    const router = useRouter()

    const lorem =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    const redirectToProfile = () => {
      console.log('single-pokemon', pokemon.id)
      router.push({
        name: 'single-pokemon',
        params: { id: pokemon.id }
      })
    }

    return {
      lorem,
      redirectToProfile
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  height:  100%
  max-width: 250px
  cursor: pointer

img
  height: 250px
  object-fit: cover
  object-position: top
</style>
