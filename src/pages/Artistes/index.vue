<script setup lang="ts">
import ArtisteCard from '../../components/ArtistCard.vue'
import { allArtiste } from '@/backend'

const artisteliste = await allArtiste()
console.log(artisteliste)
</script>

<template>
  <div>
    <ArtisteCard v-for="lesArtiste of artisteliste" :v-key="lesArtiste.id" v-bind="{ ...lesArtiste }" />
  </div>
</template>
