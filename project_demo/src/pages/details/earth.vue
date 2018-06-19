<template>
	<div>
		开放产品:{{getTotalPrice}}
	</div>
</template>

<script>
	export default {
		name:"earth",
		data(){
			return {

			}
		},
		computed:{
			getTotalPrice(){
				return this.$store.getters.getTotalPrice;
			}
		}

	}
</script>

<style>
	
</style>