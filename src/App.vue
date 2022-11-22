<script>
export default {
  data() {
    return {
      count:0
    }
  }
}
</script>

<template>
<button @click="count++">count: {{ count }}</button>
</template>

<style>
button {
  font-weight:bold;
}
</style>


