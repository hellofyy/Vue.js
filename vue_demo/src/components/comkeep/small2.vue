<template>
	<div>
		s2
		{{cache}}
		<button @click="changeCache">缓存切换</button>
	</div>
	
</template>

<script>
	export default{
		name:'small2',
		data(){
			return{
				cache:"我是缓存"
			}
		},
		methods:{
			changeCache(){
				this.cache="我是cache"
			}
		}
	}

</script>
<style scoped>
	

</style>