<script setup lang="ts">
import {RouterLink} from 'vue-router'
</script>

<template>
  <footer class="lg:grid lg:grid-cols-5 bg-darkbrown text-black w-full px-10 py-10 text-sm font-ubuntu	">

     <div class="pb-10">
       <h3 class="font-medium">A PROPOS</h3>
       <hr class="w-28 pb-3">
        <ul>
          <li><a href="#">Exposition</a></li>
          <li><a href="#">Le picturalisme</a></li>
          <li><a href="https://www.fondationcartier.com/confidentialite">Politique de Confidentialité</a></li>
          <li><a href="https://www.fondationcartier.com/credits-legal">Conditions d&apos;utilisations</a></li>
        </ul>
    </div>

      <div class="hidden lg:block">
        <h3 class="font-medium">BILLETERIE</h3>
        <hr class="w-28 pb-3">
        <ul class="list-disc list-inside">
          <li><a href="#">Voir les prix</a></li>
          <li><a href="#">Acheter un billet</a></li>
        </ul>      
    </div>

    <div class="hidden lg:block">
       <h3 class="font-medium">ARTISTES</h3>
       <hr class="w-28 pb-3">
        <ul class="list-disc list-inside">
          <li><a href="#">Alvin Langdon Coburn</a></li>
          <li><a href="#">Heinrich Kühn</a></li>
          <li><a href="#">George Seeley</a></li>
          <li><a href="#">Robert Demachy</a></li>
        </ul>
    </div>

    <div class="pb-10">
        <h3 class="font-medium">CONTACT</h3>
        <hr class="w-28 pb-3">
        <ul class="list-disc list-inside">
          <li><a href="#">Contacts</a></li>
          <li>Un problème ? Contactez l&apos;adresse <a href="mailto:alinerose262003@gmail.com">alinerose262003@gmail.com</a></li>
        </ul>      
    </div>

    <div class="flex justify-end items-end">
      <img class="self-end w-28 " src="../img/MMIlogo.png" alt="Logo du site MMI" />
    </div>

    </footer>
  </template>