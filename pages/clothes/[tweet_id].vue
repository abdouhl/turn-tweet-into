<script setup>




const {tweet_id} = useRoute().params




const colorActiveBtnClasses = reactive(["color-choose","w-8","h-8","md:w-12","md:h-12","rounded-md","ring-offset-stone-200","ring-offset-4","ring-2"])
const colorDESActiveBtnClasses = reactive(["color-choose","cursor-pointer","w-8","h-8","md:w-12","md:h-12","rounded-md","hover:ring-offset-stone-200","hover:ring-offset-4","hover:ring-2","hover:ring-white"])


const imgloading = reactive({state:true})

const typeActiveBtnClasses = reactive(["text-center","text-xs","md:text-xl","type-choose","rounded-md","rounded-md","bg-stone-100","ring-offset-stone-200","ring-offset-2","md:ring-offset-4","ring-2","p-1","md:p-2"])
const typeDESActiveBtnClasses = reactive(["text-center","text-xs","md:text-xl","type-choose","cursor-pointer","bg-stone-100","rounded-md","hover:ring-offset-stone-200","hover:ring-offset-2","md:hover:ring-offset-4","hover:ring-2","hover:ring-white","p-1","md:p-2"])
const links = {
  t_shirt:{
    white:'https://www.zazzle.com/api/create/at-238414036962221940?rf=238414036962221940&ax=Linkover&pd=235293855806478511&ed=false&tc=&ic=&t_image1_iid=',
    black:'https://www.zazzle.com/api/create/at-238414036962221940?rf=238414036962221940&ax=Linkover&pd=235081497385425037&ed=false&tc=&ic=&t_image2_iid=',
  },
  s_shirt:{
    white:'https://www.zazzle.com/api/create/at-238414036962221940?rf=238414036962221940&ax=Linkover&pd=235870585213574671&ed=false&tc=&ic=&t_image1_iid=',
    black:'https://www.zazzle.com/api/create/at-238414036962221940?rf=238414036962221940&ax=Linkover&pd=235706930408917412&ed=false&tc=&ic=&t_image2_iid=',
  },
  hoodie:{
    white:'https://www.zazzle.com/api/create/at-238414036962221940?rf=238414036962221940&ax=Linkover&pd=235828058479628416&ed=true&tc=&ic=&t_image1_iid=',
    black:'https://www.zazzle.com/api/create/at-238414036962221940?rf=238414036962221940&ax=Linkover&pd=235750125344025205&ed=true&tc=&ic=&t_image2_iid=',
  },
  hat:{
    white:'https://www.zazzle.com/api/create/at-238414036962221940?rf=238414036962221940&ax=Linkover&pd=148788574051472252&ed=true&tc=&ic=&t_image1_iid=https%3A%2F%2Fwww.turntweetinto.com%2Fapi%2Fw_t%2F1604650028999405568-true-true-true',
  },
  
}
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
  hat:{
    white:'https://rlv.zcache.com/svc/view?pid=168618248917868537&realview=113647281033678299&design=49572798-1dca-4b2b-89b3-65ca9ba277bc&style=trucker_hat&color=white_white&max_dim=1080&at=238414036962221940&t_image1_url=',
  },
}


const image = reactive({
  color: useRoute().query.color !=  undefined && Object.keys(imgs[useRoute().query.type]).includes('black') ? useRoute().query.color : 'white',
  type: useRoute().query.type !=  undefined ? useRoute().query.type : "t_shirt",
  w_url: useRoute().query.type !=  undefined ? imgs[useRoute().query.type]['white'] :"https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&max_dim=1080&at=238414036962221940&t_image1_url=" ,
  b_url: useRoute().query.type !=  undefined ? imgs[useRoute().query.type]['black'] :"https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&style=hanes_mens_crew_darktshirt_5250&size=a_s&color=black&max_dim=1080&at=238414036962221940&t_image1_url=",
})


const tweet_url =  reactive({url:'https://twitter.com/_/status/'+tweet_id})

const cond  = reactive({show_media:'true',show_info:'true'})

var next_tweet =null
onMounted(() => {
	//imgloading.state=false
})

function makeImgDone(event) {
		if(imgloading.state){
		imgloading.state=false
		}
    
		console.log('done')
}
function changeUrl(event) {
  if (event) {
    imgloading.state=true
    image.type = event.target.getAttribute('data-type')
    image.w_url = event.target.getAttribute('data-url-white')
    if(Object.keys(imgs[image.type]).includes('black')){
    image.b_url = event.target.getAttribute('data-url-black')
		}else{
		image.color = Object.keys(imgs[image.type])[0]
		}

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
  if (event && event.target.getAttribute('class').split(' ').includes("cursor-pointer")) {
  	imgloading.state=true
    image.color = event.target.getAttribute('data-color')
  }
}


//event.target.getAttribute('data-url-'+image.color)
const image_url = computed(() => {
		imgloading.state=true
		var hh =image.type == "hat"?"-true":""
    if(image.color=='white'){
    return image.w_url + 'https://www.turntweetinto.com/api/w_t/'+tweet_id+'-'+cond.show_media+'-'+cond.show_info + hh
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
const type_title = computed(() => {

    if( image.type == "hoodie"){
    return "Hoodie"
    }else if( image.type == "t_shirt"){
    return  "Tshirt"
    }else if( image.type == "s_shirt"){
    return  "Sweatshirt"
    }else if( image.type == "hat"){
    return  "Hat"
    }
})

next_tweet = computed(() => {

    if(!tweet_url.url ||tweet_url.url == ("https://twitter.com/_/status/"+tweet_id) || tweet_url.url == ""){
    return null
    }else{
    return  "/clothes/"+tweet_url.url.split('/')[tweet_url.url.split('/').indexOf('status')+1]
    }
})

useHead({
  title: 'Turn Tweet Into ',
  meta: [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Turn Tweet Into' },
    { name: 'twitter:image', content: 'https://www.turntweetinto.com/api/c_i/'+tweet_id+'-'+image.type },
  ],
  link: [
    {rel: 'preconnect', type: 'text/css', href: 'https://fonts.googleapis.com'},
    {rel: 'preconnect', crossorigin: true, href: 'https://fonts.gstatic.com'},
    {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lobster&display=swap'},
  ]
})
</script>

<template>

<section style="background-color: #E6E2D9;" class="w-screen  pb-4 md:pb-0 md:h-screen " >
<div class="flex md:flex-row flex-col w-full px-1 md:px-8 md:items-center">
<h1 style="font-family: 'Lobster', cursive;" class="align-middle h-fit text-center md:text-start text-3xl my-2 font-bold hover:text-blue-500" ><NuxtLink  to="/">Turn Tweet Into <span class="text-blue-500">{{type_title}}</span></NuxtLink></h1>
<div class="grow flex flex-row justify-items-center justify-center py-2 md:py-4" >
  <input class="w-full md:w-6/12 lg:w-5/12 placeholder-gray-400 focus:placeholder-transparent text-xs md:text-xl text-gray-500 pl-1 md:pl-4  md:py-2  rounded-lg bg-stone-100  focus:outline-none" v-model="tweet_url.url" placeholder="Enter Tweet URL here">
  <NuxtLink class="self-stretch mx-1 md:mx-2  p-2 border  border-black  rounded-lg bg-stone-100 text-gray-500 text-xs md:text-xl font-bold" :to="next_tweet">Submit</NuxtLink>
</div>
</div>
<div class="px-2 md:px-8 py-2 md:py-4 h-fit md:h-1/6">
      <div class="flex flex-row gap-2 md:gap-4">
          <div  @click.self="changeUrl" data-url-black="https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&style=hanes_mens_crew_darktshirt_5250&size=a_s&color=black&max_dim=1080&at=238414036962221940&t_image1_url=" data-url-white="https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113562383382757001&max_dim=1080&at=238414036962221940&t_image1_url=" data-type="t_shirt" :class="image.type == 't_shirt' ? typeActiveBtnClasses : typeDESActiveBtnClasses" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.35 50" class="mx-auto w-8 h-8 md:w-12 md:h-12 customizer-tabs__tab-icon"><title>T-Shirt</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M4.89,19.55,11.72,19a.86.86,0,0,1,1,.65c0,.06,0,.12,0,.17v28.5H41.61V19.81a.85.85,0,0,1,.85-.84,1,1,0,0,1,.24,0l6.76.55L52.52,8.37,36.43,2.05a9.13,9.13,0,0,1-2.66,5.3,9.39,9.39,0,0,1-6.6,2.7,9.36,9.36,0,0,1-6.59-2.7,9.2,9.2,0,0,1-2.67-5.3L1.83,8.37ZM34.75,1.85a50.7,50.7,0,0,1-7.58.57,50.68,50.68,0,0,1-7.57-.58,7.55,7.55,0,0,0,2.17,4.32,7.71,7.71,0,0,0,5.4,2.21,7.68,7.68,0,0,0,5.4-2.21A7.47,7.47,0,0,0,34.75,1.85ZM18.87,0a48.73,48.73,0,0,0,8.3.72A47.91,47.91,0,0,0,35.5,0h0a.91.91,0,0,1,.46,0l17.83,7a.84.84,0,0,1,.52,1l-3.39,12.7a.84.84,0,0,1-1,.64l-6.63-.52V49.16a.85.85,0,0,1-.85.84H11.89a.85.85,0,0,1-.85-.84V20.85l-6.62.52a.85.85,0,0,1-1-.64L0,8.06a.83.83,0,0,1,.51-1l17.79-7A1,1,0,0,1,18.68,0ZM37.36,19.09a.84.84,0,1,1,0,1.68H30.57a.84.84,0,1,1,0-1.68Z"></path></g></g></svg>
              t-shirt</div>
          <div @click.self="changeUrl" data-url-black="https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113758459795474410&style=truemade_mens_crew_sweatshirt_z260&size=a_s&color=black&max_dim=1028&at=238414036962221940&t_image1_url=" data-url-white="https://rlv.zazzle.com/svc/view?pid=235293855806478511&realview=113758459795474410&max_dim=1028&at=238414036962221940&t_image1_url=" data-type="s_shirt" :class="image.type == 's_shirt' ? typeActiveBtnClasses : typeDESActiveBtnClasses" >
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.1 50" class="mx-auto w-8 h-8 md:w-12 md:h-12 customizer-tabs__tab-icon"><title>Sweatshirt</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M48.3,5.92,36.64.16a2.18,2.18,0,0,0-1.88.12L26.2,5.12a.28.28,0,0,1-.29,0C25,4.54,19.68,1.51,17.53.28A2.19,2.19,0,0,0,15.66.15L3.8,5.92A6.37,6.37,0,0,0,0,11.7V41.81a.92.92,0,0,0,.93.91H8.4v6.37a.92.92,0,0,0,.93.91H42.76a.93.93,0,0,0,.94-.91V42.72h7.46a.93.93,0,0,0,.94-.91V11.7A6.4,6.4,0,0,0,48.3,5.92ZM16.17,1.79a.18.18,0,0,0,.07-.05L22.32,5.3l1.86,1.09,1.39.82a1,1,0,0,0,1,0l1.38-.82L29.78,5.3l6.07-3.56.07.05,11.6,5.78a4.56,4.56,0,0,1,2.71,4.13V40.9H43.7V17H41.83V48.18H10.26V17H8.4v24H1.87V11.7A4.56,4.56,0,0,1,4.58,7.57Z"></path></g></g></svg>
              s-shirt</div>
          <div @click.self="changeUrl" data-url-black="https://rlv.zcache.com/svc/view?pid=235750125344025205&realview=113577295862783981&style=truemade_mens_pullover_hoodie_z170&size=a_s&color=black&max_dim=1080&at=238414036962221940&t_image2_url=" data-url-white="https://rlv.zcache.com/svc/view?pid=235828058479628416&realview=113577295862783981&style=truemade_mens_pullover_hoodie_z170&size=a_s&color=white&max_dim=1080&at=238414036962221940&t_image1_url=" data-type="hoodie" :class="image.type == 'hoodie' ? typeActiveBtnClasses : typeDESActiveBtnClasses" >
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.1 50" class="mx-auto w-8 h-8 md:w-12 md:h-12 customizer-tabs__tab-icon"><title>Hoodie</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M48.3,5.92,36.64.16a2.18,2.18,0,0,0-1.88.12L26.2,5.12a.28.28,0,0,1-.29,0C25,4.54,19.68,1.51,17.53.28A2.19,2.19,0,0,0,15.66.15L3.8,5.92A6.37,6.37,0,0,0,0,11.7V41.81a.92.92,0,0,0,.93.91H8.4v6.37a.92.92,0,0,0,.93.91H42.76a.93.93,0,0,0,.94-.91V42.72h7.46a.93.93,0,0,0,.94-.91V11.7A6.4,6.4,0,0,0,48.3,5.92ZM16.17,1.79a.18.18,0,0,0,.07-.05L22.32,5.3v9.31a.93.93,0,0,0,1.86,0V6.39l1.39.82a1,1,0,0,0,1,0l1.38-.82v10a.94.94,0,0,0,1.87,0V5.3l6.07-3.56.07.05,11.6,5.78a4.56,4.56,0,0,1,2.71,4.13V40.9H43.7V17H41.83V48.18H10.26V17H8.4v24H1.87V11.7A4.56,4.56,0,0,1,4.58,7.57ZM34.41,31.9H17.69a.92.92,0,0,0-.94.91v9a.93.93,0,0,0,.94.91H34.41a.92.92,0,0,0,.93-.91v-9A.92.92,0,0,0,34.41,31.9Zm-.93,9H18.62V33.62H33.48Z"></path></g></g></svg>
              hoodie</div>
          <div @click.self="changeUrl"  data-url-white="https://rlv.zcache.com/svc/view?pid=168618248917868537&realview=113647281033678299&design=49572798-1dca-4b2b-89b3-65ca9ba277bc&style=trucker_hat&color=white_white&max_dim=1080&at=238414036962221940&t_image1_url=" data-type="hat" :class="image.type == 'hat' ? typeActiveBtnClasses : typeDESActiveBtnClasses" >
              <svg width="50" height="50" stroke="black" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-1 9.93023 52 30.11" class="mx-1 md:mx-2 mx-auto w-8 h-8 md:w-12 md:h-12 customizer-tabs__tab-icon"><title>Hat</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M 37 30 C 37 9 5 3 1 30 C 6 32 31 32 37 30 l 12 6 C 38 42 28 33 26.5 31.4 C 26 28 26 20 19 12 C 16 15 13 18 11 31"></path></g></g></svg>
              hat</div>
          
      </div>
  </div>


    <div class="flex flex-col md:flex-row justify-items-center px-2 md:px-8 md:h-4/6 ">
    <div class="relative h-full w-full md:w-fit justify-self-center ">
    
    <div   class="rounded-lg f w-full h-full grid content-center justify-center aspect-square bg-stone-100">
<div role="status" class="w-fit" >
    <svg class="inline mr-2 w-16 h-16 text-stone-100 animate-spin  fill-black  mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
</div>
    <nuxt-img  @load="makeImgDone"  id="img" class="absolute top-0 left-0 rounded-lg object-contain h-full w-full aspect-square z-40" :src="image_url" />
    </div>
    <div class="w-full md:w-fit flex flex-col pl-4 md:ml-8 grow h-full justify-between">
      
      <div >
          <h3 class="text-s md:text-xl my-2 md:my-4">Color:</h3>
          <div class="flex flex-row gap-4 mb-2 md:mb-4">
              <div v-if="Object.keys(imgs[image.type]).includes('white')" @click="changeColor" data-color="white" :class="[image.color == 'white' ? colorActiveBtnClasses : colorDESActiveBtnClasses,'bg-white']"></div>
              <div v-if="Object.keys(imgs[image.type]).includes('black')" @click="changeColor" data-color="black" :class="[image.color == 'black' ? colorActiveBtnClasses : colorDESActiveBtnClasses,'bg-black']"></div>
          </div>
          <div class="flex items-center">
						<label for="toggle" class="text-s md:text-xl pr-4 md:pr-8">Show Media:</label>
						<div class="relative inline-block w-10 pr-2 align-middle select-none transition duration-200 ease-in">
								<input type="checkbox" v-model="cond.show_media" true-value="true" false-value="false" id="toggle_show_media" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
								<label for="toggle_show_media" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
						</div>
					</div>
					<div class="flex items-center pt-2 md:pt-4">
						<label for="toggle" class="text-s md:text-xl pr-4 md:pr-8">Show Info:</label>
						<div class="relative inline-block w-10 pr-2 align-middle select-none transition duration-200 ease-in">
								<input type="checkbox" v-model="cond.show_info" true-value="true" false-value="false" id="toggle_show_info" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
								<label for="toggle_show_info" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
						</div>
					</div>
      </div> 
      <a class="self-stretch my-2  p-1 md:p-2 border border-black text-s md:text-xl rounded-lg bg-stone-100 text-gray-500 font-bold w-4/6 mx-auto text-center" :href="links[image.type][image.color]+png_url">Buy IT</a>
    </div>
        
    </div>
</section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

body {
background-color: #E6E2D9;
}
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: rgb(59 130 246 / 0.5);
  
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: rgb(59 130 246 / 0.5);
  border-radius:5rem 2rem 2rem 5rem;
}
</style>

