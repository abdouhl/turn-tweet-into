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
//tshirt
  feed.item({
    title: tweet.text,
    url: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=t_shirt",
    description: author.name+" Tweet tshirt: "+tweet.text,
    enclosure: {url:"https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&max_dim=1080&at=238414036962221940&t_image1_url=https://www.turntweetinto.com/api/w_t/"+tweet.id+"-true-true",'type' : 'image/jpeg'}, // optional enclosure
});
//tshirt black	
	feed.item({
    title: tweet.text,
    url: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=t_shirt&color=black",
    description: author.name+" Tweet tshirt: "+tweet.text,
    guid: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=t_shirt-b",
    enclosure: {url:"https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&style=hanes_mens_crew_darktshirt_5250&size=a_s&color=black&max_dim=1080&at=238414036962221940&t_image1_url=https://www.turntweetinto.com/api/b_t/"+tweet.id+"-true-true",'type' : 'image/jpeg'}, // optional enclosure
});

//sshirt
  feed.item({
    title: tweet.text,
    url: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=s_shirt",
    description: author.name+" Tweet sshirt: "+tweet.text,
    enclosure: {url:"https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113758459795474410&max_dim=1028&at=238414036962221940&t_image1_url=https://www.turntweetinto.com/api/w_t/"+tweet.id+"-true-true",'type' : 'image/jpeg'}, // optional enclosure
});
//sshirt black	
	feed.item({
    title: tweet.text,
    url: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=s_shirt&color=black",
    description: author.name+" Tweet sshirt: "+tweet.text,
    guid: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=s_shirt-b",
    enclosure: {url:"https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113758459795474410&style=truemade_mens_crew_sweatshirt_z260&size=a_s&color=black&max_dim=1028&at=238414036962221940&t_image1_url=https://www.turntweetinto.com/api/b_t/"+tweet.id+"-true-true",'type' : 'image/jpeg'}, // optional enclosure
});



//hoodie
  feed.item({
    title: tweet.text,
    url: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=hoodie",
    description: author.name+" Tweet hoodie: "+tweet.text,
    enclosure: {url:"https://rlv.zcache.com/svc/view?pid=235828058479628416&realview=113577295862783981&style=truemade_mens_pullover_hoodie_z170&size=a_s&color=white&max_dim=1080&at=238414036962221940&t_image1_url=https://www.turntweetinto.com/api/w_t/"+tweet.id+"-true-true",'type' : 'image/jpeg'}, // optional enclosure
});
//hoodie black	
	feed.item({
    title: tweet.text,
    url: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=hoodie&color=black",
    description: author.name+" Tweet hoodie: "+tweet.text,
    guid: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=hoodie-b",
    enclosure: {url:"https://rlv.zcache.com/svc/view?pid=235750125344025205&realview=113577295862783981&style=truemade_mens_pullover_hoodie_z170&size=a_s&color=black&max_dim=1080&at=238414036962221940&t_image2_url=https://www.turntweetinto.com/api/b_t/"+tweet.id+"-true-true",'type' : 'image/jpeg'}, // optional enclosure
});



//totebag
  feed.item({
    title: tweet.text,
    url: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=totebag",
    description: author.name+" Tweet totebag: "+tweet.text,
    enclosure: {url:"https://rlv.zcache.com/svc/view?pid=149858228431944112&realview=113449848557999730&style=budgettote&color=natural_natural&max_dim=1080&at=238414036962221940&t_image1_url=https://www.turntweetinto.com/api/w_t/"+tweet.id+"-true-true",'type' : 'image/jpeg'}, // optional enclosure
});
//totebag black	
	feed.item({
    title: tweet.text,
    url: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=totebag&color=black",
    description: author.name+" Tweet totebag: "+tweet.text,
    guid: "https://www.turntweetinto.com/clothes/"+tweet.id+"?type=totebag-b",
    enclosure: {url:"https://rlv.zcache.com/svc/view?pid=149563842495834714&realview=113922391954172524&style=grocerytote&color=black&max_dim=1080&at=238414036962221940&t_image2_url=https://www.turntweetinto.com/api/b_t/"+tweet.id+"-true-true",'type' : 'image/jpeg'}, // optional enclosure
});

}

var xml = feed.xml();
 

  return  xml
})

