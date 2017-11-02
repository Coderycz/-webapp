<template>   
    <div class="my-footer">
        <div class="container">
          <router-link tag="div" to="/player" class="y-footer" @click.native="playtime">
            <div class="leftinfo">
                <img :src="this.$store.state.nowplay.img" alt="">
                <div class="songname">
                    <p class="name">{{nowplay.name}}</p>
                    <p class="singer">{{nowplay.singer}}</p>
                </div>
            </div>
            <div class="rightmenu">               
                <span @click.stop="playmu"><i class="iconfont" :class="isplayicon"></i></span>                
                <span @click.stop="showmini"><i class="iconfont">&#xe604;</i></span>            
            </div>           
        </router-link>
    </div>
    </div>
</template>

<script>
import "common/style/layout.css";
import {play} from "api/audio.js"
export default {
  data(){
    return {
    }
  },
  components: {},
  computed:{
    nowplay(){          /* 正在播放的歌曲信息 */
      return this.$store.state.nowplay
    },
    isPlaying(){
      return this.$store.state.isplay
    },
    isplayicon(){       /* 是否播放 */
      return this.$store.state.isplay?"icon-zanting":"icon-bofang"
    }
  },
  methods:{
    showmini(){
     this.$store.commit("changemini")
    },
    playmu(){
      var audio =document.querySelector('audio');
        if(!this.isPlaying){
            audio.play();                  
        }else{
          audio.pause();
        }
        this.$store.commit("changeplay")
    },
    playtime(){
      var buttontime = new Date()
      this.$store.commit('changeplaytime',buttontime.getTime())
    }
  }
};
</script>

<style lang="scss"  scoped>
$sc: 25;

.container {
  background: #fff;
  height: 46/$sc+rem;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.y-footer {
  padding: 5/$sc+rem;
  height: 46/$sc+rem;
  .leftinfo {
    float: left;
    display: flex;
    img {
      width: 36/$sc+rem;
      height: 36/$sc+rem;
      margin-right: 5/$sc+rem;
    }
    .songname {
      float: left;
      p {
        height: 18/$sc+rem;
        font-size: 14/$sc+rem;
        line-height: 14/$sc+rem;
        font-weight: 400;
        color: #333;
        padding: 2/$sc+rem 0;
      }
    }
  }
  .rightmenu {
    float: right;
    span {
      display: inline-block;
      margin-left: 10/$sc+rem;
      height: 36/$sc+rem;
      width: 36/$sc+rem;
      line-height: 36/$sc+rem;
      text-align: center;
    }
    i {
      font-size: 30/$sc+rem;
      width: 36/$sc+rem;
      height: 36/$sc+rem;
    }
  }
}
</style>