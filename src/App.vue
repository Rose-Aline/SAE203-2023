<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/HeaderPage.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <Footer />
</template>