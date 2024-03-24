<template>
    <router-view/>
</template>

<script setup>

import useState from "@/state";

const state = useState()

state.start()

</script>
 
