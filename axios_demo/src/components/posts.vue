<template>
	<div>
		
	</div>
</template>

<script>
	export default{
		name:"posts",
		data(){
			return{

			}
		},
		created(){
			var url = this.HOST+"/login"
			console.log(url)
			this.$axios.post(url,{
				username:"zs"
			})
			.then(res=> {
				console.log(res)
			})
			.catch(error=> {
				console.log(error)
			})
		}
	}
</script>

<style>
	
</style>