import { registerFont,createCanvas, Image } from 'canvas'
import { fillTextWithTwemoji } from 'node-canvas-with-twemoji-and-discord-emoji';

import ImgD from 'image-data-uri'
export default defineEventHandler(async (event) => {
const {tweet_id} = event.context.params
const {name,username,profile_image_url_https,text,photos,tweet_text_dir}= await $fetch(useRuntimeConfig().apiUrl+tweet_id)

registerFont('public/fonts/chirp-regular-web.woff', { family: 'chirp_regular' })
registerFont('public/fonts/chirp-bold-web.woff', { family: 'chirp_bold' })




const canvas = createCanvas(1800, 2100)
const ctx = canvas.getContext('2d')
const ctx1 = canvas.getContext('2d')

ctx.fillStyle = "black";
// name
ctx.font = 'bold 60px chirp_bold';
ctx.fillText(name, 226, 106);
// username
ctx.fillStyle = "rgb(83, 100, 113)";
ctx.textBaseline = 'top'
ctx.font = '45px chirp_regular';
ctx.fillText('@'+username, 226, 116);

// follow btn
var follow_image = new Image();
follow_image.onload = () => ctx.drawImage(follow_image, 0, 0,follow_image.width,follow_image.height,1336,60,266,102)
const follow_imageData = await ImgD.encodeFromURL('https://www.turntweetinto.com/follow.png')
follow_image.src = follow_imageData

// arrow
var arrow_image = new Image();
arrow_image.onload = () => ctx.drawImage(arrow_image, 0, 0,arrow_image.width,arrow_image.height,1702,89,44,44)
const arrow_imageData = await ImgD.encodeFromURL('https://www.turntweetinto.com/arrow-down-3101.png')
arrow_image.src = arrow_imageData

//text 

var h = 220;
var w = 45;


for(var line of text){
w = 45;
for(var part of line){
part = part.replaceAll('&amp;','&').replaceAll('  ',' ')
if(part[0] === '@' || part[0] === '#'){

ctx.fillStyle = "rgb(29, 155, 240)";
ctx.textBaseline = 'top'
ctx.font = '68px chirp_regular';
//ctx.fillText(part, w, h);
ctx.direction = tweet_text_dir;
await fillTextWithTwemoji(ctx,part, w, h);

}else{

ctx.fillStyle = "black";
ctx.textBaseline = 'top'
ctx.font = '68px chirp_regular';
//ctx.fillText(part, w, h);
ctx.direction = tweet_text_dir;
await fillTextWithTwemoji(ctx,part, w, h);
}
w+= ctx.measureText(part).width
}
h += 80
}



// add profile image

ctx.beginPath()
ctx.arc(45+83, 28+83, 83, 0, Math.PI * 2)
ctx.clip()

var profile_image = new Image()
const profile_imageData = await ImgD.encodeFromURL(profile_image_url_https)
profile_image.onload =() => ctx.drawImage(profile_image, 0, 0,profile_image.width,profile_image.height,45,28,166,166)
profile_image.src = profile_imageData

// finish profile image





  return  canvas.createPNGStream() 
})

