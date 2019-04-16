<template>
  <div id="addBlog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
      <label>主题</label>
      <input type="text" v-model="blog.title" required/>
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular4</label>
        <input type="checkbox" value="Angular4" v-model="blog.categories">
      </div>
      <label>作者：</label>
      <select v-model="blog.anthor">
        <option v-for="item2 in anthors">{{item2}}</option>
      </select>
      <button v-on:click.prevent="post">发表博客</button>

    </form>
    <div v-if="submmited">
      <h3>您的博客发表成功！</h3>
    </div>
    <div id="review">
      <h3>博客总揽</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for="item in blog.categories">{{item}}</li>
      </ul>
      <p>作者：{{blog.anthor}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "addBlog",
    data() {
      return {
        blog: {
          title: "",
          content: "",
          categories: [],
          anthor: ""
        },
        anthors: ["Bukky", "Herry", "James"],
        submmited: false
      }

    },
    methods: {
      // post: function () {
      //   this.$http.post("https://jsonplaceholder.typicode.com/posts", {
      //     title: this.blog.title,
      //     body: this.blog.content,
      //     userId: 1
      //   })
      post: function () {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        })
          .then(function (data) {
            console.log(data)
            this.submmited = true;
          });
      }
    }
  }
</script>

<style scoped>
  #addblog * {
    box-sizing: border-box;
  }

  #addblog {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }

  label {
    display: block;
    margin: 20px 0 10px;
  }

  input[type="text"], textarea, select {
    display: block;
    padding: 8px;
    width: 100%;
  }

  textarea {
    height: 200px;
  }

  #checkboxes label {
    display: inline-block;
    padding-top: 0px;
  }

  #checkboxes input {
    display: inline-block;
    margin-right: 10px;
  }

  button {
    display: block;
    margin: 20px;
    background: #00c848;
    color: white;
    border: 0;
    padding: 14px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
  }

  #review {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }

  h3 {
    margin-top: 10px;
    margin-bottom: 20px
  }

</style>
