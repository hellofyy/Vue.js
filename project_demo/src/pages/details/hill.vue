<template>
	<div>
		勇攀高峰:{{getOrder}}
	</div>
</template>

<script>
	export default {
		name:"hill",
		data(){
			return {

			}
		},
		computed:{
			getOrder(){
				return this.$store.getters.getOrder;
			}
		}

	}
</script>

<style>
	
</style>