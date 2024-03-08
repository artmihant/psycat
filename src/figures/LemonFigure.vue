<template>

    <svg xml:space="preserve" class="absolute" :style="{
            'top': (top-size/2) + 'mm',
            'left': (left-size/2) + 'mm',
            'fill':color
        }" :width="size + 'mm'" :height="size+ 'mm'"  xmlns="http://www.w3.org/2000/svg">
        <path d="M35.01 35.023c7.238-7.238 9.43-17.323 6.106-24.933a16.848 16.848 0 0 0-.49-1.026c-.402-1.154-.526-2.479-.526-2.479a3.56 3.56 0 0 0-1.007-3.03 3.565 3.565 0 0 0-3.503-.907c-.196.03-.625.024-1.402-.296-.427-.245-.864-.47-1.31-.676C25.23-1.852 14.961.298 7.62 7.638.073 15.186-1.987 25.83 1.972 33.535c.05.097.101.194.154.29.356.87.23 2.306.204 2.563a3.558 3.558 0 0 0 1.025 2.903 3.561 3.561 0 0 0 3.054 1.004c.004 0 1.162-.184 3.797.892l.277.115c.002 0 .004.006.006.006 7.56 3.069 17.413.827 24.521-6.28"/>
    </svg>

</template>

<script setup lang="ts">

import { ref } from 'vue';

const size = ref(11.279693168067705)

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