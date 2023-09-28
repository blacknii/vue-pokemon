<template>
  <q-card class="my-card" @click="redirectToProfile">
    <img :src="pokemon.sprite" />

    <q-card-section>
      <div class="title-and-buttons">
        <div class="text-h6">{{ pokemon.name }}</div>
        <div class="buttons">
          <HeartButton :id="pokemon.id" />
          <CatchButton :id="pokemon.id" />
        </div>
      </div>
      <div class="text-subtitle2">
        <Pill v-for="type in pokemon.types" :type="type" :key="type" />
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
import Pill from '../components/Pill.vue'
import HeartButton from '../components/HeartButton.vue'
import CatchButton from '../components/CatchButton.vue'
import Pokemon from '../types/Pokemon'

export default {
  props: ['pokemon'],
  components: { Pill, HeartButton, CatchButton },

  setup({ pokemon }) {
    const router = useRouter()

    console.log(pokemon.types)

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


.title-and-buttons
  display: flex
  justify-content: space-between

.buttons
  display: flex
  gap: 0.5rem
</style>
