<template>

    <svg xml:space="preserve" class="absolute" :style="{
            'top': (top-size/2) + 'mm',
            'left': (left-size/2) + 'mm',
            'fill':color,
            'transform': `scale(${scale}, ${scale})`
        }" :width="size + 'mm'" :height="size+ 'mm'"  xmlns="http://www.w3.org/2000/svg">
       <path d="M47.568 39.446c.037 11.728-7.446 19.438-18.267 19.207-9.568-.204-16.846-7.776-17.047-17.762-.133-6.595 1.751-12.746 4.311-18.713C19.837 14.553 24.143 7.516 29.044.834c.455-.621.782-1.392 1.616-.24 6.89 9.519 12.846 19.508 15.85 31.004.705 2.69 1.128 5.433 1.058 7.848" />
    </svg>

</template>

<script setup lang="ts">

import { ref } from 'vue';

const size = ref(15.519865062918969)

defineProps({
    color: {
        type: String,
        required: true
    },
    top: {
        type: Number,
        required: true
    },
    left: {
        type: Number,
        required: true
    },
    scale: {
        type: Number,
        required: true
    }
})

</script>