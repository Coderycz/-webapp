<template>
<transition name="container"  transition-mode="out-in">

<div class="container" >
     <div class="bg" >
        <img :src="srcimg"/> 
    </div> 
    <playerfooter></playerfooter>  
</div>  
</transition>
  
</template>

<script>

import playerfooter from "@/base/player/playerfooter";


export default {
  data() {
    return {
      bg: "http://oiq8j9er1.bkt.clouddn.com/music_qingnianwanbao.jpg"
    };
  },
  computed:{
    srcimg(){
      return this.$store.state.songlistheader.cover
    }
  },
  components: {  
    playerfooter,  
  }
};
/*  */
</script>

<style lang="scss" scoped>
$sc: 25;
.container-enter-to,.container-leave-to{
  transition: all 0.3s
}			
		.container-enter{
			transform: scale(3);
			opacity: 0}
		.container-leave-to{
			transform: scale(1.1);
			opacity: 0}
.container {  
  position: fixed;
  z-index: 9997;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .bg {
    height: 100%;
    position: fixed;
    z-index: -1;
  }
  img {
    display: inline-block;
    width: 375/$sc+rem;
    height: 375/$sc+rem;
    position: absolute;
    top: 50%;
    z-index: 1;
    transform: translate(0, -50%) scale(3);
    filter: blur(15px);
  }
}
</style>