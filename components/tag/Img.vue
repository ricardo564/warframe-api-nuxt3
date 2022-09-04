<script setup>
import { defineProps } from "@vue/runtime-core";

const props = defineProps({
  src: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: null,
  },
  customStyle: {
    type: String,
    default: " w-full h-full ",
  },
});
</script>
<template>
  <img :src="src" :alt="alt" :class="customStyle" />
</template>
