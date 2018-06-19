<template>
	<div>
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide v-for="(img,index) in imgs" :key="index">
				<img :src="img">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default{
		name:"helloSwiperTwo",
		data(){
			return{
				imgs:[
					
				],
				swiperOption: {
		          	autoplay:true,
		          	pagination: {
			            el: '.swiper-pagination'
			        }
		        }
			}
		},
		created(){
			var url = this.HOST+"/getImgUrl";
			this.$axios(url)
			.then(rep=> {
				console.log(rep.data)
				this.imgs = rep.data;
			})
			.catch(error=> {
				console.log(error);
			})
		}
	}
</script>

<style scoped>
	img{
		/* color: red; */
	}
</style>