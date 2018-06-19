<template>
	<div>

		<button @click="sendMsg">发送</button>
	</div>
</template>

<script>
	export default{
		name:'son',
		data(){
			return{
				
			}
		},
		methods:{
			sendMsg(event){
				console.log(this.handleMsg)
				this.$emit("sendmsg",this.handleMsg)
			}
		},
		props:{
			msg:Number,
			default:5
		},
		computed:{
			handleMsg(){
				console.log(this.msg)
				return this.msg*2;
			}
		}
	}

</script>
<style>
	

</style>