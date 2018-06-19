<template>
	<div>
		<transition name="fade">
		<p v-show="isShow">哈哈哈</p>
		</transition>
		<button @click="showHide">过度</button>
		
		<button @click="showHideAnim">动画</button>
		<transition name="hello">
		<p v-show="isAnimShow">嘿嘿</p>
		</transition>

		<button @click="animLibs">动画库</button>
		<transition name="world"
	    enter-active-class="animated flip"
	    leave-active-class="animated flip"
		>
		<p v-show="libs">呵呵</p>
		</transition>

	</div>
</template>
<script>
	export default{
		name:"anim",
		data(){
			return{
				isShow:true,
				isAnimShow:true,
				libs:true
			}
		},
		methods:{
			showHide(){
				this.isShow = !this.isShow;
			},
			showHideAnim(){
				this.isAnimShow = ! this.isAnimShow;
			},
			animLibs(){
				this.libs = !this.libs;
			}
		}
	}
</script>
<style>
	.fade-enter-active,.fade-leave-active{
		transition:opacity .5s;
	}
	.fade-enter,.fade-leave-to{
		opacity: 0;
	}
/* 	.fade-enter-to,.fade-leave{
	opcity:1;
} */

	.hello-enter-active {
	  animation: bounce-in .5s;
	}
	.hello-leave-active {
	  animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0);
	  }
	  50% {
	    transform: scale(20);
	  }
	  100% {
	    transform: scale(1);
	  }
	}

	p{
		font-size: 40px;
		position: absolute;
	}
</style>