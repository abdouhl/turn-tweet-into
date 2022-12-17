export default defineEventHandler(async (event) => {

const {author_username} = event.context.params

const author= await $fetch(useRuntimeConfig().apiUrl+"user/"+author_username)

  return  author 
})

