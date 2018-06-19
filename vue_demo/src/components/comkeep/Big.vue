<template>
	<div>
		<keep-alive>
		<component :is="currentView"></component>
		</keep-alive>
		<button @click="changeView">切换组件</button>
	</div>
</template>

<script>
	import Small1 from "./small1"
	import Small2 from "./small2"
	export default{
		name:'Big',
		data(){
			return{
				currentView:"Small1",
				changeFlag:true
			}
		},
		components:{
			Small1,
			Small2
		},
		methods:{
			changeView(){
				if(this.changeFlag){
					this.currentView="Small2"
					this.changeFlag=false;
				}else{
					this.currentView="Small1"
					this.changeFlag=true;
				}
		
			}
		}
	}

</script>
<style scoped>
	

</style>