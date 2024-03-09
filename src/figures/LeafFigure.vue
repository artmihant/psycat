<template>

    <svg xml:space="preserve" class="absolute" :style="{
            'top': (top-size/2) + 'mm',
            'left': (left-size/2) + 'mm',
            'fill':color,
            'transform': `scale(${scale}, ${scale})`
        }" :width="size + 'mm'" :height="size+ 'mm'"  xmlns="http://www.w3.org/2000/svg">
        <path d="M2974.23 1840.34c-141.21 634.75-68.09 1315.22 204.74 1905.48 272.83 590.26 743.78 1086.85 1318.76 1390.55 441.05 232.97 931.9 351.75 1398.06 529.23 466.16 177.47 928.96 432.22 1199.6 851.21-99.45-1149.27-213.28-2568.35-837.92-3538.17-624.63-969.82-2377.41-799.64-2966.99-1487.8C3928.5 2938.66 5062.59 4198.1 6177.51 4917.79c-1289.43-539.76-2488.9-1799.21-3203.28-3077.45" transform="matrix(.01307 0 0 -.01094 -37.96 71.297)"/>
    </svg>

</template>

<script setup lang="ts">

import { ref } from 'vue';

const size = ref(14.49656915333791)

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