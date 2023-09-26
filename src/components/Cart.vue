<template>
  <q-card class="my-card" @click="redirectToProfile">
    <img :src="pokemon.sprite" />

    <q-card-section>
      <div class="title-and-heart-button">
        <div class="text-h6">{{ pokemon.name }}</div>
        <q-rating
          v-model="ratingModel"
          max="1"
          size="2rem"
          color="red"
          color-selected="red-9"
          icon="favorite_border"
          icon-selected="favorite"
          icon-half="favorite"
          no-dimming
          @click.stop="console.log('test')"
        />
      </div>
      <div class="text-subtitle2">
        <q-chip v-for="type in pokemon.types">
          {{ type }}
        </q-chip>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ lorem }}
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { likedPokemons } from '../data/db.ts'
import Pokemon from '../types/Pokemon'

export default {
  props: ['pokemon'],

  setup({ pokemon }) {
    const router = useRouter()

    const ratingModel = ref(likedPokemons.includes(pokemon.id) ? 1 : 0)

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
      redirectToProfile,
      ratingModel
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

.title-and-heart-button
  display: flex
  justify-content: space-between
</style>
