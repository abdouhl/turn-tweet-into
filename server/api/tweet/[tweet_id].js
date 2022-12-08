

export default defineEventHandler(async (event) => {
const {tweet_id} = event.context.params
const {name,username,profile_image_url_https,text,photos,tweet_text_dir}= await $fetch(useRuntimeConfig().apiUrl+tweet_id)



  return  {'name':name}
})

