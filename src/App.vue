<script setup lang="ts">
import PocketBase from 'pocketbase'
      var pocketbase_ip=''
      if(import.meta.env.MODE === 'production')
      pocketbase_ip='http://193.168.145.144:81'
      else
      pocketbase_ip='http://127.0.0.1:8090'
      alert(pocketbase_ip)


</script>

<template>
      <RouterView />
</template>