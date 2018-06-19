<template>
  <div class="hello">
   		<ul>
   			<li v-for="data in list">
   				{{data.username}}:{{data.password}}
   			</li>
   		</ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list:[]
    }
  },
  created(){
  	var url = this.HOST+"getAllUser";

  	this.$axios(url)
  	.then(res => {
  		this.list=res.data;
  		console.log(res);
  	})
  	.catch(error => {
  		console.log(error);
  	})
  }
}
</script>

</style>
