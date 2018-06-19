<template>
	<div>
		<input type="text" v-model="msg">
		<Son @sendmsg="getMsg" :msg="parseMsg"/>
		<p>{{msg}}</p>
	</div>
</template>

<script>
	import Son from './son'
	export default{
		name:'parent',
		data(){
			return{
				msg:10
			}
		},
		components:{
			Son
		},
		computed:{
			parseMsg:function(){
				return this.msg-0;

			}
		},
		methods:{
			getMsg(data){
				this.msg=data;
			}
		}
	}

</script>
<style>
	

</style>