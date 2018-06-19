<template>
	<div class="counter-component">
			<div class="counter-btn" @click="decrease">-</div>
			<div class="counter-show">
				<input type="text" v-model="number" @keyup="handleFix">
			</div>
			<div class="counter-btn" @click="increase">+</div>
	</div>
</template>
<script>
	export default {
		name:"counter",
		data(){
			return{
				number:1
			}
		},
		methods:{
			increase(){
				if(this.number>=this.max){
					return
				}
				this.number++
				this.$emit("counter",this.number);
				this.$store.dispatch("updateOrder",{"key":"counter","value":this.number})
			},
			decrease(){
				if(this.number<=this.min){
					return
				}
				this.number--;
				this.$emit("counter",this.number);
				this.$store.dispatch("updateOrder",{"key":"counter","value":this.number})
			},
			handleFix(){
				let numberTemp;

				if(typeof this.number === "string"){
					numberTemp = Number(this.number.replace(/\D/g,""));

				}else{
					numberTemp = this.number;
				}
				if(this.number > this.max || this.number < this.min){
					numberTemp = this.min;
				}

				this.number = numberTemp;
				this.$emit("counter",this.number);
				this.$store.dispatch("updateOrder",{"key":"counter","value":this.number})
			}
		},
		props:{
			max:{
				type:Number,
				default:5
			},
			min:{
				type:Number,
				default:1
			}
		}
	}
</script>
<style>
	
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>