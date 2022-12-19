import RSS from "rss";


export default defineEventHandler(async (event) => {

const {author_username} = event.context.params

const author= await $fetch(useRuntimeConfig().apiUrl+"rss/"+author_username)
 

var feed = new RSS({
  title: author.name+" Tweets",
  description: "the latest "+author.name+" Tweets",
  id: "http://example.com/",
  url: "https://www.turntweetinto.com/authors/tweets/"+author_username,
  language: "en"
});
 
for(var tweet of author.tweets) {
  feed.item({
    title: tweet.text,
    url: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=t_shirt",
    description: author.name+" Tweet: "+tweet.text,
    enclosure: {url:"https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&max_dim=1080&at=238414036962221940&t_image1_url=https://www.turntweetinto.com/api/w_t/"+tweet.id+"-true-true",'type' : 'image/jpeg'}, // optional enclosure
});
}

var xml = feed.xml();
 

  return  xml
})

