<template>
    <RouterLink v-if="!props.disabled"
            :to="props.to" class="no-underline">
        <div class="rounded-lg border px-2 py-3 inline border-neutral-700 bg-white text-neutral-900 hover:bg-neutral-100">
            <slot />
        </div>
    </RouterLink>

    <div v-else disabled class="rounded-lg inline border p-2 border-neutral-400 bg-white text-neutral-500">
        <slot/>
    </div>

</template>

<script setup>

import {defineProps} from 'vue';

const props = defineProps({
    to: {type:String, required: true},
    disabled: {type:Boolean, required: false, default: false},
})


</script>

