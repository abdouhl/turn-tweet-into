import { createCanvas, Image } from 'canvas'
import ImgD from 'image-data-uri'


export default defineEventHandler(async (event) => {

const {tweet_id} = event.context.params

const canvas = createCanvas(800, 418)
const ctx = canvas.getContext('2d')

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);


//w_t
const w_t_image = new Image();
w_t_image.onload = () => ctx.drawImage(w_t_image, 0, 0,w_t_image.width,w_t_image.height,20,20,370,370)
const w_t_imageData = await ImgD.encodeFromURL("https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&max_dim=1080&at=238414036962221940&t_image1_url=https://www.turntweetinto.com/api/w_t/"+tweet_id)
w_t_image.src = w_t_imageData
//b_t
const b_t_image = new Image();
b_t_image.onload = () => ctx.drawImage(b_t_image, 0, 0,b_t_image.width,b_t_image.height,410,20,370,370)
const b_t_imageData = await ImgD.encodeFromURL('https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&style=hanes_mens_crew_darktshirt_5250&size=a_s&color=black&max_dim=1080&at=238414036962221940&t_image1_url=https://www.turntweetinto.com/api/b_t/'+tweet_id)
b_t_image.src = b_t_imageData

ctx.fillStyle = "white";

ctx.textAlign = "center";
ctx.textBaseline = 'top'
ctx.font = '25px chirp_regular';
ctx.textAlign = "center";

ctx.fillText('www.turntweetinto.com', 400, 390);








  return  canvas.createPNGStream() 
})

