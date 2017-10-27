<template>
    <div class="cd" >
        <div class="line">
            <div class="pointer " :class="{'pause':!isplay}">
            </div>
        </div>
        
        <div class="cdpic" :class="{'test1':isplay}">
            <img src="http://oiq8j9er1.bkt.clouddn.com/music_qingnianwanbao.jpg"/>
        </div>
        <div class="like-container">
            <div class="like">
                <i class="iconfont" @click.stop="changelike" :class="{'icon-like':islike,'icon-xihuan':!islike,'red':!islike}"></i>
            <i class="iconfont icon-xiazai" @click.stop=""></i>
            <span class="pinlun" @click.stop=""><i class="iconfont icon-xinxi"></i><span class="num">999+</span></span>
            
            <i class="iconfont icon-gengduo" @click.stop=""></i>
            </div>     
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            islike: true
        }
    },
    warch:{
      
    },
    methods:{
        changelike(){     
        this.islike = !this.islike
       },   
    },
    computed:{
      isplay(){
        return this.$store.state.isplay
      }
    }
    
};
</script>

<style scoped lang="scss">
$sc: 25;
.cd {
  position: absolute;
  top: 66/$sc+rem;
  left: 0;
  bottom: 120/$sc+rem;
  right: 0;
  overflow: hidden;
}
.line {
  width: 80%;
  height: 1/$sc+rem;
  background-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.8),
    rgba(0, 0, 0, 0)
  );
  margin: 0 auto;
  .pointer {
    position: absolute;
    top: -14/$sc+rem;
    left: 50%;
    -webkit-transform: translate3d(-16/$sc+rem, 0, 0);
    transform: translate3d(-16/$sc+rem, 0, 0);
    width: 13.5vh;
    height: 21vh;
    background-image: url("../../assets/images/swith.png");
    background-size: cover;
    -webkit-transform-origin: 14/$sc+rem 16/$sc+rem;
    transform-origin: 14/$sc+rem 16/$sc+rem;
    transition: all 0.3s ease-out;
    z-index: 5;
  }
  .pause {
    transform: translate3d(-16/$sc+rem, 0, 0) rotate(-30deg);
  }
}

/* cd盘用vh实现百分比宽高 */
@-webkit-keyframes skyset {
    0% { transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
}
.test1 {
  animation: skyset 16s linear infinite .1s; 
} 

.cdpic {
  width: 44vh;
  height: 44vh;
  position: relative;
  margin: 0 auto;
  margin-top: 8vh;
  background: url("../../assets/images/cd-mine.png");
  background-size: cover;
  img {
    position: absolute;
    display: block;
    width: 28vh;
    height: 28vh;
    top: 8vh;
    transition: all 0.3s;
    left: 50%;
    border-radius: 50%;
    transform: translate3d(-50%, 0, 0);
    z-index: 1;
  }
}

.like-container {
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 15%;
  i {
    
    font-size: 20/$sc+rem;
    &.red{
        color: red
    }
  }
}
.like {
  // background: #fff
 height: 50px;
 line-height: 50px;
  color: #aaa;
  display: flex;
  width: 100%;
  justify-content: space-around;
  .pinlun {
    position: relative;
    .num {
      position: absolute;
      top: -4/$sc+rem;
      left: 12/$sc+rem;
      font-size: 12/$sc+rem;
      z-index: 20;
    }
  }
}
</style>