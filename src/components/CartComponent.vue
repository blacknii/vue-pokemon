<template>
  <q-card class="my-card" @click="redirectToProfile">
    <img :src="pokemon.sprite" :class="{ 'black-and-white': ratingModel }" />

    <q-card-section>
      <div class="title-and-buttons">
        <div class="text-h6">{{ pokemon.name }}</div>
        <div class="buttons">
          <CatchButton :id="pokemon.id" />
          <HeartButton :id="pokemon.id" />
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
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Pill from '../components/Pill.vue'
import HeartButton from '../components/HeartButton.vue'
import CatchButton from '../components/CatchButton.vue'
import { useCounterStore } from '../stores/counter'

export default {
  props: ['pokemon'],
  components: { Pill, HeartButton, CatchButton },

  setup({ pokemon }) {
    const counterStore = useCounterStore()

    const ratingModel = ref(!counterStore.caughtPokemons.includes(pokemon.id))

    watch(counterStore.caughtPokemons, () => {
      ratingModel.value = !counterStore.caughtPokemons.includes(pokemon.id)
      console.log(counterStore.likedPokemons)
      console.log('test')
    })

    const router = useRouter()

    const lorem =
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

    const redirectToProfile = () => {
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

.black-and-white
  filter: grayscale(100%)

.title-and-buttons
  display: flex
  justify-content: space-between

.buttons
  display: flex
  gap: 0.5rem
</style>
