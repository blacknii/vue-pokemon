<template>
  <q-card class="my-card" @click="redirectToProfile">
    <img src="https://thronesapi.com/assets/images/daenerys.jpg" />

    <q-card-section>
      <div class="text-h6">Daenerys Targaryen</div>
      <div class="text-subtitle2">House Targaryen</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ lorem }}
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'

export default {
  props: ['id', 'character'],

  setup({ id }) {
    const router = useRouter()

    const lorem =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    const redirectToProfile = () => {
      console.log('profile', id)
      router.push({
        name: 'profile',
        params: { id: id }
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
