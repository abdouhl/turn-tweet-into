// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiUrl: process.env.API_URL
  },
  nitro: {
    preset: "vercel",
  },
})
