<template>
  <div id="app">
      <Hello/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import MyComponent from './components/MyComponent'
import Parent from './components/sonparent/parent'
import Parents from "./components/slots/parent"
import Big from "./components/comkeep/Big"
import Anim from "./components/anim/anim"
import Hello from "./components/Hello"
export default {
  name: 'App',
  components: {
      Hello
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img{

  width:100px;
}

</style>
