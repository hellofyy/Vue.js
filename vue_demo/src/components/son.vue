<template>
	<div>
	儿子：{{title}}-{{leftMsg}}-{{num*2}}-{{objData.name}}
	</div>

</template>

<script>
	export default{
		name:'son',
		data(){
			return{


			}
		},
		props:{
			title:[String,Number],
			leftMsg:{
				type:String,
				required:true

			},
			num:{
				type:Number,
				default:100
			},
			objData:{
				type:Object,
				default:function(){
					return {
						name:"未知",
						age:200
					}
				}
			}
		}
	}
</script>

<style scoped>
	

</style>