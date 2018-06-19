<template>
	<div class="chooser-component">
		<div class="chooser-list">
			<ul>
				<li :class="{active:index==nowIndex}" v-for="(item,index) in radioData" @click="chooseRadio(index)">
					{{item.title}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			nowIndex:0
		}
	},
	props:{
		radioData:{
			type:Array,
			default:function(){
				return [
					{
						title:"test",
						value:0
					}
				]
			}
		}
	},
	methods:{
		chooseRadio(index){
			this.nowIndex = index;
			this.$emit("radios",this.radioData[index].value)
			this.$store.dispatch("updateOrder",{"key":"radios","value":this.radioData[index].value})

		}

	}
}
</script>

<style>

.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
	
</style>