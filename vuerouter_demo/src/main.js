// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import HelloWorld from "./components/HelloWorld"
import Hello from "./components/Hello"

Vue.use(VueRouter)
Vue.config.productionTip = false

var router = new VueRouter({
	routes:[
		{path:"/",component:HelloWorld},
		{path:"/hello",component:Hello}
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'

})
