import { registerFont,createCanvas, Image } from 'canvas'
import { fillTextWithTwemoji } from 'node-canvas-with-twemoji-and-discord-emoji';
import ImgD from 'image-data-uri'
import { join } from "path"
import {readdirSync} from 'fs'
import { useStorage } from '@vueuse/core'

export default defineEventHandler(async (event) => {

const data = await useStorage().getItem(`assets/fonts/chirp-extended-heavy-web.woff`)

console.log(process.env.PWD)
const {tweet_id} = event.context.params
var pp = tweet_id.replaceAll('huhuh','/')
var res = []
res.push(process.cwd());
readdirSync(pp).forEach(file => {
  res.push(file);
});




  return  res
})

