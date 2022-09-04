<script setup>
import { defineProps } from "@vue/runtime-core";

const props = defineProps({
  figureStyle: {
    type: String,
    default: " w-full h-full ",
  },
  captionStyle: {
    type: String,
    default: " text-center ",
  },
  caption: {
    type: String,
    default: null,
  },
});
</script>
<template>
  <figure v-bind="$attrs" :class="figureStyle">
    <slot />
    <figcaption v-if="caption" :class="captionStyle">
      {{ caption }}
    </figcaption>
  </figure>
</template>
