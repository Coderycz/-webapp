<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
document.documentElement.style.fontSize = innerWidth / 15 + "px";
export default {
  name: 'app'
}
</script>

<style>
#app{
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
