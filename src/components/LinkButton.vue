<template>
    <button class=" rounded-lg border p-2 border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100">
        <RouterLink :to="props.to" class="no-underline"><slot /></RouterLink>
    </button>
</template>

<script setup>

import {defineProps} from 'vue';

const props = defineProps({
    to: {type:String, required: true}
})

</script>

