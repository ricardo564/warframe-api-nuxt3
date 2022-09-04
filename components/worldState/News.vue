<script setup>
import { computed } from "@vue/reactivity";
import { defineEmits, defineProps } from "@vue/runtime-core";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  newsData: {
    type: Object,
    default: () => {
      return {
        id: null,
        message: null,
        link: null,
        imageLink: null,
        priority: false,
        date: null,
        eta: null,
        update: false,
        primeAccess: false,
        stream: false,
        translations: {
          en: null,
          fr: null,
          it: null,
          de: null,
          es: null,
          pt: null,
          ru: null,
          pl: null,
          uk: null,
          tr: null,
          ja: null,
          zh: null,
          ko: null,
          tc: null,
        },
      };
    },
  },
});

const news = computed({
  get() {
    return props.newsData.news;
  },
});
</script>
<template>
  <Slider v-model:imagesData="news" />
</template>
