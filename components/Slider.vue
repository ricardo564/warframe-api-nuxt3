<script setup>
import { ref, reactive, onMounted } from "vue";
import { defineProps } from "@vue/runtime-core";

onMounted(() => {
  autoForward();
});

const props = defineProps({
  imagesData: {
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
        translations: {},
      };
    },
  },
});

const data = reactive({
  currentIndex: ref(0),
  images: props.imagesData,
  time: 3000,
});

const previous = function () {
  resetAutoForward();

  if (data.currentIndex > 0) {
    data.currentIndex = data.currentIndex - 1;
    return;
  }

  data.currentIndex = data.images.length - 1;
};

const forward = function () {
  console.log("forward:", data.currentIndex, data.images.length);
  resetAutoForward();

  if (data.currentIndex < data.images.length - 1) {
    data.currentIndex = data.currentIndex + 1;
    return;
  }

  data.currentIndex = 0;
};

const autoForward = function () {
  setTimeout(() => {
    forward();
    autoForward();
  }, data.time);
};

const resetAutoForward = function () {
  data.time = 3000;
};

const isActiveSlide = function (value) {
  return data.currentIndex == value;
};
</script>
<template>
  <div
    class="flex h-auto bg-gray-900 min-h-60 w-full justify-center items-center relative"
    sm="min-h-115"
    lg="min-h-full"
  >
    <tagButton
      customStyle="rounded-full flex bg-gray-100 h-11 shadow-md top-1/2 left-5 w-11 z-10 -translate-y-1/2 absolute items-center justify-center my-auto"
      title="Slide Anterior."
      @click="previous"
    >
      <svg
        class="font-bold h-8 text-gray-500 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </tagButton>

    <tagButton
      class="rounded-full flex max-h-screen max-w-screen bg-gray-100 h-11 shadow-md top-1/2 right-5 w-11 z-10 -translate-y-1/2 absolute items-center justify-center"
      title="Próximo slide."
      @click="forward"
    >
      <svg
        class="font-bold h-8 text-gray-500 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </tagButton>
    <template v-for="(image, index) in data.images" :key="image.id">
      <div
        v-if="isActiveSlide(index)"
        class="rounded-md flex h-auto w-full relative overflow-hidden items-center"
        md="mx-auto h-full"
      >
        <slot name="header" />
        <tagFigure
          v-model:caption="image.message"
          captionStyle="text-white md:absolute md:inset-y-0 md:left-0 z-4 text-center flex justify-center md:justify-left items-center md:ml-24 md:text-5xl md:max-w-[60vh] lg:max-w-[70vh]"
        >
          <tagImg
            customStyle="rounded-none h-auto object-cover w-full"
            :src="image.imageLink"
            :alt="image.message"
          />
        </tagFigure>
        <slot name="footer" />
      </div>
    </template>
  </div>
</template>
