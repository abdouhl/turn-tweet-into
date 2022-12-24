import { createCanvas, Image } from 'canvas'
import ImgD from 'image-data-uri'


export default defineEventHandler(async (event) => {

const imgs = {
  t_shirt:{
    white:'https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&max_dim=1080&at=238414036962221940&t_image1_url=',
    black:'https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&style=hanes_mens_crew_darktshirt_5250&size=a_s&color=black&max_dim=1080&at=238414036962221940&t_image1_url=',
  },
  s_shirt:{
    white:'https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113758459795474410&max_dim=1028&at=238414036962221940&t_image1_url=',
    black:'https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113758459795474410&style=truemade_mens_crew_sweatshirt_z260&size=a_s&color=black&max_dim=1028&at=238414036962221940&t_image1_url=',
  },
  hoodie:{
    white:'https://rlv.zcache.com/svc/view?pid=235828058479628416&realview=113577295862783981&style=truemade_mens_pullover_hoodie_z170&size=a_s&color=white&max_dim=1080&at=238414036962221940&t_image1_url=',
    black:'https://rlv.zcache.com/svc/view?pid=235750125344025205&realview=113577295862783981&style=truemade_mens_pullover_hoodie_z170&size=a_s&color=black&max_dim=1080&at=238414036962221940&t_image2_url=',
  },
  totebag:{
    white:'https://rlv.zcache.com/svc/view?pid=149858228431944112&realview=113449848557999730&style=budgettote&color=natural_natural&max_dim=1080&at=238414036962221940&t_image1_url=',
    black:'https://rlv.zcache.com/svc/view?pid=149563842495834714&realview=113922391954172524&style=grocerytote&color=black&max_dim=1080&at=238414036962221940&t_image2_url=',
  },
  hat:{
    white:'https://www.zazzle.com/api/create/at-238414036962221940?rf=238414036962221940&ax=Linkover&pd=148788574051472252&ed=true&tc=&ic=&t_image1_iid=',
    black:'https://www.zazzle.com/api/create/at-238414036962221940?rf=238414036962221940&ax=Linkover&pd=148788574051472252&ed=true&tc=&ic=&t_image1_iid=',
  },
  mug:{
    white:'https://rlv.zcache.com/svc/view?pid=168618248917868537&realview=113345638802673340&color=white&size=11oz&style=basic_mug&max_dim=1080&at=238414036962221940&t_image1_url=',
    black:'https://rlv.zcache.com/svc/view?pid=168618248917868537&realview=113345638802673340&color=white&size=11oz&style=basic_mug&max_dim=1080&at=238414036962221940&t_image1_url=',
  },
}


var {tweet_id} = event.context.params
var ll = tweet_id.split('-')
var tweet_id = ll[0]
var type = "t_shirt"
if(ll.length <= 2){
type = ll[1]
}

const canvas = createCanvas(800, 418)
const ctx = canvas.getContext('2d')

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);


//w_t
const w_t_image = new Image();
w_t_image.onload = () => ctx.drawImage(w_t_image, 0, 0,w_t_image.width,w_t_image.height,20,20,370,370)
const w_t_imageData = await ImgD.encodeFromURL(imgs[type]["white"]+"https://www.turntweetinto.com/api/w_t/"+tweet_id)
w_t_image.src = w_t_imageData
//b_t
const b_t_image = new Image();
b_t_image.onload = () => ctx.drawImage(b_t_image, 0, 0,b_t_image.width,b_t_image.height,410,20,370,370)
var ccolor = "b_t"
if(type=="hat" || type=="mug"){
ccolor = "w_t"
}
var crop_it=""
if(type=="hat"){
crop_it = "-true-true-true"
}
const b_t_imageData = await ImgD.encodeFromURL(imgs[type]["black"]+'https://www.turntweetinto.com/api/'+ccolor+'/'+tweet_id+crop_it)
b_t_image.src = b_t_imageData

ctx.fillStyle = "white";

ctx.textAlign = "center";
ctx.textBaseline = 'top'
ctx.font = '25px chirp_regular';
ctx.textAlign = "center";

ctx.fillText('www.turntweetinto.com', 400, 390);








  return  canvas.createPNGStream() 
})

