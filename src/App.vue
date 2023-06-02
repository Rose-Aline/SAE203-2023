<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/HeaderPage.vue'
import Footer from './components/Footer.vue'

      var pocketbase_ip=''
      if(import.meta.env.MODE === 'production')
      pocketbase_ip='http://193.168.145.144:80'
      else
      pocketbase_ip='http://127.0.0.1:8090'
      alert(pocketbase_ip)
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <Footer />
</template>