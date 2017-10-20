<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "common/style/reset.css";
import "common/style/layout.css";
const body = document.documentElement
document.documentElement.style.fontSize = innerWidth / 15 + "px";
document.getElementById("app").style.height = innerHeight + "px";
console.log(document.getElementById("app"))
export default {
  name: 'app'
}
</script>

<style>
#app{
  width: 100%;
 height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
