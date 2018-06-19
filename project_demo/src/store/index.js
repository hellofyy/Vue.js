import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)
export default new VueX.Store({
	state:{
		order:{
			counter:1,
			downMeau:1,
			radios:1
		},
		totalPrice:0
	},
	mutations:{
		updateOrder(state,data){
			state.order[data.key] = data.value;
		},
		updateTotalPrice(state,price){
			state.totalPrice = price;
		}
	},
	actions:{
		updateOrder(context,data){
			context.commit("updateOrder",data)
		},
		updateTotalPrice(context,price){
			context.commit("updateTotalPrice",price)
		}
	},
	getters:{
		getOrder(state){
			return state.order;
		},
		getTotalPrice(state){
			return state.totalPrice;
		}

	}

})