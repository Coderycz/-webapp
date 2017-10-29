<template>

<div class="container" >
     <div class="bg" >
        <img :src="bg"/> 
    </div> 
    <!-- <pragress></pragress> --> 
    <playerfooter></playerfooter>  
</div>

  
</template>

<script>

import playerfooter from "@/base/player/playerfooter";

export default {
  data() {
    return {
      bg: "http://oiq8j9er1.bkt.clouddn.com/music_qingnianwanbao.jpg"
    };
  },
  components: {  
    playerfooter,  
  }
};
/*  */
</script>

<style lang="scss" scoped>
$sc: 25;
.container {  
  position: fixed;
  z-index: 9999999;
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