<script setup>
var tweet_id = ""
const tweet_url =  reactive({url:''})
var next_tweet =null
next_tweet = computed(() => {

    if(!tweet_url.url ||tweet_url.url == ("https://twitter.com/_/status/"+tweet_id) || tweet_url.url == ""){
    return null
    }else{
    return  "/clothes/"+tweet_url.url.split('/')[tweet_url.url.split('/').indexOf('status')+1]
    }
})

</script>

<template>
<section class="w-screen  pb-4 md:pb-0" >
<div class="w-full px-1 md:px-8 ">
<h1 style="font-family: 'Lobster', cursive;" class="text-center text-3xl my-2 font-bold hover:text-blue-500" ><NuxtLink  to="/">Turn Tweet Into</NuxtLink></h1>


</div>
</section>

<section class="w-screen grid mx-auto  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 mt-2 md:mt-8 px-2 md:px-24 lg:px-36" >

<!--Clothing-->
<div class=" rounded-lg bg-stone-100 divide-y  px-1 md:px-2">
<h2 class="text-xl text-center py-1 " style="font-family: Lobster, cursive;">Clothing</h2>
<ul class="p-1 md:p-2">
<li><NuxtLink class="hover:text-blue-500" to="/clothes?type=t_shirt">T-Shirt</NuxtLink></li>
<li><NuxtLink class="hover:text-blue-500" to="/clothes?type=s_shirt">Sweatshirt</NuxtLink></li>
<li><NuxtLink class="hover:text-blue-500" to="/clothes?type=hoodie">Hoodie</NuxtLink></li>
<li><NuxtLink class="line-through" >Hat</NuxtLink></li>
</ul>
</div>

<!--Accessories-->
<div class="rounded-lg bg-stone-100 divide-y  px-1 md:px-2">
<h2 class="text-xl text-center py-1 " style="font-family: Lobster, cursive;">Accessories</h2>
<ul class="p-1 md:p-2">
<li><NuxtLink class="hover:text-blue-500" to="/accessories?type=totebag">Tote Bag</NuxtLink></li>
<li><NuxtLink class="line-through" >Face Mask</NuxtLink></li>
<li><NuxtLink class="line-through" >Water bottle</NuxtLink></li>
<li><NuxtLink class="line-through" >Travel mug</NuxtLink></li>
<li><NuxtLink class="line-through" >Zipper pouche</NuxtLink></li>
<li><NuxtLink class="line-through" >Toiletry Bag</NuxtLink></li>
</ul>
</div>

<!--Images-->
<div class="rounded-lg bg-stone-100 divide-y  px-1 md:px-2">
<h2 class="text-xl text-center py-1 " style="font-family: Lobster, cursive;">Images</h2>
<ul class="p-1 md:p-2">
<li><NuxtLink class="line-through" >Post</NuxtLink></li>
<li><NuxtLink class="line-through" >Png</NuxtLink></li>

</ul>
</div>


<!--Videos-->
<div class="rounded-lg bg-stone-100 divide-y  px-1 md:px-2">
<h2 class="text-xl text-center py-1 " style="font-family: Lobster, cursive;">Videos</h2>
<ul class="p-1 md:p-2">
<li><NuxtLink class="line-through" >Instagram Reel</NuxtLink></li>
<li><NuxtLink class="line-through" >Tiktok Video</NuxtLink></li>

</ul>
</div>

</section>

</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

body {
background-color: #E6E2D9;
}

</style>
