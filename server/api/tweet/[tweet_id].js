import { registerFont,createCanvas, Image } from 'canvas'
import { fillTextWithTwemoji } from 'node-canvas-with-twemoji-and-discord-emoji';
import ImgD from 'image-data-uri'

export default defineEventHandler(async (event) => {
const {tweet_id} = event.context.params
const {name,username,profile_image_url_https,text,photos,tweet_text_dir}= await $fetch(useRuntimeConfig().apiUrl+tweet_id)

  return  `${process.env.PWD}`
})

