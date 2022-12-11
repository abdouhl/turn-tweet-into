import { registerFont,createCanvas, Image } from 'canvas'
import { fillTextWithTwemoji } from 'node-canvas-with-twemoji-and-discord-emoji';
import ImgD from 'image-data-uri'
import { join } from "path"
import fs from 'fs'


export default defineEventHandler(async (event) => {
console.log(process.env.PWD)

var res = []

fs.readdir(process.env.PWD, (err, files) => {
  files.forEach(file => {
    res.push(file);
  });
});



  return  res
})

