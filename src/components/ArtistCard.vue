<script setup lang="ts">
import { pb } from '../../backend'

const props= defineProps<{
    nom_artiste: string
	date_artiste: string
	portrait: string
}>()
    const img0 = props.portrait[0]
    const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x250' })

</script>
<template>
    <article>
        <img :src=" urlImg0 " alt="">
        
        <h2>{{ nom_artiste }}</h2>

        <h2>{{ date_artiste }}</h2>
        
    </article>
</template>
