<template>
	<div>
		outter
		{{getCount}}
		<button @click="increase">增加</button>
		<button @click="decrease">减少</button>
	</div>
</template>
	
<script>
	export default {
		name:"Outter",
		data(){
			return{

			}
		},
		computed:{
			getCount(){
				return this.$store.getters.getState;
			}
		},
		methods:{
			increase:function(){
				//this.$store.commit("increase")
				this.$store.dispatch("increase");
			},
			decrease:function(){
				//this.$store.commit("decrease")
				this.$store.dispatch("decrease");
			}
		}
	}
</script>

<style>
	
</style>