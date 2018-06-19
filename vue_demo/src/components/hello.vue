<template>
	<div>
		<input type="text" v-focus>
		<p v-mycss>哈哈</p>
		<p>{{num | changeNum}} {{hello | addSign}}</p>

	</div>
</template>
<script>
	export default{
		name:"hello",
		data(){
			return {
				num:20,
				hello:"你好！"
			}
		},
		directives:{
			focus:{
				inserted:function(el){
					el.focus();
				}
			},
			mycss:{
				inserted:function(el){
					el.style.color="red";
				}
			}
		},
		filters:{
			changeNum(value){
				if(typeof value == "number"){
					return "￥"+value;
				}
				return value;
			},
			addSign(value){
				return value + new Date();
			}
		}
	}
</script>
<style>
	
</style>