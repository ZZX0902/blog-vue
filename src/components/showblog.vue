<template xmlns:v-theme="http://www.w3.org/1999/xhtml">
  <div v-theme:column="'wight'" id="showblog">
    <h1>博客总揽</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <!--之所以遍历 filterBlogs 是因为如果遍历成功则展示成功搜索出的博客，如果失败或者搜索框里为空，则显示全部-->
    <div v-for="blog in filterBlogs" class="single-blog">
      <h2 v-rainbow>{{blog.title | uppercase}}</h2>
      <article>
        {{blog.body | snippet}}
      </article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "showblog",
    data() {
      return {
        blogs: [],
        search: ""

      }
    },
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
      //  this.$http.get('./../static/posts.json')

        .then(function (data) {
          // console.log(data)
          this.blogs = data.body.slice(0, 10);
          // console.log(this.blogs)
        })
    },
    computed: {
      filterBlogs: function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search)
        })

      }
    },
    filters: {
      uppercase(value) {
        return value.toUpperCase();
      }
    },
    directives: {
      'rainbow': {
        bind(el, binding, vnode) {
          el.style.color = "#" + Math.random().toString(16).slice(2, 8);
        }
      }
    }

  }
</script>

<style scoped>
  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }

</style>
