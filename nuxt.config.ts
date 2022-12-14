import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: "Warframe api with Windicss",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "Warframe api",
        content:
          "A layout dedicated to neatly displaying the information provided by Warframe's free api.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  buildModules: ["nuxt-windicss", "@kevinmarrec/nuxt-pwa"],
  pwa: {
    manifest: {
      name: "Warframe-api Nuxt3 Windicss",
      short_name: "WNW",
      theme_color: "#000000",
    },
    workbox: {
      enabled: true,
    },
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
});
