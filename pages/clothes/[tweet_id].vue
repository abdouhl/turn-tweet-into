<script setup>




const {tweet_id} = useRoute().params

useHead({
  title: 'Turn Tweet Into',
  meta: [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Turn Tweet Into' },
    { name: 'twitter:description', content: 'Turn Tweet Into '+tweet_id },
    { name: 'twitter:image', content: 'https://www.turntweetinto.com/api/c_i/'+tweet_id },
  ]
})

const colorActiveBtnClasses = reactive(["color-choose","w-12","h-12","rounded-md","ring-offset-stone-200","ring-offset-4","ring-2"])
const colorDESActiveBtnClasses = reactive(["color-choose","cursor-pointer","w-12","h-12","rounded-md","hover:ring-offset-stone-200","hover:ring-offset-4","hover:ring-2","hover:ring-white"])


const typeActiveBtnClasses = reactive(["type-choose","border-2","border-black","rounded-md","rounded-md","ring-offset-stone-200","ring-offset-4","ring-2","p-2"])
const typeDESActiveBtnClasses = reactive(["type-choose","cursor-pointer","border-2","border-black","rounded-md","hover:ring-offset-stone-200","hover:ring-offset-4","hover:ring-2","hover:ring-white","p-2"])
const links = {
  t_shirt:{
    white:'https://www.zazzle.com/api/create/at-238414036962221940?rf=238414036962221940&ax=Linkover&pd=235293855806478511&ed=false&tc=&ic=&t_image1_iid=',
    black:'https://www.zazzle.com/api/create/at-238414036962221940?rf=238414036962221940&ax=Linkover&pd=235081497385425037&ed=false&tc=&ic=&t_image2_iid=',
  },
  s_shirt:{
    white:'https://www.zazzle.com/api/create/at-238414036962221940?rf=238414036962221940&ax=Linkover&pd=235870585213574671&ed=false&tc=&ic=&t_image1_iid=',
    black:'https://www.zazzle.com/api/create/at-238414036962221940?rf=238414036962221940&ax=Linkover&pd=235706930408917412&ed=false&tc=&ic=&t_image2_iid=',
  },
}
const image = reactive({
  color: 'white',
  type: "t_shirt",
  w_url:"https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&max_dim=1024&at=238414036962221940&t_image1_url=",
  b_url:"https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&style=hanes_mens_crew_darktshirt_5250&size=a_s&color=black&max_dim=1028&at=238414036962221940&t_image1_url="
})
const tweet_url =  reactive({url:'https://twitter.com/_/status/'+tweet_id})

const cond  = reactive({show_media:'true',show_info:'true'})

var next_tweet =null
onMounted(() => {

})

function changeUrl(event) {
  if (event) {
    
    image.type = event.target.getAttribute('data-type')
    image.w_url = event.target.getAttribute('data-url-white')
    image.b_url = event.target.getAttribute('data-url-black')

  }
}
/*function changeTweet(event) {
  if (event) {
    
    image.type = event.target.getAttribute('data-type')
    image.w_url = event.target.getAttribute('data-url-white')
    image.b_url = event.target.getAttribute('data-url-black')
    console.log(image.color)
  }
}*/


/*function changeNextTweet(event) {
  if (event) {
    tweet_url = event.target.value
    if(!tweet_url ||tweet_url == ("https://twitter.com/_/status/"+tweet_id) || tweet_url == ""){
    next_tweet =  null
    }else{
    var t_id = tweet_url.split('/')[tweet_url.split('/').indexOf('status')+1]
    next_tweet =  "/clothes/"+t_id
    }
  }
}*/


function changeColor(event) {
  if (event) {
    image.color = event.target.getAttribute('data-color')
  }
}


//event.target.getAttribute('data-url-'+image.color)
const image_url = computed(() => {
    if(image.color=='white'){
    return image.w_url + 'https://www.turntweetinto.com/api/w_t/'+tweet_id+'-'+cond.show_media+'-'+cond.show_info
    }else if(image.color=='black'){
    return image.b_url + 'https://www.turntweetinto.com/api/b_t/'+tweet_id+'-'+cond.show_media+'-'+cond.show_info
    }
})

const png_url = computed(() => {
    if(image.color=='white'){
    return 'https://www.turntweetinto.com/api/w_t/'+tweet_id+'-'+cond.show_media+'-'+cond.show_info
    }else if(image.color=='black'){
    return 'https://www.turntweetinto.com/api/b_t/'+tweet_id+'-'+cond.show_media+'-'+cond.show_info
    }
})

next_tweet = computed(() => {

    if(!tweet_url.url ||tweet_url.url == ("https://twitter.com/_/status/"+tweet_id) || tweet_url.url == ""){
    return null
    }else{
    return  "/clothes/"+tweet_url.url.split('/')[tweet_url.url.split('/').indexOf('status')+1]
    }
})
/*
watch(tweet_url, (new_tweet_url) => {
  if(!new_tweet_url ||new_tweet_url == ("https://twitter.com/_/status/"+tweet_id) || new_tweet_url == ""){
    next_tweet =  null
    }else{var t_id = new_tweet_url.split('/')[new_tweet_url.split('/').indexOf('status')+1]
    next_tweet =  "/clothes/"+t_id
    }
})*/
</script>

<template>

<section style="background-color: #E6E2D9;" class="w-screen h-screen" >
<div class="flex flex-row justify-items-center justify-center px-8 py-4" >
  <input class="w-9/12 md:w-6/12 lg:w-5/12 placeholder-gray-400 focus:placeholder-transparent text-xl text-gray-500 pl-4  py-2 border-2 border-black  rounded-lg bg-stone-100  focus:outline-none" v-model="tweet_url.url" placeholder="Enter Tweet URL here">
  <NuxtLink class="self-stretch mx-2  p-2 border-2 border-black  rounded-lg bg-stone-100 text-gray-500 font-bold" :to="next_tweet">Submit</NuxtLink>
</div>

<div class="px-8 py-4 h-1/6">
      <div class="flex flex-row gap-4">
          <div @click.self="changeUrl" data-url-black="https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&style=hanes_mens_crew_darktshirt_5250&size=a_s&color=black&max_dim=1080&at=238414036962221940&t_image1_url=" data-url-white="https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&max_dim=1080&at=238414036962221940&t_image1_url=" data-type="t_shirt" :class="image.type == 't_shirt' ? typeActiveBtnClasses : typeDESActiveBtnClasses" >
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.35 50" class="customizer-tabs__tab-icon"><title>T-Shirt</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M4.89,19.55,11.72,19a.86.86,0,0,1,1,.65c0,.06,0,.12,0,.17v28.5H41.61V19.81a.85.85,0,0,1,.85-.84,1,1,0,0,1,.24,0l6.76.55L52.52,8.37,36.43,2.05a9.13,9.13,0,0,1-2.66,5.3,9.39,9.39,0,0,1-6.6,2.7,9.36,9.36,0,0,1-6.59-2.7,9.2,9.2,0,0,1-2.67-5.3L1.83,8.37ZM34.75,1.85a50.7,50.7,0,0,1-7.58.57,50.68,50.68,0,0,1-7.57-.58,7.55,7.55,0,0,0,2.17,4.32,7.71,7.71,0,0,0,5.4,2.21,7.68,7.68,0,0,0,5.4-2.21A7.47,7.47,0,0,0,34.75,1.85ZM18.87,0a48.73,48.73,0,0,0,8.3.72A47.91,47.91,0,0,0,35.5,0h0a.91.91,0,0,1,.46,0l17.83,7a.84.84,0,0,1,.52,1l-3.39,12.7a.84.84,0,0,1-1,.64l-6.63-.52V49.16a.85.85,0,0,1-.85.84H11.89a.85.85,0,0,1-.85-.84V20.85l-6.62.52a.85.85,0,0,1-1-.64L0,8.06a.83.83,0,0,1,.51-1l17.79-7A1,1,0,0,1,18.68,0ZM37.36,19.09a.84.84,0,1,1,0,1.68H30.57a.84.84,0,1,1,0-1.68Z"></path></g></g></svg>
              t-shirt</div>
          <div @click.self="changeUrl" data-url-black="https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113758459795474410&style=truemade_mens_crew_sweatshirt_z260&size=a_s&color=black&max_dim=1028&at=238414036962221940&t_image1_url=" data-url-white="https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113758459795474410&max_dim=1028&at=238414036962221940&t_image1_url=" data-type="s_shirt" :class="image.type == 's_shirt' ? typeActiveBtnClasses : typeDESActiveBtnClasses" >
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.1 50" class="customizer-tabs__tab-icon"><title>Sweatshirt</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M48.3,5.92,36.64.16a2.18,2.18,0,0,0-1.88.12L26.2,5.12a.28.28,0,0,1-.29,0C25,4.54,19.68,1.51,17.53.28A2.19,2.19,0,0,0,15.66.15L3.8,5.92A6.37,6.37,0,0,0,0,11.7V41.81a.92.92,0,0,0,.93.91H8.4v6.37a.92.92,0,0,0,.93.91H42.76a.93.93,0,0,0,.94-.91V42.72h7.46a.93.93,0,0,0,.94-.91V11.7A6.4,6.4,0,0,0,48.3,5.92ZM16.17,1.79a.18.18,0,0,0,.07-.05L22.32,5.3l1.86,1.09,1.39.82a1,1,0,0,0,1,0l1.38-.82L29.78,5.3l6.07-3.56.07.05,11.6,5.78a4.56,4.56,0,0,1,2.71,4.13V40.9H43.7V17H41.83V48.18H10.26V17H8.4v24H1.87V11.7A4.56,4.56,0,0,1,4.58,7.57Z"></path></g></g></svg>
              s-shirt</div>
      </div>
  </div>


    <div class="flex flex-row justify-items-center px-8 h-4/6 ">
    <div class=" h-full w-fit justify-self-center"><img id="img"  class="rounded-lg border-2 border-black object-contain h-full w-fit" :src="image_url" /></div>
    <div class="w-fit flex flex-col ml-8 grow h-full justify-between">
      
      <div >
          <h3 class="text-xl my-4">Color:</h3>
          <div class="flex flex-row gap-4 mb-4">
              <div @click="changeColor" data-color="white" :class="[image.color == 'white' ? colorActiveBtnClasses : colorDESActiveBtnClasses,'bg-white']"></div>
              <div @click="changeColor" data-color="black" :class="[image.color == 'black' ? colorActiveBtnClasses : colorDESActiveBtnClasses,'bg-black']"></div>
          </div>
          <div class="flex items-center">
						<label for="toggle" class="text-xl  pr-8">Show Media:</label>
						<div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
								<input type="checkbox" v-model="cond.show_media" true-value="true" false-value="false" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
								<label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
						</div>
					</div>
					<div class="flex items-center pt-4">
						<label for="toggle" class="text-xl  pr-8">Show Info:</label>
						<div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
								<input type="checkbox" v-model="cond.show_info" true-value="true" false-value="false" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
								<label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
						</div>
					</div>
      </div> 
      <a class="self-stretch mx-2  p-2 border-2 border-black  rounded-lg bg-stone-100 text-gray-500 font-bold w-4/6 mx-auto text-center" :href="links[image.type][image.color]+png_url">Buy IT</a>
    </div>
        
    </div>
</section>
</template>

<style>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68D391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68D391;
}
</style>

