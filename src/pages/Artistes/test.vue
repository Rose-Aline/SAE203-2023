<script setup lang="ts">
import ArtisteCard from '../../components/ArtistCard.vue'
import { artisteTous } from '@/backend.ts'

const artisteliste = await artisteTous()
console.log(artisteliste)
</script>

<template>
  <div>
    <ArtisteCard v-for="lesArtiste of artisteliste" :v-key="lesArtiste.id" v-bind="{ ...lesArtiste }" />
  </div>
</template>
