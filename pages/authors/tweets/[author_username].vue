<script setup>

const {author_username} = useRoute().params

const {pending,data:author} = useLazyFetch('/api/a_t/'+author_username,{key: author_username})

</script>

<template>
<div v-if="pending">
    Loading ...
  </div>
  <div class="px-36" v-else>
    <div class=" border md:border-2 border-black  rounded-lg bg-stone-100 p-2"  >
      <img class="rounded-full h-28 mx-auto" :src="author.profile_image"/>
      <h3 class="text-center pt-2 text-xl" >{{author.name}}</h3>
      <p class="text-center text-gray-500 text-xs" >@{{author.username}}</p>
      
    </div>
  <div class="grid grid-cols-4 gap-8 mt-4">
    <div class=" border md:border-2 border-black  rounded-lg bg-stone-100 p-2" v-for="tweet_id in author.tweets" >
      <NuxtLink  :to="'/clothes/'+tweet_id"><nuxt-img :src="'/api/w_t/'+tweet_id" width="1800" height="2100" loading="lazy"  sizes="sm:100vw md:50vw lg:25vw" class="w-full  mx-auto" /></NuxtLink>
      <h3 class="text-center pt-2 text-xl" >{{}}</h3>
     
    </div>
  </div>
  </div>


</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

body {
background-color: #E6E2D9;
}

</style>
