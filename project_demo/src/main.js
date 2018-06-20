// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import VueAwesomeSwiper from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"
import store from "./store"

Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = Axios

/*Vue.prototype.HOST='/api'*/
Axios.defaults.baseURL = "/api/"
Axios.interceptors.request.use(function(config){
	console.log(config)
	if(config.method == "post"){

	}
	return config
},function(error){
	return Promise.reject(error);
})

Axios.interceptors.response.use(function(response){
	console.log(response)
	return response
},function(error){
	return Promise.reject(error);
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { 
  	App
  },
  template: '<App/>'
})
