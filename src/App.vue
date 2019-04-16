<template>
  <div id="app">
    <blogheader></blogheader>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Blogheader from "./components/blogheader";

export default {
  name: 'App',
  components: {
    Blogheader,
  }
}
</script>

<style >
  .container{
    max-width: 60%;
  }



</style>
