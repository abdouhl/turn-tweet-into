import { createCanvas, Image } from 'canvas'
import { fillTextWithTwemoji } from 'node-canvas-with-twemoji-and-discord-emoji';
import ImgD from 'image-data-uri'


export default defineEventHandler(async (event) => {

const {tweet_id} = event.context.params
const {name,username,profile_image_url_https,text,photos,tweet_text_dir,created_at,likes_count}= await $fetch(useRuntimeConfig().apiUrl+tweet_id)




const canvas = createCanvas(1800, 2100)
const ctx = canvas.getContext('2d')
const ctx1 = canvas.getContext('2d')

ctx.fillStyle = "rgb(231, 233, 234)";
// name
ctx.font = 'bold 60px chirp_bold';
await fillTextWithTwemoji(ctx,name, 226, 106);

// username
ctx.fillStyle = "rgb(113, 118, 123)";
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

ctx.fillStyle = "rgb(113, 118, 123)";
ctx.textBaseline = 'top'
ctx.font = '68px chirp_regular';
//ctx.fillText(part, w, h);
ctx.direction = tweet_text_dir;
await fillTextWithTwemoji(ctx,part, w, h);

}else{

ctx.fillStyle = "rgb(231, 233, 234)";
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


//add photos
var perfect_h = 1800-h;


if (photos.length >= 1){
ctx.save();  
ctx.beginPath();
var photo1_image = new Image()
var photo1_imageData = await ImgD.encodeFromURL(photos[0])
var hhh = 0;
var www = 0;
photo1_image.onload =() => {
www = 1734
hhh = (photo1_image.height/photo1_image.width*www).toFixed()
if (hhh > perfect_h){
hhh = perfect_h
www = (photo1_image.width/photo1_image.height*hhh).toFixed()
}
ctx.roundRect(900-(www/2).toFixed(),h+30,www,hhh, [40]);
ctx.clip();
ctx.drawImage(photo1_image, 0, 0,photo1_image.width,photo1_image.height,900-(www/2).toFixed(),h+30,www,hhh)
}
photo1_image.src = photo1_imageData
h += 50+ hhh
ctx.restore()
}

// add like image

var like_image = new Image()
const like_imageData = await ImgD.encodeFromURL('https://www.turntweetinto.com/love.png')
like_image.onload =() => ctx.drawImage(like_image, 0, 0,like_image.width,like_image.height,45,h+30,70,70)
like_image.src = like_imageData


ctx.fillStyle = "rgb(113, 118, 123)";
ctx.textBaseline = 'middle'
// likes
ctx.font = '60px chirp_regular';
ctx.fillText(likes_count, 120, h+65);
var likes_w = ctx.measureText(likes_count).width
// create_at
ctx.font = '60px chirp_regular';
ctx.fillText(created_at, 165+likes_w, h+65);



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

