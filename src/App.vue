<template>
  <div id="app"> 
    <sidebar></sidebar> 
    <keep-alive>
      <router-view/>
    </keep-alive>
    <minilist></minilist>
    <my-footer></my-footer>    
  </div>
</template>
<script>
import "common/style/reset.css";
import "common/style/layout.css";
import sidebar from 'components/sidebar'
import minilist from '@/base/minisonglist'
import myFooter from '@/base/footer'
    

document.documentElement.style.fontSize = innerWidth / 15 + "px";
document.getElementById("app").style.height = innerHeight + "px";

export default {
  name: 'app',
  components:{
    sidebar,
    minilist,
    myFooter
  }
}
</script>

<style>

.flod-enter{
    opacity: 0;
    transform: scale(0.5);   
}
.flod-enter-active{
    opacity: 1;
    transform: scale(1);  
    transition: all 0.5s ease  
}


#app{
  width: 100%;
 height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
