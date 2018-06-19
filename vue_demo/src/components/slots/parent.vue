<template>
	<div>
		<Child>

			<div slot="s1" class="ptest">
				<p>这是插槽1</p>
				<p>这是插槽2</p>
			</div>
			<p slot="s2" class="ptest" slot-scope="props">
				{{props.text}}
			</p>
			
		</Child>
	</div>
</template>

<script>

	import Child from "./child"
	export default{
		name:'parent',
		data(){
			return{
				
			}
		},
		components:{
			Child
		}
	}

</script>
<style scoped>
	.ptest{
		color:red;
	}

</style>