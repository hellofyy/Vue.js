<template>
  <div>
     <el-carousel >
      <el-carousel-item v-for="(img,index) in imgs" :key="index">
        <img :src="img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      imgs:[
        "http://www.taopic.com/uploads/allimg/140327/235088-14032GP44387.jpg",
        "http://pic29.photophoto.cn/20131204/0034034499213463_b.jpg",
        "http://pic5.photophoto.cn/20071228/0034034901778224_b.jpg",
        "http://c.hiphotos.baidu.com/lvpics/h=800/sign=f958ca75c8ea15ce5eeeed0986013a25/e61190ef76c6a7ef34780cd6fcfaaf51f2de66e0.jpg"
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .el-carousel{
    width:800px;
    height: 500px;
  }
  .el-carousel__item img{
    width:800px;
    height: 500px;
  }
</style>
