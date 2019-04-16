// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from "vue-resource"
import VueRouter from 'vue-router'
import {routes} from "./routes";
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(axios)


//自定义指令
//rainbow移去showblog局部定义
// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString(16).slice(2,8);
//   }
// })
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wight') {
      el.style.maxWidth = "1260px";
    } else if (binding.value == 'narrow') {
      el.style.minWidth = "560px";
    }
    if (binding.arg == 'column') {
      el.style.background = "white";
      el.style.padding = '15px';
    }
  }

})
//自定义过滤器
// 这些都是全局定义的过滤器或者指令，现在将uppercase过滤器定义在showblog局部
// Vue.filter("uppercase",function (value) {
//   return value.toUpperCase();
//
// })
Vue.filter("snippet",function (value) {
  return value.slice(0,100) +"...";

})


const router = new VueRouter(
  {
    routes,
    mode: 'history',
    scrollBehavior(to, from, savePosition) {
      // return{x:0,y:100}
      //return{selector:'btn'}
      //当回退时，显示的是上次滚动位置
      if (savePosition) {
        return savePosition
      } else {
        return {x: 0, y: 0}
      }

    }

  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
