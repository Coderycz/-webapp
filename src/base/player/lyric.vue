<template>
 <div class="my-lyric" >
   <div class="range" @click.stop="" >
      <span><i class="iconfont icon-shengyin"></i></span>
      <div class="pragress" ref="pragress" @click.stop="chang()">
          <div class="value" ref="valued"></div>
          <span class="cricle" ref="cricle"
          @touchstart.stop="touchstart"
           @touchmove.stop="touchmove"
           @touchend.stop = "touchend"
           ></span>
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
var audio = document.querySelector("audio");
var istouch= false
export default {
  data(){
    return {
    }
  },
  created(){
    this.start()
  },
  methods:{
    chang(ev){
      let e = ev || window.event
      console.log(e)
				let mouseX =  e.pageX ||e.touches[0].pageX              //鼠标离屏幕右边的距离
				let offsetLeft = this.$refs.pragress.offsetLeft           //进度条距离屏幕右边的距离
        let pragresswidth = this.$refs.pragress.offsetWidth       //进度条长度

        console.log(pragresswidth)
        var length = (mouseX - offsetLeft - this.$refs.cricle.offsetWidth) / (pragresswidth-this.$refs.cricle.offsetWidth)
        length = length > 1 ? 1 : length
        length = length < 0 ? 0 : length
        this.dragtime = length
       
        //移动时改变已播放 进度条 和 滑点 位置
        this.$refs.valued.style.width = length *pragresswidth+"px"
        this.$refs.cricle.style.left = length *(pragresswidth-this.$refs.cricle.offsetWidth)+"px"    
       
       this.$store.commit('changevolume',this.dragtime)
        audio.volume = this.$store.state.volume
      
    },
    start(){
      audio.volume = this.$store.state.volume
      if(this.$refs.valued && this.$refs.cricle)  {
        this.$refs.valued.style.width = audio.volume *pragresswidth+"px"
        this.$refs.cricle.style.left = audio.volume *(pragresswidth-this.$refs.cricle.offsetWidth)+"px"
      }
    },
    touchstart(){
      istouch = true;
    },
    touchmove(ev){
        if(!istouch){
          return
        }
        let e = ev || window.event
				let mouseX = ev.pageX || ev.touches[0].pageX              //鼠标离屏幕右边的距离
				let offsetLeft = this.$refs.pragress.offsetLeft           //进度条距离屏幕右边的距离
        let pragresswidth = this.$refs.pragress.offsetWidth       //进度条长度

        var length = (mouseX - offsetLeft - this.$refs.cricle.offsetWidth) / (pragresswidth-this.$refs.cricle.offsetWidth)
        length = length > 1 ? 1 : length
        length = length < 0 ? 0 : length
        this.dragtime = length
       
        //移动时改变已播放 进度条 和 滑点 位置
        this.$refs.valued.style.width = length *pragresswidth+"px"
        this.$refs.cricle.style.left = length *(pragresswidth-this.$refs.cricle.offsetWidth)+"px"    
          
    },
    touchend(){
      if(istouch){             
        this.$store.commit('changevolume',this.dragtime)
        audio.volume = this.$store.state.volume                    
      }
      istouch = false;    
    },

  }
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
  i{
    color: #eee;
    font-size: 16px;
  }
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
  background: hsla(0, 0%, 96%, 0.4);
  position: relative;
  color: gray;
  flex: 1;
  div {
    height: 2/$sc+rem;
    width: 150/$sc+rem;
    background: #fff;
  }
  .cricle {
    width: 14/$sc+rem;
    height: 14/$sc+rem;
    position: absolute;
    top: -6/$sc+rem;
    left: 150/$sc+rem;
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