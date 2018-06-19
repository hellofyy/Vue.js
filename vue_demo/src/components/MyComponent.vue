<template>
	<div>
		父亲
		<son :title="msg" :leftMsg="leftMsg" :num="num" :objData="myObj"/>
		<input type="text" v-model:leftMsg="leftMsg">
		<button @click="changeMsg">修改</button> 
	</div>

</template>



<script>
	import son from './son'
	export default{
		name:'mc',
		components:{
			son

		},
		data(){
			return{
				msg:"我是活的数据",
				leftMsg:"hello",
				num:10,
				myObj:{
					name:"jack",
					age:100
				}

			}
		},
		methods:{
			changeMsg(event){
			this.msg="我是修改后的数据"
			}
		}

	}
</script>

<style scoped>
	

</style>