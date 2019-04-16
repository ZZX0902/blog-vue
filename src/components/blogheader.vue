<template>
  <header>
    <div class="background">
      <div class="button-div">
            <ul>
              <li>
                <router-link to="/" exact>博客</router-link>
                <router-link to="/addBlog" exact >发表博客</router-link>
              </li>
            </ul>
      </div>

    </div>
  </header>
</template>

<script>
  export default {
    name: "blogheader",
    methods: {
      // toshowblog() {
      //     this.$router.push('showblog')
      //   },
      //   toaddblog() {
      //     this.$router.push('addBlog')
      //   }
    }
  }
</script>

<style scoped>
  .background {
    background: #ff0d3b;
    height: 80px;
    width: 100%;
    /*margin-bottom: 20px;*/
  }

  .button-div {
    width: 200px;
    height: 200px;
    margin: auto;
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
  }
  ul {
    list-style-type: none;
    margin: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color: white;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px ;

  }
  .router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
  }




</style>
