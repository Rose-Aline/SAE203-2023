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
    <RouterLink to="/" class="lg:hidden">
      <Homeicon />
    </RouterLink>

    <RouterLink to="/">
      <h2 class="uppercase hidden lg:block text-white font-medium text-3xl pl-8">Le pictorialisme</h2>
    </RouterLink>

    <button @click="toggleMenu" class="lg:hidden">
      <Menuicon />
    </button>

    <div class="hidden lg:flex items-center text-white font-medium pr-8 ">
      <RouterLink to="Billeterie"><h3>EXPOSITION</h3></RouterLink>
        <hr class="h-8 border-r border-green-500 mx-4">
        <RouterLink to="Mouvement"><h3>LE PICTORIALISME</h3></RouterLink>
        <hr class="h-8 border-r border-green-500 mx-4">
        <RouterLink to="/"> <h3>LES ARTISTES</h3></RouterLink>
    </div>

    <nav class="absolute top-20 left-0 bg-white text-black w-full h-96 py-2 px-4 pt-4" :class="{ 'hidden': !showMenu }">
      <ul class="flex flex-col space-y-6 text-xl font-roboto font-extrabold	text-center content-center">
        <li><RouterLink to="/">ACCUEIL</RouterLink></li>
          <hr class="border-gray-300 w-52 mx-auto">
        <li><RouterLink to="Billeterie">EXPOSITION</RouterLink></li>
        <hr class="border-gray-300 w-52 mx-auto">
        <li><RouterLink to="Mouvement">LE PICTORIALISME</RouterLink></li>
        <hr class="border-gray-300 w-52 mx-auto">
        <li><RouterLink to="/">LES ARTISTES</RouterLink></li>
        <hr class="border-gray-300 w-52 mx-auto">
        <li><RouterLink to="Contact">CONTACT</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>