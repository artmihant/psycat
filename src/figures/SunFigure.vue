<template>

    <svg xml:space="preserve" class="absolute" :style="{
            'top': (top-size/2) + 'mm',
            'left': (left-size/2) + 'mm',
            'fill':color
        }" :width="size + 'mm'" :height="size+ 'mm'"  xmlns="http://www.w3.org/2000/svg">
        <path d="M49.402 59.865 35.816 45.426l-4.198 19.31-3.68-19.545L14.043 59.15l7.393-18.448-19.18 4.175 16.12-11.492L0 26.451l19.729-.888L7.991 9.722l17.074 9.998L23.692 0l8.998 17.71L42.118.373l-1.935 19.799 17.236-9.45-12.254 15.602 19.571 1.437-18.681 6.452L61.748 46.08 42.57 41.334Z"/>
    </svg>

</template>

<script setup lang="ts">

import { ref } from 'vue';

const size = ref(17.128210047076415)

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
})

</script>