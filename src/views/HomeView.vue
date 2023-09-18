<template>
  <main>
    <h1>{{ grating }} - {{ number }}</h1>
    <p v-for="character in characters" :key="character.name">{{ character.name }}</p>

    <div class="q-pa-md q-gutter-sm">
      <q-avatar color="red" text-color="white" icon="directions" />
      <q-avatar color="primary" text-color="white">J</q-avatar>
      <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
      <q-avatar size="24px" color="orange">J</q-avatar>
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Character from '../types/Character'

export default defineComponent({
  name: 'HomeView',
  components: {},
  setup() {
    const grating = ref('hello')
    const number = ref<number | string>(3)
    grating.value = 'hi'
    number.value = '100'

    const characters = ref<Character[]>([
      { name: 'Jan', surname: 'Kawasaki', age: 10 },
      { name: 'Lorem', surname: 'Ipsum', age: 21 },
      { name: 'Lorem2', surname: 'Ipsum 2', age: 31 }
    ])
    return { grating, number, characters }
  }
})
</script>
../types/Character
