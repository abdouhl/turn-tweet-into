import { registerFont,createCanvas, Image } from 'canvas'
import { fillTextWithTwemoji } from 'node-canvas-with-twemoji-and-discord-emoji';
import ImgD from 'image-data-uri'
import { join } from "path"
import {readdir} from 'fs'


export default defineEventHandler(async (event) => {
console.log(process.env.PWD)

var res = []
res.push(process.env.PWD);
readdir(process.env.PWD, (err, files) => {
res.push("file");
  files.forEach(file => {
    res.push(file);
  });
});



  return  res
})

