<script setup>


const {type} = useRoute().query
var tweet_id = ""
const tweet_url =  reactive({url:''})
var next_tweet =null
next_tweet = computed(() => {

    if(!tweet_url.url ||tweet_url.url == ("https://twitter.com/_/status/"+tweet_id) || tweet_url.url == ""){
    return null
    }else{
    return  "/accessories/"+tweet_url.url.split('/')[tweet_url.url.split('/').indexOf('status')+1]+"?type="+type
    }
})

const type_title = computed(() => {

    if( type == "totebag"){
    return "Tote Bag"
    }else if( type == "t_shirt"){
    return  "Tshirt"
    }
})

</script>

<template>
<section class="w-screen h-screen   pb-4 md:pb-0" >
<div class="flex  flex-col w-full h-full content-center justify-center  px-1 md:px-8 md:items-center">
<h1 style="font-family: 'Lobster', cursive;" class="w-full h-fit text-center text-3xl my-8 md:my-2 font-bold hover:text-blue-500" ><NuxtLink  to="/">Turn Tweet Into </NuxtLink><span class="text-blue-500">{{type_title}}</span></h1>
<div class="w-full flex flex-row justify-items-center justify-center py-2 md:py-4" >
<div class="relative w-full md:w-6/12 lg:w-5/12">
  <input class="h-full w-full placeholder-gray-400 focus:placeholder-transparent text-xs md:text-xl text-gray-500 pl-1 md:pl-4  md:py-2 rounded-lg bg-stone-100  focus:outline-none" v-model="tweet_url.url" placeholder="Enter Tweet URL here">
  <p class="absolute -bottom-8 md:-bottom-5 left-1 text-xs">ex: <NuxtLink class="text-blue-500" :to="'/accessories/1604650028999405568?type='+type">https://twitter.com/elonmusk/status/1604650028999405568</NuxtLink></p>
  </div>
  <NuxtLink class="self-stretch mx-1 md:mx-2  p-2 border border-black  rounded-lg bg-stone-100 text-gray-500 text-xs md:text-xl font-bold" :to="next_tweet">Submit</NuxtLink>
  
</div>

</div>
</section>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

body {
background-color: #E6E2D9;
}

</style>
