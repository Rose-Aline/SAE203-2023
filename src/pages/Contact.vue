<script setup lang="ts">
</script>

<template>
 <main class="bg-backgroundbeige pl-20">
  <h1 class="uppercase py-7">Contact</h1>
  <form>
    <div class="pb-6">
      <label for="name" class="block">Nom / Prénom *</label>
      <input type="text" id="name" class="bg-gray h-14 w-3/4 rounded-lg">
    </div>
    <div class="pb-6">
      <label for="subject" class="block">Objet *</label>
      <input type="text" id="subject" class="bg-gray h-14 w-3/4 rounded-lg">
    </div>
    <div>
      <label for="message" class="block">Votre message</label>
      <textarea id="message" class="bg-gray-200 h-40 w-3/4 rounded-lg"></textarea>
    </div>
        <div class="flex items-center pr-20">
            <input type="checkbox" id="accept" class="mr-2">
            <label for="accept">En soumettant ce formulaire, j'accepte que les informations saisies dans ce formulaire soient utilisées, exploitées, traitées pour permettre de me recontacter.</label>
        </div>
    <button class="btn my-10 lg:mb-40">Envoyer</button>
  </form>


</main>
</template>

