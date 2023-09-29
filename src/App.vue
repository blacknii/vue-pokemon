<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/caught">Caught</router-link>
      <router-link to="/liked">Liked</router-link>
      <router-link :to="'/pokemon/' + random">Random Pokemon</router-link>
    </nav>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useCounterStore } from './stores/counter'

const counterStore = useCounterStore()

const addPokemonLike = () => {
  counterStore.addLikedPokemonTwo(3)
}
const addPokemonCath = () => {
  counterStore.addCaughtPokemonTwo(20)
}

const random = ref(Math.floor(Math.random() * 800) + 1)
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100rem;
  margin: 0 auto;
}

nav {
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  padding: 1rem;
}
</style>
