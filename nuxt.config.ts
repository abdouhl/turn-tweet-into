// https://nuxt.com/docs/api/configuration/nuxt-config
// yarn build  .nuxt/dist yarn install
if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`,
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
}
export default defineNuxtConfig({
  modules: ['@nuxtjs/robots','@nuxt/image-edge',"@nuxtjs/tailwindcss"],
  runtimeConfig: {
    apiUrl: process.env.API_URL
  },
  robots: {
    
  },
  css: [
    '@/assets/css/main.css',
  ],
  nitro: {
    preset: "vercel",
  },
})
