<template>
	<div>
		<NavList/>
		<div class="left">
			课程页面
			<ul>
				<li><router-link to="/course/java">java</router-link></li>
				<li>前端</li>
				<li><router-link to="/course/android">android</router-link></li>
			</ul>
		</div>
		<dir class="right">
			<router-view></router-view>
		</dir>
	</div>
</template>

<script>
	import NavList from "./NavList"
	export default {
		name:"course",
		data(){
			return{
				
			}
		},
		components:{
			NavList
		}
	}

</script>

<style>
	.left,.right{
		float:left;
	}
	.right{
		margin-left: 50px;
	}
</style>