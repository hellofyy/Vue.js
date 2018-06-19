<template>
	<div class="child">
		子
		<slot name="s1"></slot>
		<hr/>
		<slot name="s2" text="我是传递数据"></slot>

	</div>
</template>

<script>
	export default{
		name:'child',
		data(){
			return{
				
			}
		}
	}

</script>
<style scoped>
	

</style>