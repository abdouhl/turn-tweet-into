<script setup>


const {type} = useRoute().query
console.log(type)
</script>

<template>
<p id="myid" data-type="t_shirt" >{{type}}</p>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

body {
background-color: #E6E2D9;
}

</style>
