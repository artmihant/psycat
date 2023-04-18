<template>
    <Suspense>
      <MainLoader/>
      <template #fallback>
        Загрузка...
      </template>
    </Suspense>
</template>
  
<script setup>

import MainLoader from "@/MainLoader.vue";
</script>
  