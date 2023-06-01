<script setup lang="ts">
import Menuicon from '../icons/Menuicon.vue';
import Homeicon from '../icons/Homeicon.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const showMenu = ref(false);

function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<template>
  <header class="p-4 bg-darkbrown text-black h-20 relative fixed z-10 w-full flex justify-between items-center">
    <RouterLink to="/">
      <Homeicon />
    </RouterLink>

    <button @click="toggleMenu">
      <Menuicon />
    </button>

    <nav class="absolute top-20 left-0 bg-white text-black w-full h-96 py-2 px-4 pt-4" :class="{ 'hidden': !showMenu }">
      <ul class="flex flex-col space-y-6 text-xl font-roboto font-extrabold	text-center content-center">
        <li><RouterLink to="/">ACCUEIL</RouterLink></li>
          <hr class="border-gray-300 w-52 mx-auto">
        <li><RouterLink to="/">EXPOSITION</RouterLink></li>
        <hr class="border-gray-300 w-52 mx-auto">
        <li><RouterLink to="/">LE PICTURALISME</RouterLink></li>
        <hr class="border-gray-300 w-52 mx-auto">
        <li><RouterLink to="/">LES ARTISTES</RouterLink></li>
        <hr class="border-gray-300 w-52 mx-auto">
        <li><RouterLink to="/">CONTACT</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>