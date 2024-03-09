<template>

    <svg xml:space="preserve" class="absolute" :style="{
            'top': (top-size/2) + 'mm',
            'left': (left-size/2) + 'mm',
            'fill':color,
            'transform': `scale(${scale}, ${scale})`
        }" :width="size + 'mm'" :height="size+ 'mm'"  xmlns="http://www.w3.org/2000/svg">
        <path d="M46.897 23.419 35.223 43.755l-23.449.058L0 23.535 11.674 3.198l23.449-.057Z"/>
    </svg>

</template>

<script setup lang="ts">

import { ref } from 'vue';

const size = ref(12.408224304058184)

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