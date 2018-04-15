// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from "vue-awesome-swiper";
import '~/swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import Icon from 'vue-svg-icon/Icon.vue';
console.log(Icon)
console.log(Icon.inject)
Vue.component('icon', Icon);


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted() {
    // console.log(Vue.wechat)
  }
})

