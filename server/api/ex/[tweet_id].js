import { createCanvas, Image } from 'canvas'
import { fillTextWithTwemoji } from 'node-canvas-with-twemoji-and-discord-emoji';
import ImgD from 'image-data-uri'


export default defineEventHandler(async (event) => {

const {tweet_id} = event.context.params
const query = getQuery(event)
 



  return  [tweet_id,query.media,  query.info] 
})

