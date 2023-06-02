<script setup lang="ts">
import ArtistCard from '../components/ArtistCard.vue'
import { artisteTous } from '../../backend'

const artistes = await artisteTous()
console.log(artistes)
</script>

<template>
    <main class="bg-backgroundbeige">

      <div class="lg:flex">
        <div class="lg:w-1/2">
          <img src="../img/Robert_Demarchy_Severity_light.webp" alt="Image" class="w-full h-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.30)]	object-cover ">
        </div>

        <div class="pt-8 px-16 pr-20 bg-beige lg:w-1/2">
          <h1 class="uppercase">Le pictorialisme</h1>
          <h2>Exposition du 13 Avril au 21 Juin 2021</h2>
          <p class="pt-3">Le pictorialisme est un mouvement esthétique international qui caractérise la photographie à partir de 1885 environ.</p>
          <p class="pt-3">Les artistes pictorialistes souhaitent « dépasser la simple imitation mécanique pour ériger la photographie en un art autonome et distinct.</p>
            <RouterLink to="Billeterie">
              <button class="btn my-10">
                Réserver un billet
              </button>
            </RouterLink>
          </div>
        </div>

        <div class="pl-20">
          <h1 class="uppercase pt-12">Les artistes du <RouterLink to="Mouvement" class="text-orange">pictorialisme</Routerlink></h1>
          <hr class="w-1/2 pb-3 hidden lg:block">
        </div>

        <div class="flex flex-row justify-between px-20">
        <ArtistCard v-for="artiste of artistes" :key="artiste.id" v-bind="{ ...artiste }" />
        </div>
    </main>
</template>

