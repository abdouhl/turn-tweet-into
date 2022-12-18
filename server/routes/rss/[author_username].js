import { Feed } from "feed";

export default defineEventHandler(async (event) => {

const {author_username} = event.context.params

const author= await $fetch(useRuntimeConfig().apiUrl+"user/"+author_username)
 
const feed = new Feed({
  title: author.name+" Tweets",
  description: "the latest "+author.name+" Tweets",
  id: "http://example.com/",
  link: "https://www.turntweetinto.com/authors/tweets/"+author_username,
  language: "en"
});

for(var tweet_id of author.tweets) {
  var tweet= await $fetch(useRuntimeConfig().apiUrl+tweet_id)
  feed.addItem({
    title: tweet.text.join(),
    link: "https://www.turntweetinto.com/clothes/"+tweet_id+"?type=t_shirt",
    description: author.name+" Tweet: "+tweet.text.join(),
    image:"https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&max_dim=1080&at=238414036962221940&t_image1_url=https://www.turntweetinto.com/api/w_t/"+tweet_id+"-true-true",
  });
}


  return  feed.rss2()
})

