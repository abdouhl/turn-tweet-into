<script setup>

const {page_id} = useRoute().params




const {pending,data:authors} = useLazyFetch('/api/a_p/'+page_id,{key: page_id})

</script>

<template>
<div v-if="pending" class="w-screen h-screen grid content-center justify-center">
<div role="status" class="w-fit ">
    <svg class="inline mr-2 w-16 h-16 text-stone-100 animate-spin  fill-black  mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
</div>
  <div v-else>
		<div class="grid mx-auto w-fit grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 mt-2 md:mt-4 px-2 md:px-24 lg:px-36">
		  <div class="aspect-square  max-h-60 border md:border-2 border-black  rounded-lg bg-stone-100 p-2" v-for="author in authors" >
		    <nuxt-img class="rounded-full h-28 mx-auto" :src="author.profile_image" loading="lazy" />
		    <h3 class="text-center pt-2 text-xl" >{{author.name}}</h3>
		    <p class="text-center text-gray-500 text-xs" >@{{author.screen_name}}</p>
		    <p class="text-center mt-4 mb-2"><NuxtLink class="p-2 border md:border-2  border-gray-500  rounded-lg bg-stone-100 text-white bg-gray-500 text-xs md:text-l font-bold" :to="'/authors/tweets/'+author.screen_name">Tweets</NuxtLink></p>
		  </div>
  </div>
  <div class="w-fit mx-auto">
  	<div class="w-fit inline-flex justify-center">
  		<div v-if="page_id != '1'" class="my-2 mx-1 border md:border-2 p-2 border-black  rounded-lg bg-stone-100"><NuxtLink class="" :to="'/authors/'+(parseInt(page_id)-1)">previous</NuxtLink></div>
  		<div v-if="page_id != '157'" class="my-2 mx-1 border md:border-2 p-2 border-black  rounded-lg bg-stone-100" ><NuxtLink class="" :to="'/authors/'+(parseInt(page_id)+1)">next</NuxtLink></div>
  		
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
