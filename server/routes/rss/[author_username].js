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



  return  feed.rss2()
})

