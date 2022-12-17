export default defineEventHandler(async (event) => {

const {page_id} = event.context.params

const {authors}= await $fetch(useRuntimeConfig().apiUrl+"authors/"+page_id)

  return  authors 
})

