<template>
  <transition name="container"  @scroll="scrollEvent">
    <div class="container" :class="{'hidminiplayer':this.$store.state.showminiplayer}">
      <!-- header -->
      <div class="cover" ref="songsheet" :style="{backgroundImage:'url('+cover+')'}"></div>
      <div class="header" ref="songheader">
          <div class="left">
              <router-link tag="i" to="/" class="iconfont icon-zuo" ></router-link>
              <p>歌单</p>
          </div>
          <div class="right">
              <router-link tag="i" to="/search" class="iconfont icon-tubiao17" ></router-link>            
              <i class="iconfont icon-gengduo"></i>
          </div>
      </div>
        <!-- img -->
      <div class="img" ref="top" :style="{backgroundImage:'url('+cover+')'}">
        <!-- background-image: url('http://p.qq181.com/cms/1210/2012100413195471481.jpg'); :style="{'background-image'}" -->
          <div class="songpic">
            <img :src="cover" class="songimg"/>
            <div class="info">
              <p class="title">{{title}}</p>
              <div class="person">
                <img class="personimg" src="http://p.qq181.com/cms/1210/2012100413195471481.jpg" alt="" />
                <span>碎梦无痕</span>
                <i class="iconfont icon-xiala"></i>
              </div>
            </div>
          </div>
          <div class="icon">
            <div>
              <i class="iconfont icon-wenjianjia"></i>
              <span>收藏</span>
            </div>
            <div>
              <i class="iconfont icon-xinxi"></i>
              <span>评论</span>
            </div>
            <div>
              <i class="iconfont icon-fenxiang"></i>
              <span>分享</span>
            </div>
            <div>
              <i class="iconfont icon-xiazai"></i>
              <span>下载</span>
            </div>
            
          </div>
      </div>

      <!-- 播放全部 -->
      <div class="play"  >
        <div class="left">
          <i class=" iconfont icon-bofang"></i>
          <span class="main">全部播放</span>
          <span class="gray">(共{{lists.length}}首)</span>
        </div>

        <div class="right">
          <i class="iconfont icon-caidan"></i>
          <span>多选</span>
        </div>
      </div>

      <!-- 列表 -->
      <ul>
        <li v-for="(v,k) in lists"  @click="index(k,v)">
          <div class="index">
            <i class="iconfont icon-shengyin" v-show="(key==k) && isplay "></i>
            <span v-show="!(key==k) || !isplay">{{k+1}}</span>
          </div>
          <div class="songlists">
            <div class="song">
              <p class="stitle">{{v.album.name}}</p>
              <div class="down">
                <i class="iconfont icon-gou"></i>
                <p class="singer">{{v.author[0].title}}</p>
              </div>            
            </div>
            <span class="more"><i class="iconfont icon-gengduo"></i></span>
          </div>         
        </li>
      </ul>

      </div>
  </transition> 
</template>

<script>
import myfooter from "@/base/footer"
var audio = document.querySelector('audio')
export default {
  data(){
    return{
      url: "/songlist",
      active: -1,
      list:['fa',"sdf",'dfdfdf','dfdfdf',"sdf",'dfdfdf','dfdfdf',"sdf",'dfdfdf',"sdf",'dfdfdf',"sdf",'dfdfdf',"sdf",'dfdfdf']
    }
  },
  components:{
    myfooter

  },

  created(){
    //this.getpersonlist()
  }, 
  computed:{
    isplay(){
      return this.$store.state.isplay
    },
    key(){
         var songname = this.$store.state.nowplay.name
          var arr = []
          for(var i = 0; i<this.$store.state.songlist.length; i++){
            arr.push(this.$store.state.songlist[i].album.name)
          }  
         //console.log(songname, )         
         return arr.indexOf(songname)         
      },
    cover(){
      return this.$store.state.songlistheader.cover
    },
    title(){
      return this.$store.state.songlistheader.title
    },
    lists(){      
      return this.$store.state.songlist
    }
  },
  methods:{
    scrollEvent(){
     // console.log('sdfsd')
    },
    /* scrollEvent () {
      console.log(this.$refs.songsheet.scrollTop,this.$refs.top.offsetHeight)
				// alert(this.$refs.songsheet.scrollTop)
				let opacity = this.$refs.songsheet.scrollTop / (this.$refs.top.offsetHeight - this.$refs.songheader.offsetHeight)
				if (this.$refs.songsheet.scrollTop < this.$refs.top.offsetHeight - this.$refs.songheader.offsetHeight) {
					this.$refs.songheader.style.opacity = opacity
					this.$refs.songheader.style.filter = `alpha(opacity:${opacity * 100})`
				} else {
					this.$refs.songheader.style.opacity = 1
					this.$refs.songheader.style.filter = `alpha(opacity:${100})`
				}
			}, */
    goback() {
      return this.$router.go(-1);
    },
    index(k,v){           /* 将点击的歌曲传入仓库 */
      if(this.key == k){    
      var buttontime = new Date()
      this.$store.commit('changeplaytime',buttontime.getTime())
      this.$store.commit('changeminiplayer',false)   
        return this.$router.push('/player')          
      }
      var imgindex =  Math.round(Math.random()*(this.$store.state.resl.length-1))
      this.$store.commit('changenowplaysongname',v.album.name) 
      this.$store.commit('changenowplaysinger',v.author[0].title) 
      this.$store.commit('changenowplayid',v.album.mid) 
      this.$store.commit('changenowplaykey',k) 
      this.$store.commit('changenowplayimg',this.$store.state.resl[imgindex])
      audio.currentTime = 0;
      audio.play() 
      if(!this.$store.state.isplay){
         this.$store.commit("changeplay") 
      }
      /* 更新mini播放列表 */
      this.$store.commit('initminisonglist',this.$store.state.songlist)
      this.$store.commit('changeminiplayer',true)    
    }
  }
};
</script>

<style lang="scss" scoped>
$s : 25;
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@mixin i($plx: 50/$s+rem) {
  height: $plx;
  text-align: center;
  line-height: $plx;
  display: inline-block;
}

.container-enter-to,.container-leave-to{
  transition: all 0.3s
}			
.container-enter{
      
			transform:translate3d(0,100%,0);
			opacity: 0}
.container-leave-to{
			transform:translate3d(100%,0,0);
			opacity: 0} 


.container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #efefef;
  font-size: 16/$s+rem;

}
.hidminiplayer{
  padding-bottom: 46/$s+rem;
}
.cover{
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 10;
  background-size: 3000%;
  background-position: center center;
}
.header {
  position: fixed;
  top: 0;
  z-index: 20;
  @extend .flex;
  color: #ddd;
  width: 100%;
  // background: rgba(0,0,0,.5);
  .left {
    @extend .flex;
    i {     
      width: 50/$s+rem;
      @include i;
      margin-right: 10/$s+rem;
    }
  }
  .right {
    i{
      @include i;
      width: 50/$s+rem;
    }
  }
}

.img{
  color: #ddd;
  width: 100%;
    height: 245/$s+rem;
    background-size: 3000%;
    background-position: center center;

   // background: rgba(0,0,0,.3);
    padding: 70/$s+rem 25/$s+rem 20/$s+rem;
    @extend .flex;
    flex-direction: column;
    color: #fff;
    .songpic{
      width: 100%;
      height: 100/$s+rem;
      @extend .flex;
      align-items: start;
      .songimg{
        height: 100/$s+rem;
        width: 100/$s+rem;
      }
      .info{
        width: 100%;
        
        margin-left: 12/$s+rem;
        flex: 1;
        height: 100/$s+rem;
        .title{
          margin: 10/$s+rem 0 20/$s+rem;
        }
        .person{         
          @extend .flex;
          justify-content: start;
          .personimg{
            width: 20/$s+rem;
            height: 20/$s+rem;
            border-radius:50%;
          }
          span{
            margin: 0 5/$s+rem
          }
          i{
            font-size: 14/$s+rem;
          }
        }
      }
    }
    .icon{
      width: 100%;
      padding: 0 10/$s+rem;
      @extend .flex;
      div{
        @extend .flex;
        flex-direction: column;
        i{
          font-size: 16/$s+rem;
        }
        span{
          margin-top: 5/$s+rem;
        }
      }
    }
}

.play{
  @extend .flex;
  height: 40/$s+rem;
  font-size: 16/$s+rem;
  border-bottom: 1/$s+rem solid #ddd;
  .left{
     @extend .flex;
     i{
       font-size: 16/$s+rem;
     }
     .main{
      color: #222;
    }
    .gray{
      color: #999;
    }
     i{
      display: inline-block;
      width: 50/$s+rem;
      @include i(40/$s+rem);
    }
  }
  .right{
    padding-right: 10/$s+rem;
    font-size: 14/$s+rem;
    i{
      font-size: 14/$s+rem;
    }
    
  }
 
  
}


ul{
  li{
    @extend .flex;
    height: 50/$s+rem;
    width: 100%;
    .index{
      width: 50/$s+rem;
      @include i;
      display: block;
      i{
        font-size: 14/$s+rem;
        color: red;
      }
      span{
        color: #999;
      }
    }
    .songlists{
      height: 50/$s+rem;
      flex: 1;
      @extend .flex;
      border-bottom: 1/$s+rem solid #ddd;
      .song{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 5/$s+rem 0;
        height: 50/$s+rem;
        .stitle{
          font-size: 16/$s+rem;
        }
        .down{
          @extend .flex;
          justify-content: start;
          i{
            font-size: 12/$s+rem;
            margin-right: 5/$s+rem;
            color: blue;
          }
          .singer{
          font-size: 12/$s+rem;
          color: #999;
        }

        }
        
      }
      .more{
      width: 50/$s+rem;
      @include i;
      i{
        font-size: 14/$s+rem;        
      }     
    }

    }

    
  }
}
</style>