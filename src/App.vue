<template>
  <div>
    <q-layout
      view="lhh LpR lff"
      container
      style="height: 100vh"
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <q-header reveal :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
        <q-toolbar>
          <q-toolbar-title>Header</q-toolbar-title>
          <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/caught">Caught</router-link>
            <router-link to="/liked">Liked</router-link>
            <router-link :to="'/pokemon/' + random">Random Pokemon</router-link>
          </nav>
        </q-toolbar>
      </q-header>

      <q-footer>
        <q-toolbar>
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>
      </q-footer>

      <q-page-container>
        <div class="container">
          <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/caught">Caught</router-link>
            <router-link to="/liked">Liked</router-link>
            <router-link :to="'/pokemon/' + random">Random Pokemon</router-link>
          </nav>
          <RouterView />
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

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
  font-size: 1rem;
  padding: 1rem;
}
a {
  color: white;
}
</style>
