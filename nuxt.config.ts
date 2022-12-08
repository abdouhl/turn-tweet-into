// https://nuxt.com/docs/api/configuration/nuxt-config
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
  runtimeConfig: {
    apiUrl: process.env.API_URL
  },
  nitro: {
    preset: "vercel",
  },
})
