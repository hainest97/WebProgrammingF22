<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavVue from './components/nav.vue'
</script>

<template>
  <header>
    <NavVue />
  </header>
  <div class="container">
    <RouterView />
  </div>
  
</template>

<style scoped>

</style>
