import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
/* eslint-disable no-new */

export default new Vuex.Store({
	state:{
		count:10
	},
	mutations:{
		increase(state){
			return state.count++;
		},
		decrease(state){
			return state.count--;
		}
	},
	actions:{
		increase(context){
			 setTimeout(function(){
				return context.commit("increase");
			},1000)
		},
		decrease(context){
			setTimeout(function(){
				return context.commit("decrease");
			},1000)
		}
	},
	getters:{
		getState(state){
			return state.count<0 ? 0:state.count;
		}
	}
})