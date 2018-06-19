<template>
	<div>
		<img v-lazy="imgUrl">
		<img v-lazy="imgObj">
	</div>
</template>

<script>
	export default {
		name:"lazyLoad",
		data(){
			return{
				imgObj:{
					src:"http://www.taopic.com/uploads/allimg/140327/235088-14032GP44387.jpg",
					/*src:require("../assets/sea.jpg"),*/
				/*	error:require("../assets/error.jpg"),
					loading:require("../assets/loading.gif")*/
				},
				imgUrl:"http://pic29.photophoto.cn/20131204/0034034499213463_b.jpg"
			}
		}
	}
</script>

<style scoped>
	
</style>