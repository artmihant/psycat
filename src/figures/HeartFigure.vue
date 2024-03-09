<template>

    <svg xml:space="preserve" class="absolute" :style="{
            'top': (top-size/2) + 'mm',
            'left': (left-size/2) + 'mm',
            'fill':color,
            'transform': `scale(${scale}, ${scale})`
        }" :width="size + 'mm'" :height="size+ 'mm'"  xmlns="http://www.w3.org/2000/svg">
        <path d="M6682.67 5415.43c-399.82 399.81-1048.12 399.81-1448.06 0l-234.62-234.61-234.6 234.61c-399.95 399.81-1048.25 399.81-1448.06 0-399.81-399.81-399.81-1048.11 0-1448.06l234.61-234.61 1448.05-1448.05 1448.06 1448.05 234.62 234.61c399.8 399.95 399.8 1048.25 0 1448.06" transform="matrix(.01178 0 0 -.01361 -35.535 77.79)"/>
        <path d="M6682.67 5415.43c-399.82 399.81-1048.12 399.81-1448.06 0l-234.62-234.61-234.6 234.61c-399.95 399.81-1048.25 399.81-1448.06 0-399.81-399.81-399.81-1048.11 0-1448.06l234.61-234.61 1448.05-1448.05 1448.06 1448.05 234.62 234.61c399.8 399.95 399.8 1048.25 0 1448.06" transform="matrix(.01178 0 0 -.01361 -35.535 77.79)"/>
    </svg>

</template>

<script setup lang="ts">

import { ref } from 'vue';

const size = ref(12.354358626854449)

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