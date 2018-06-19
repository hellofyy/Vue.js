<template>
	<div>
		<ul>
			<li><router-link exact to="/" >主页</router-link></li>
			<li><router-link to="/course">课程</router-link></li>
			<li><router-link :to="{name:'master',params:{count:100,user:obj}}">专家</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"NavList",
		data(){
			return{
				obj:{
					name:"fyy",
					password:"123321"
				}
			}
		}
	}

</script>

<style scoped>
	div{
		width: 100%;
		height:50px;
		background: #f1f1f1;
		line-height: 50px;
	}
	li{
		float: left;
		margin: 0 20px;

	}
	ul{
		list-style: none;
	}
</style>