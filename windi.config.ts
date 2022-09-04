import { defineConfig } from "windicss/helpers";

export default defineConfig({
  transformCSS: "pre",
  attributify: true,
  darkMode: "class",
  extract: {
    include: [
      "app.vue",
      "pages/**/*.vue",
      "layouts/**/*.vue",
      "components/**/*.vue",
    ],
    exclude: ["node_modules", ".gitignore", ".env"],
  },
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      animation: {
        fadeOut: "fadeOut 5s ease-in-out",
        fadeInFromLeft: "fadeInFromLeft 0.2s ease-in-out",
      },
      keyframes: {
        fadeOut: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translateY( -100px )",
          },
        },
        fadeInFromLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX( -100px )",
          },
          "100%": {
            opacity: 1,
            transform: "translateX( 0 )",
          },
        },
      },
      screens: {
        xxs: "280px",
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
        xxxl: "2560px",
      },
    },
  },
});
