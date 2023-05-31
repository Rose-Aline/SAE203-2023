<script setup lang="ts">
import Menuicon from '../icons/Menuicon.vue';
import Homeicon from '../icons/Homeicon.vue';
import {RouterLink} from 'vue-router'
</script>

<template>
  <header class="p-4 bg-darkbrown text-black h-20 relative fixed z-10 w-full">
<Menuicon />
<Homeicon />
  </header>
</template>
