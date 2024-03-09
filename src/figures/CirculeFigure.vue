<template>

    <svg xml:space="preserve" class="absolute" :style="{
            'top': (top-size/2) + 'mm',
            'left': (left-size/2) + 'mm',
            'fill':color,
            'transform': `scale(${scale}, ${scale})`
        }" :width="size + 'mm'" :height="size+ 'mm'"  xmlns="http://www.w3.org/2000/svg">
       <circle cx="21.338" cy="21.338" r="21.338"/>
    </svg>

</template>

<script setup lang="ts">

import { ref } from 'vue';

const size = ref(11.29139783850454)

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