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
      <div class="pragress" ref="pragress">
          <div class="value" ref="valued"></div>
          <span class="cricle" ref="cricle"
          @touchstart.stop="touchstart"
           @touchmove.stop="touchmove"
           @touchend.stop = "touchend"
           ></span>
      </div>    
  <span>{{sumtime}}</span>
</div>  

<!-- 尾部 -->
  <div class="describing" v-show="changetype">{{describing[i]}}</div>
  <div class="control" >   
      <i class="iconfont " :class="playtype1[i]" @touchstart="playtype"></i>
      <i class="iconfont icon-shangyiqu101"></i>
      <i class="iconfont " :class="isplayicon" @click="play"></i>
      <i class="iconfont icon-xiayiqu101"></i>
      <i class="iconfont icon-caidan" @touchstart="showmini"></i>     
  </div>
  </div>
</div>
</template>
    
<script>
import {mapState} from "@/vuex/index"

import playercd from "@/base/player/playercd";
import showlyric from "@/base/player/lyric";
var audio = document.querySelector("audio");
var timer = "";
var istouch = false;

export default {
  data() {
    return {
      timeed: 0,        //播放时长
      islike: false,    
      lyric: true,
      dargtime: 0,      //拖拽时长   
      changetype: flase,   
    };
  },
  created() { 
      audio.addEventListener("canplay",function(){
       this.$store.commit("getsumtime", audio.duration);
    }.bind(this)) 
    this.$store.commit("changetime", audio.currentTime);
    
    timer = setInterval(this.gettime, 300);
    //console.log(this.sumtime,audio.duration)
  },
  methods: {
    /* 进度条事件 */
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
       console.log(audio.currentTime)    
    },
    touchend(){
      if(istouch){    
        audio.currentTime = audio.duration*this.dragtime       
        audio.play()
        if(!this.$store.state.isplay){
          this.$store.commit("changeplay")
        }  
        timer = setInterval(this.gettime, 500);   
      }
      istouch = false;    
    },

    /* 已播放时长 */
    gettime() {
      this.timeed = audio.currentTime;
      if(istouch){
        return
      }  
      if(this.$refs.valued && this.$refs.cricle)  {
        this.$refs.valued.style.width = this.percent *this.$refs.pragress.offsetWidth+"px"
        this.$refs.cricle.style.left = this.percent *(this.$refs.pragress.offsetWidth-this.$refs.cricle.offsetWidth)+"px"
        console.log(this.percent,this.$refs.pragress.offsetWidth) 
      }            
    },   
    play() {
      if (!this.isPlaying) {
        audio.play();
        timer = setInterval(this.gettime, 500);
      } else {
        audio.pause();
        clearInterval(timer);
      }
      this.$store.commit("changeplay");
    },
    playtype(){
      this.changetype = true;
      setTimeout(function(){
        this.changetype = false;
      },1000)
      this.$store.commit("changei")
    },
    /* 返回 */
    showlyric() {
      this.lyric = !this.lyric;
      console.log(this.lyric);
    },
    goback() {
      return this.$router.go(-1);
    },
    showmini(){
      console.log("sdf")
      this.$store.commit("changemini");
    }
  },
  watch: {
    timeed(n) {
      this.$store.commit("changetime", n);
    },
    sumtime(){

    }
  },
  computed: {
    i(){
      return this.$store.state.i
    },
    playtype1(){
      return this.$store.state.type
    },
    describing(){
      return this.$store.state.describing
    },
    percent(){
      return this.timeed/audio.duration
    },
    playtime() {
      var gett = this.$store.state.playtime;
      var min = (parseInt(gett / 60) + "").padStart(2, "0");
      var sec = (parseInt(gett % 60) + "").padStart(2, "0");
      return `${min}:${sec}`;
    },
    sumtime(){
      var gett = this.$store.state.duration>0 ? this.$store.state.duration : 0 ;
      console.log(gett)
      var min = (parseInt(gett / 60) + "").padStart(2, "0");
      var sec = (parseInt(gett % 60) + "").padStart(2, "0");
      return `${min}:${sec}`;
    },
    isplayicon() {
      return this.$store.state.isplay ? "icon-zanting" : "icon-bofang";
    },
    isPlaying() {
      return this.$store.state.isplay;
    }
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
    width: 0/$sc+rem;
    background: red;
  }
  .cricle {
    width: 14/$sc+rem;
    height: 14/$sc+rem;
    position: absolute;
    top: -6/$sc+rem;
    left: 0/$sc+rem;
    background: #fff;
    border-radius: 50%;
  }
}

.describing{
  color: #999;
  width: 140px;
  height: 40px;
  border-radius: 30px;
  position: fixed;
  bottom: 55px;
  font-size: 16px;
  left: 50%;
  transform: translate(-50%);
  line-height: 40px;
  text-align: center;
  background: rgba(0,0,0,.5);
}
</style>