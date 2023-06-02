<script setup lang="ts">

// bug MaisonResponse
const props= defineProps<{
    nom_artiste: string
	nationalite: string
	date_artiste: string
	portrait: string
}>()

</script>
<template>
    <article>
        <h3>
            <a href="#">{{ nom_artiste }}</a>
        </h3>
    </article>
</template>
