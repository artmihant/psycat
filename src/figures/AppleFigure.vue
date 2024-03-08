<template>

    <svg xml:space="preserve" class="absolute" :style="{
            'top': (top-size/2) + 'mm',
            'left': (left-size/2) + 'mm',
            'fill':color
        }" :width="size + 'mm'" :height="size+ 'mm'"  xmlns="http://www.w3.org/2000/svg">
        <path d="M21.935 5.665c1.908-.03 10.132-5.264 17.161-.357 5.489 3.832 5.747 12.036 4.135 18.964-2.004 8.613-5.417 14.586-11.83 17.062-3.043 1.174-5.748-.265-8.898-.246-3.088.02-5.39 1.482-8.91.066C7.225 38.593 2.995 32.492 1.02 24.95-.855 17.78-.52 9.028 5.236 5.392c7.976-5.038 14.976.301 16.699.273"/>
    </svg>

</template>

<script setup lang="ts">

import { ref } from 'vue';

const size = ref(11.66682978737163)

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