<template>
 <div class="my-lyric">
   <div class="range" @click.stop="">
       <span>00:00</span>
       <div class="pragress">
      <div class="value">
      </div>
      <span class="cricle"></span>
  </div>
  
   </div> 
    <div class="lyric">
      <p class="">这是歌词</p>
      <p class="">这是歌词</p>
      <p class="">这是歌词</p>
    </div>
   </div> 
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
$sc: 25;
.my-lyric{
   position: absolute;
  top: 66/$sc+rem;
  left: 0;
  bottom: 120/$sc+rem;
  right: 0;
  overflow: hidden;
}
    .range {
  background: red; 
  display: flex;
  align-items: center;
  padding: 0 10/$sc+rem;
  height: 40/$sc+rem;
  margin: 0 auto;
  width: 90%;
  color: #aaa;
  span {
    width: 30/$sc+rem;
    height: 14/$sc+rem;
    line-height: 14/$sc+rem;
    text-align: center;
  }
}
.pragress {
  height: 2/$sc+rem;
  margin: 0 10/$sc+rem;
  background: hsla(0, 0%, 96%, 0.3);
  position: relative;
  color: gray;
  flex: 1;
  div {
    height: 2/$sc+rem;
    width: 50/$sc+rem;
    background: #fff;
  }
  .cricle {
    width: 14/$sc+rem;
    height: 14/$sc+rem;
    position: absolute;
    top: -6/$sc+rem;
    left: 50/$sc+rem;
    background: #fff;
    border-radius: 50%;
  }
}


.lyric{
  text-align: center;
  font-size: 20px;
  p{
    margin: 5px;
  }
}
</style>