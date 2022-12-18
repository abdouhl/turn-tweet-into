import { Feed } from "feed";

export default defineEventHandler(async (event) => {

const {author_username} = event.context.params

const author= await $fetch(useRuntimeConfig().apiUrl+"rss/"+author_username)
 
const feed = new Feed({
  title: author.name+" Tweets",
  description: "the latest "+author.name+" Tweets",
  id: "http://example.com/",
  link: "https://www.turntweetinto.com/authors/tweets/"+author_username,
  language: "en"
});

for(var tweet of author.tweets) {
  feed.addItem({
    title: tweet.text,
    link: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=t_shirt",
    description: author.name+" Tweet: "+tweet.text,
    image:"https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&max_dim=1080&at=238414036962221940&t_image1_url=https://www.turntweetinto.com/api/w_t/"+tweet.id+"-true-true",
  });
}


  return  feed.rss2()
})

