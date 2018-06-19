<template>
	<div>
		儿子:{{getCount}}{{title}}
		<button @click="returnMsg">按钮</button>
	</div>
</template>
	
<script>
	export default {
		name:"Child",
		data(){
			return{
				info:"嗯嗯嗯！"
			}
		},
		methods:{
			returnMsg(){
				this.$emit("handleMsg",this.info)
			}
		},
		computed:{
			getCount(){
				return this.$store.getters.getState;
			}
		},
		props:["title"]
	}
</script>

<style>
	
</style>