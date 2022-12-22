import { createCanvas, Image } from 'canvas'
import { fillTextWithTwemoji } from 'node-canvas-with-twemoji-and-discord-emoji';
import ImgD from 'image-data-uri'


export default defineEventHandler(async (event) => {

var {tweet_id} = event.context.params
var ll = tweet_id.split('-')
var tweet_id = ll[0]
var show_media = "true"
var show_info = "true"
var crop_it="false"
if(ll.length == 2){
show_media = ll[1]
}else if(ll.length >= 3){
show_media = ll[1]
show_info = ll[2]
}
if(ll.length >=4 ){
crop_it = ll[3]
}

const {name,username,profile_image_url_https,text,photos,tweet_text_dir,created_at,likes_count,isverified}= await $fetch(useRuntimeConfig().apiUrl+tweet_id)




const canvas = createCanvas(1800, 2100)
const ctx = canvas.getContext('2d')


ctx.fillStyle = "black";
// name
ctx.font = 'bold 60px chirp_bold';
await fillTextWithTwemoji(ctx,name, 226, 106);

var tv_image = new Image();
tv_image.onload = () => ctx.drawImage(tv_image, 0, 0,tv_image.width,tv_image.height,226+ctx.measureText(name).width,80,50,50)
const tv_imageData = await ImgD.encodeFromURL('https://www.turntweetinto.com/tv.png')
if(isverified){

tv_image.src = tv_imageData
}

// username
ctx.fillStyle = "rgb(83, 100, 113)";
ctx.textBaseline = 'top'
ctx.font = '45px chirp_regular';
ctx.fillText('@'+username, 226, 116);



/*
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
*/
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
ctx.font = '57px chirp_regular';
//ctx.fillText(part, w, h);
ctx.direction = tweet_text_dir;
await fillTextWithTwemoji(ctx,part, w, h);

}else{

ctx.fillStyle = "black";
ctx.textBaseline = 'top'
ctx.font = '57px chirp_regular';
//ctx.fillText(part, w, h);
ctx.direction = tweet_text_dir;
await fillTextWithTwemoji(ctx,part, w, h);
}
w+= ctx.measureText(part).width
}
h += 80
}


//-----------------------media----------------
if(show_media != "false"){
//add photos
var perfect_h = 1800-h;


if (photos.length == 1){
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
h = parseInt(h)+50+ parseInt(hhh)
ctx.restore()

}else if (photos.length == 2){

ctx.save();  
ctx.beginPath();
var photo1_image = new Image()
var photo1_imageData = await ImgD.encodeFromURL(photos[0])
var photo2_image = new Image()
var photo2_imageData = await ImgD.encodeFromURL(photos[1])
var hhh = 960;
var www = 1710;
if(perfect_h < 960){
  hhh = perfect_h
  www = (1710/960*hhh).toFixed()
}

ctx.roundRect(900-(www/2).toFixed(),h+30,www,hhh, [40]);
ctx.clip();

// 860 ---> hhh
// 
photo1_image.onload =() => {
var www1 = 0;
var hhh1 = 0;
if((photo1_image.width/photo1_image.height) > ((www/2).toFixed()/hhh)){

www1 = ((www/2).toFixed() * photo1_image.height / hhh).toFixed()
hhh1 = photo1_image.height

}else if((photo1_image.width/photo1_image.height) < ((www/2).toFixed()/hhh)){
hhh1 = (hhh * photo1_image.width / (www/2).toFixed()).toFixed()
www1 = photo1_image.width
}else if((photo1_image.width/photo1_image.height) == ((www/2).toFixed()/hhh)){
hhh1 = hhh
www1 = (www/2).toFixed()
}
ctx.drawImage(photo1_image, ((photo1_image.width-www1)/2).toFixed(), ((photo1_image.height-hhh1)/2).toFixed(),www1,hhh1,897-(www/2).toFixed(),h+30,(www/2).toFixed(),hhh)
}

photo1_image.src = photo1_imageData

photo2_image.onload =() => {
var www2 = 0;
var hhh2 = 0;
if((photo2_image.width/photo2_image.height) > ((www/2).toFixed()/hhh)){

www2 = ((www/2).toFixed() * photo2_image.height / hhh).toFixed()
hhh2 = photo2_image.height

}else if((photo2_image.width/photo2_image.height) < ((www/2).toFixed()/hhh)){
hhh2 = (hhh * photo2_image.width / (www/2).toFixed()).toFixed()
www2 = photo2_image.width
}else if((photo2_image.width/photo2_image.height) == ((www/2).toFixed()/hhh)){
hhh2 = hhh
www2 = (www/2).toFixed()
}
ctx.drawImage(photo2_image, ((photo2_image.width-www2)/2).toFixed(), ((photo2_image.height-hhh2)/2).toFixed(),www2,hhh2,903,h+30,(www/2).toFixed(),hhh)
}
photo2_image.src = photo2_imageData


h = parseInt(h)+50+ parseInt(hhh)
ctx.restore()
}else if (photos.length == 3){

ctx.save();  
ctx.beginPath();
var photo1_image = new Image()
var photo1_imageData = await ImgD.encodeFromURL(photos[0])
var photo2_image = new Image()
var photo2_imageData = await ImgD.encodeFromURL(photos[1])
var photo3_image = new Image()
var photo3_imageData = await ImgD.encodeFromURL(photos[2])
var hhh = 960;
var www = 1710;
if(perfect_h < 960){
  hhh = perfect_h
  www = (1710/960*hhh).toFixed()
}

ctx.roundRect(900-(www/2).toFixed(),h+30,www,hhh, [40]);
ctx.clip();

// 860 ---> hhh
//photo1
photo1_image.onload =() => {
var www1 = 0;
var hhh1 = 0;
if((photo1_image.width/photo1_image.height) > ((www/2).toFixed()/hhh)){

www1 = ((www/2).toFixed() * photo1_image.height / hhh).toFixed()
hhh1 = photo1_image.height

}else if((photo1_image.width/photo1_image.height) < ((www/2).toFixed()/hhh)){
hhh1 = (hhh * photo1_image.width / (www/2).toFixed()).toFixed()
www1 = photo1_image.width
}else if((photo1_image.width/photo1_image.height) == ((www/2).toFixed()/hhh)){
hhh1 = hhh
www1 = (www/2).toFixed()
}
ctx.drawImage(photo1_image, ((photo1_image.width-www1)/2).toFixed(), ((photo1_image.height-hhh1)/2).toFixed(),www1,hhh1,897-(www/2).toFixed(),h+30,(www/2).toFixed(),hhh)
}

photo1_image.src = photo1_imageData
//photo2
photo2_image.onload =() => {
var www2 = 0;
var hhh2 = 0;
if((photo2_image.width/photo2_image.height) > ((www/2).toFixed()/(hhh/2-3).toFixed())){

www2 = ((www/2).toFixed() * photo2_image.height / (hhh/2-3).toFixed()).toFixed()
hhh2 = photo2_image.height

}else if((photo2_image.width/photo2_image.height) < ((www/2).toFixed()/(hhh/2-3).toFixed())){
hhh2 = ((hhh/2-3).toFixed() * photo2_image.width / (www/2).toFixed()).toFixed()
www2 = photo2_image.width
}else if((photo2_image.width/photo2_image.height) == ((www/2).toFixed()/(hhh/2-3).toFixed())){
hhh2 = (hhh/2-3).toFixed()
www2 = (www/2).toFixed()
}
ctx.drawImage(photo2_image, ((photo2_image.width-www2)/2).toFixed(), ((photo2_image.height-hhh2)/2).toFixed(),www2,hhh2,903,h+30,(www/2).toFixed(),(hhh/2-3).toFixed())
}
photo2_image.src = photo2_imageData
//photo3
photo3_image.onload =() => {
var www3 = 0;
var hhh3 = 0;
if((photo3_image.width/photo3_image.height) > ((www/2).toFixed()/(hhh/2-3).toFixed())){

www3 = ((www/2).toFixed() * photo3_image.height / (hhh/2-3).toFixed()).toFixed()
hhh3 = photo3_image.height

}else if((photo3_image.width/photo3_image.height) < ((www/2).toFixed()/(hhh/2-3).toFixed())){
hhh3 = ((hhh/2-3).toFixed() * photo3_image.width / (www/2).toFixed()).toFixed()
www3 = photo3_image.width
}else if((photo3_image.width/photo3_image.height) == ((www/2).toFixed()/(hhh/2-3).toFixed())){
hhh3 = (hhh/2-3).toFixed()
www3 = (www/2).toFixed()
}
ctx.drawImage(photo3_image, ((photo3_image.width-www3)/2).toFixed(), ((photo3_image.height-hhh3)/2).toFixed(),www3,hhh3,903,(h+33+hhh/2).toFixed(),(www/2).toFixed(),(hhh/2-3).toFixed())
}
photo3_image.src = photo3_imageData


h = parseInt(h)+50+ parseInt(hhh)
ctx.restore()
}else if (photos.length == 4){

ctx.save();  
ctx.beginPath();
var photo1_image = new Image()
var photo1_imageData = await ImgD.encodeFromURL(photos[0])
var photo2_image = new Image()
var photo2_imageData = await ImgD.encodeFromURL(photos[1])
var photo3_image = new Image()
var photo3_imageData = await ImgD.encodeFromURL(photos[2])
var photo4_image = new Image()
var photo4_imageData = await ImgD.encodeFromURL(photos[3])
var hhh = 960;
var www = 1710;
if(perfect_h < 960){
  hhh = perfect_h
  www = (1710/960*hhh).toFixed()
}

ctx.roundRect(900-(www/2).toFixed(),h+30,www,hhh, [40]);
ctx.clip();

// 860 ---> hhh 897-(www/2).toFixed()
//photo1
photo1_image.onload =() => {
var www1 = 0;
var hhh1 = 0;
if((photo1_image.width/photo1_image.height) > ((www/2).toFixed()/(hhh/2-3).toFixed())){

www1 = ((www/2).toFixed() * photo1_image.height / (hhh/2-3).toFixed()).toFixed()
hhh1 = photo1_image.height

}else if((photo1_image.width/photo1_image.height) < ((www/2).toFixed()/(hhh/2-3).toFixed())){
hhh1 = ((hhh/2-3).toFixed() * photo1_image.width / (www/2).toFixed()).toFixed()
www1 = photo1_image.width
}else if((photo1_image.width/photo1_image.height) == ((www/2).toFixed()/(hhh/2-3).toFixed())){
hhh1 = (hhh/2-3).toFixed()
www1 = (www/2).toFixed()
}
ctx.drawImage(photo1_image, ((photo1_image.width-www1)/2).toFixed(), ((photo1_image.height-hhh1)/2).toFixed(),www1,hhh1,897-(www/2).toFixed(),h+30,(www/2).toFixed(),(hhh/2-3).toFixed())
}
photo1_image.src = photo1_imageData
//photo2
photo2_image.onload =() => {
var www2 = 0;
var hhh2 = 0;
if((photo2_image.width/photo2_image.height) > ((www/2).toFixed()/(hhh/2-3).toFixed())){

www2 = ((www/2).toFixed() * photo2_image.height / (hhh/2-3).toFixed()).toFixed()
hhh2 = photo2_image.height

}else if((photo2_image.width/photo2_image.height) < ((www/2).toFixed()/(hhh/2-3).toFixed())){
hhh2 = ((hhh/2-3).toFixed() * photo2_image.width / (www/2).toFixed()).toFixed()
www2 = photo2_image.width
}else if((photo2_image.width/photo2_image.height) == ((www/2).toFixed()/(hhh/2-3).toFixed())){
hhh2 = (hhh/2-3).toFixed()
www2 = (www/2).toFixed()
}
ctx.drawImage(photo2_image, ((photo2_image.width-www2)/2).toFixed(), ((photo2_image.height-hhh2)/2).toFixed(),www2,hhh2,903,h+30,(www/2).toFixed(),(hhh/2-3).toFixed())
}
photo2_image.src = photo2_imageData
//photo3
photo3_image.onload =() => {
var www3 = 0;
var hhh3 = 0;
if((photo3_image.width/photo3_image.height) > ((www/2).toFixed()/(hhh/2-3).toFixed())){

www3 = ((www/2).toFixed() * photo3_image.height / (hhh/2-3).toFixed()).toFixed()
hhh3 = photo3_image.height

}else if((photo3_image.width/photo3_image.height) < ((www/2).toFixed()/(hhh/2-3).toFixed())){
hhh3 = ((hhh/2-3).toFixed() * photo3_image.width / (www/2).toFixed()).toFixed()
www3 = photo3_image.width
}else if((photo3_image.width/photo3_image.height) == ((www/2).toFixed()/(hhh/2-3).toFixed())){
hhh3 = (hhh/2-3).toFixed()
www3 = (www/2).toFixed()
}
ctx.drawImage(photo3_image, ((photo3_image.width-www3)/2).toFixed(), ((photo3_image.height-hhh3)/2).toFixed(),www3,hhh3,897-(www/2).toFixed(),(h+33+hhh/2).toFixed(),(www/2).toFixed(),(hhh/2-3).toFixed())
}
photo3_image.src = photo3_imageData

//photo4
photo4_image.onload =() => {
var www4 = 0;
var hhh4 = 0;
if((photo4_image.width/photo4_image.height) > ((www/2).toFixed()/(hhh/2-3).toFixed())){

www4 = ((www/2).toFixed() * photo4_image.height / (hhh/2-3).toFixed()).toFixed()
hhh4 = photo4_image.height

}else if((photo4_image.width/photo4_image.height) < ((www/2).toFixed()/(hhh/2-3).toFixed())){
hhh4 = ((hhh/2-3).toFixed() * photo4_image.width / (www/2).toFixed()).toFixed()
www4 = photo4_image.width
}else if((photo4_image.width/photo4_image.height) == ((www/2).toFixed()/(hhh/2-3).toFixed())){
hhh4 = (hhh/2-3).toFixed()
www4 = (www/2).toFixed()
}
ctx.drawImage(photo4_image, ((photo4_image.width-www4)/2).toFixed(), ((photo4_image.height-hhh4)/2).toFixed(),www4,hhh4,903,(h+33+hhh/2).toFixed(),(www/2).toFixed(),(hhh/2-3).toFixed())
}
photo4_image.src = photo4_imageData
h = parseInt(h)+50+ parseInt(hhh)
ctx.restore()
}

}
//-----------------------end----------------

//-----------------------info----------------
if(show_info != "false"){
// add like image

var like_image = new Image()
const like_imageData = await ImgD.encodeFromURL('https://www.turntweetinto.com/love.png')
like_image.onload =() => ctx.drawImage(like_image, 0, 0,like_image.width,like_image.height,45,h+30,70,70)
like_image.src = like_imageData


ctx.fillStyle = "rgb(83, 100, 113)";
ctx.textBaseline = 'middle'
// likes
ctx.font = '60px chirp_regular';
ctx.fillText(likes_count, 120, h+65);
var likes_w = ctx.measureText(likes_count).width
// create_at
ctx.font = '60px chirp_regular';
ctx.fillText(created_at, 165+likes_w, h+65);
}
//-----------------------end----------------


// add profile image


ctx.beginPath()
ctx.arc(45+83, 28+83, 83, 0, Math.PI * 2)
ctx.clip()

var profile_image = new Image()
const profile_imageData = await ImgD.encodeFromURL(profile_image_url_https)
profile_image.onload =() => ctx.drawImage(profile_image, 0, 0,profile_image.width,profile_image.height,45,28,166,166)
profile_image.src = profile_imageData

// finish profile image
if(crop_it =="true" ){
const canvas1 = createCanvas(1800,h+128)
const ctx1 = canvas1.getContext('2d')

var final_image = new Image()
const final_imageData = canvas.toDataURL()
final_image.onload =() => ctx1.drawImage(final_image, 0, 0,1800,h+128,0,0,1800,h+128)
final_image.src = final_imageData
  return  canvas1.createPNGStream() 
}


  return  canvas.createPNGStream() 
})

