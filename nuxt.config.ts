// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["canvas", "image-data-uri", "node-canvas-with-twemoji-and-discord-emoji"],
  runtimeConfig: {
    apiUrl: process.env.API_URL
  },
  nitro: {
    preset: "vercel",
  },
})
