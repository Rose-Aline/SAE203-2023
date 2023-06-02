<script setup lang="ts">
import {RouterLink} from 'vue-router'
</script>

<template>
  <footer class="lg:grid lg:grid-cols-5 bg-darkbrown text-black w-full px-10 py-10 text-sm font-ubuntu	">

     <div class="pb-10">
       <h3 class="font-medium">A PROPOS</h3>
       <hr class="w-28 pb-3">
        <ul>
          <li><RouterLink to="Billeterie">Exposition</RouterLink></li>
          <li><RouterLink to="Mouvement">Le Pictorialisme</RouterLink></li>
          <li><a href="https://www.fondationcartier.com/confidentialite">Politique de Confidentialité</a></li>
          <li><a href="https://www.fondationcartier.com/credits-legal">Conditions d&apos;utilisations</a></li>
        </ul>
    </div>

      <div class="hidden lg:block">
        <h3 class="font-medium">BILLETERIE</h3>
        <hr class="w-28 pb-3">
        <ul class="list-disc list-inside">
          <li><RouterLink to="Billeterie">Voir les prix</RouterLink></li>
          <li><a href="https://fondation-cartier.tickeasy.com/fr-FR/tarifs">Acheter un billet</a></li>
        </ul>      
    </div>

    <div class="hidden lg:block">
       <h3 class="font-medium">ARTISTES</h3>
       <hr class="w-28 pb-3">
        <ul class="list-disc list-inside">
          <li><RouterLink to="/">Alvin Langdon Coburn</RouterLink></li>
          <li><RouterLink to="/">Heinrich Kühn</RouterLink></li>
          <li><RouterLink to="/">George Seeley</RouterLink></li>
          <li><RouterLink to="/">Robert Demachy</RouterLink></li>
        </ul>
    </div>

    <div class="pb-10">
        <h3 class="font-medium">CONTACT</h3>
        <hr class="w-28 pb-3">
        <ul class="list-disc list-inside">
          <li><RouterLink to="Contact">Contacts</RouterLink></li>
          <li>Un problème ? Contactez l&apos;adresse <a href="mailto:alinerose262003@gmail.com">alinerose262003@gmail.com</a></li>
        </ul>      
    </div>

    <div class="flex justify-end items-end">
      <a href="https://butmmi.thomasjeu.fr/#/"><img class="self-end w-28 " src="../img/MMIlogo.png" alt="Logo du site MMI" /></a>
    </div>

    </footer>
  </template>