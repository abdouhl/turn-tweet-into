import { registerFont,createCanvas, Image } from 'canvas'
import { fillTextWithTwemoji } from 'node-canvas-with-twemoji-and-discord-emoji';
import ImgD from 'image-data-uri'
import { join } from "path"
import {readdirSync} from 'fs'


export default defineEventHandler(async (event) => {
console.log(process.env.PWD)

var res = []
res.push(process.env.PWD);
readdirSync('/home').forEach(file => {
  res.push(file);
});





  return  res
})

