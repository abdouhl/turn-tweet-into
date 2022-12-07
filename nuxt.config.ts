// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel",
  },
  runtimeConfig: {
    apiUrl: process.env.API_URL
  }
})
