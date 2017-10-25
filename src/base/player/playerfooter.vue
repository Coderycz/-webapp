<template>

<div class="headfoot">
    <!-- 头部 -->
   
    <div class="y-header">
        <span @click="goback"><i class="iconfont icon-zuo"></i></span>
        <div>
            <p class="title">化身孤岛的鲸</p>
            <p class="singer">不才</p>
        </div>
        <span><i class="iconfont icon-fenxiang"></i></span>
    </div>   
<!-- 中间的cd盘 -->
    <div @click="showlyric">
        <playercd  v-show="lyric"></playercd> 
      <showlyric  v-show="!lyric"></showlyric>
    </div>
    
<!-- 进度条 -->
<div class="y-footer">
   <div class="range">
       <span>{{playtime}}</span>
       <div class="pragress">
      <div class="value">
      </div>
      <span class="cricle"></span>
  </div>
  <span>03:25</span>
   </div>  

<!-- 尾部 -->
  <div class="control" >
      <i class="iconfont icon-xunhuanbofang" ></i>
      <i class="iconfont icon-shangyiqu101"></i>
      <i class="iconfont " :class="isplayicon" @click="play"></i>
      <i class="iconfont icon-xiayiqu101"></i>
      <i class="iconfont icon-caidan"></i>
      
  </div>
  </div>
</div>
</template>
    
<script>
import playercd from "@/base/player/playercd";
import showlyric from "@/base/player/lyric";
var audio =document.querySelector('audio');
var timer = ""
export default {
  data() {
    return {
      timeed: 0,
      islike: false,
      lyric: true,    
    };
  },
  created(){
    this.$store.commit("changetime",audio.currentTime)
    timer = setInterval(this.gettime,300)
  },
  methods: {
    gettime(){
      this.timeed =  audio.currentTime  
    },
    showlyric() {
      this.lyric = !this.lyric;
      console.log(this.lyric);
    },
    goback(){
      return this.$router.go(-1)
    },
    play(){     
        if(!this.isPlaying){
          audio.play();
          timer = setInterval(this.gettime,500)                  
        }else{
          audio.pause();
          clearInterval(timer)
        }
        this.$store.commit("changeplay")
    }, 
  },
  watch:{
    timeed(n){
      this.$store.commit("changetime",n)
    }
  },
  computed:{  
    playtime(){
      var gett = this.$store.state.playtime;
      var min = (parseInt(gett/60)+'').padStart(2,'0')
      var sec = (parseInt(gett%60)+'').padStart(2,'0')
      return `${min}:${sec}`
    } ,
    isplayicon(){
      return this.$store.state.isplay?"icon-zanting":"icon-bofang"
    },
    isPlaying(){
      return this.$store.state.isplay
    },
  },
  components: {
    playercd,
    showlyric
  }
};
</script>

<style lang="scss" scoped>
$sc: 25;
.headfoot {
  //transform: scale(0.5)
}

.y-header {
  width: 100%;
  height: 66/$sc+rem;
  padding: 8/$sc+rem 0;
  position: fixed;
  top: 0;
  display: flex;
  color: #fff;
  div {
    flex: 1;
    margin-top: 5/$sc+rem;
    .singer,
    .title {
      color: #fff;
      font-size: 12/$sc+rem;
      height: 20/$sc+rem;
      padding: 4/$sc+rem 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  span {
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    i {
      font-size: 20/$sc+rem;
    }
  }
}

.y-footer {
  width: 100%;
  height: 120/$sc+rem;
  position: fixed;
  bottom: 0;
  .control {
    width: 100%;
    height: 80/$sc+rem;
    background: transparent;
    display: flex;
    text-align: center;
    padding: 15/$sc+rem 0;
    line-height: 50/$sc+rem;
    i {
      flex: 1;
      height: 50/$sc+rem;
      color: #aaa;
      font-size: 28/$sc+rem;
      &:nth-child(1) {
        font-size: 20/$sc+rem;
      }
      &:nth-child(3) {
        font-size: 46/$sc+rem;
      }
      &:nth-child(5) {
        font-size: 20/$sc+rem;
      }
    }
  }
}
.range {
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
    background: red;
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

.control {
}
</style>