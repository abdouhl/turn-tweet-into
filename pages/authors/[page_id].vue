<script setup>

const {page_id} = useRoute().params




const {pending,data:authors} = useLazyFetch('/api/a_p/'+page_id,{key: page_id})

</script>

<template>
<div v-if="pending">
    Loading ...
  </div>
  <div class="grid grid-cols-4 gap-8 px-36" v-else>
    <div class=" border md:border-2 border-black  rounded-lg bg-stone-100 p-2" v-for="author in authors" >
      <img class="rounded-full h-28 mx-auto" :src="author.profile_image"/>
      <h3 class="text-center pt-2 text-xl" >{{author.name}}</h3>
      <p class="text-center text-gray-500 text-xs" >@{{author.screen_name}}</p>
      <p class="text-center mt-4 mb-2"><NuxtLink class="p-2 border md:border-2  border-gray-500  rounded-lg bg-stone-100 text-white bg-gray-500 text-xs md:text-l font-bold" :to="'/authors/tweets/'+author.screen_name">Tweets</NuxtLink></p>
    </div>
  </div>


<NuxtLink  :to="'/authors/'+(parseInt(page_id)+1)">next</NuxtLink>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

body {
background-color: #E6E2D9;
}

</style>
