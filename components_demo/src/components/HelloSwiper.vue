<template>
	<div>
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide>
				<img src="http://www.taopic.com/uploads/allimg/140327/235088-14032GP44387.jpg">
		    </swiper-slide>
		    <swiper-slide>
				<img src="http://pic29.photophoto.cn/20131204/0034034499213463_b.jpg">
		    </swiper-slide>
		    <swiper-slide>
				<img src="http://pic5.photophoto.cn/20071228/0034034901778224_b.jpg">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default{
		name:"helloSwiper",
		data(){
			return{
				swiperOption: {
		          	autoplay:true,
		          	pagination: {
			            el: '.swiper-pagination'
			        }
		        }
			}
		}
	}
</script>

<style scoped>
	
</style>