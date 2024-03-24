<template>
    <button v-if="!props.disabled" class="rounded-lg border px-2 py-3 inline border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100">
        <slot />
    </button>
    <button v-else disabled class="rounded-lg inline border p-2 border-neutral-400 bg-white text-neutral-500">
        <slot/>
    </button>

</template>

<script setup>

import {defineProps} from 'vue';

const props = defineProps({
    disabled: {type:Boolean, required: false, default: false},
})


</script>

