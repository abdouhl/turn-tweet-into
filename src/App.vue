<script>
export default {
  data() {
    return {
      count:0,
      tweet_id:'1560712321860771840',
      result:""
    }
  },
  methods:{
    getdata(){
      fetch("https://cdn.syndication.twimg.com/tweet-result?id=1567531687130632199")
        .then(res =>res.json())
        .then(data =>this.result = data);
    }
  }
}
</script>

<template>
<button @click="count++">count: {{ count }}</button>
<button @click="getdata()">get data</button>
<p >{{ result }}</p>
</template>

<style>
button {
  font-weight:bold;
}

</style>


