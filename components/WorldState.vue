<script setup lang="ts">
const { data: news, pending } = await useFetch("/api/worldState");
</script>
<template>
  <p v-if="pending">carregando....</p>
  <div class="h-auto max-w-screen h-[99.9vh] w-full" md="mx-auto ">
    <WorldStateNews class="max-h-[10vh]" :newsData="news" />
  </div>
</template>
