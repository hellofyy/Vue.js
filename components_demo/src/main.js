// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,Carousel,CarouselItem} from "element-ui"
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Axios from 'axios'
import VueLazyload from 'vue-lazyload'


Vue.prototype.HOST="/api"
Vue.prototype.$axios=Axios
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("./assets/error.jpg"),
  loading: require("./assets/loading.gif"),
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
  	App
   },
  template: '<App/>'
})
