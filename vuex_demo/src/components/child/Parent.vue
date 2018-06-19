<template>
	<div>
		爸爸:{{info}}
		<Child @handleMsg="getMsg" :title="msg"></Child>

	</div>
</template>
	
<script>
	import Child from "./Child"
	export default {
		name:"Parent",
		data(){
			return{
				msg:"儿子儿子我是你爸爸！",
				info:""
				
			}
		},
		components:{
			Child
		},
		methods:{
			getMsg:function(data){
				this.info=data;
			}
		}
	}
</script>

<style>
	
</style>