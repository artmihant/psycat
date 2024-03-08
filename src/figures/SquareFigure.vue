<template>

    <svg xml:space="preserve" class="absolute" :style="{
            'top': (top-size/2) + 'mm',
            'left': (left-size/2) + 'mm',
            'fill':color
        }" :width="size + 'mm'" :height="size+ 'mm'"  xmlns="http://www.w3.org/2000/svg">
        <path  d="M0 .003h37.795v37.795H0Z"/>
    </svg>

</template>

<script setup lang="ts">

import { ref } from 'vue';

const size = ref(10)

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