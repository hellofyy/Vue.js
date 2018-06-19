// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from "axios"
Vue.config.productionTip = false

Vue.prototype.$axios = Axios
Vue.prototype.HOST='/api'

Axios.interceptors.request.use(function(config){
	console.log(config)
	if(config.method == "post"){

	}
	return config
},function(error){
	return Promise.reject(error);
})

Axios.interceptors.request.use(function(response){
	console.log(response)
	return response
},function(error){
	return Promise.reject(error);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
