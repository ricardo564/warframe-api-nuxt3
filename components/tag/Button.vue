<script setup>
import { computed } from "@vue/reactivity";
import { defineEmits, defineProps } from "@vue/runtime-core";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  customStyle: {
    type: String,
    default: null,
  },
  labelStyle: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
});
</script>
<template>
  <button
    class="transition-all hover:(bg-gray-300)"
    :class="customStyle"
    :type="type"
    :label="label"
    :disabled="disabled"
    :title="title"
  >
    <em v-if="icon" :class="icon" />
    <span v-if="labelStyle" :class="labelStyle">{{ label }}</span>
    <slot />
  </button>
</template>
