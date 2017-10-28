<template>
  <transition name="container">
    <div class="container">
      <!-- header -->
      <div class="cover"></div>
      <div class="header">
          <div class="left">
              <router-link tag="i" to="/" class="iconfont icon-zuo" ></router-link>
              <p>歌单</p>
          </div>
          <div class="right">
              <i class="iconfont icon-tubiao17"></i>
              <i class="iconfont icon-gengduo"></i>
          </div>
      </div>
        <!-- img -->
      <div class="img">
          <div class="songpic">
            <img class="songimg"/>
            <div class="info">
              <p class="title">抖腿向</p>
              <div class="person">
                <img class="personimg" src="" alt="" />
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
      <div class="play">
        <div class="left">
          <i class=" iconfont icon-bofang"></i>
          <span class="main">全部播放</span>
          <span class="gray">(共30首)</span>
        </div>

        <div class="right">
          <i class="iconfont icon-caidan"></i>
          <span>多选</span>
        </div>
      </div>

      <!-- 列表 -->
      <ul>
        <li v-for="(v,k) in list"  @click="index(k)">
          <div class="index">
            <i class="iconfont icon-shengyin" v-show="(active==k)"></i>
            <span v-show="!(active==k)">{{k+1}}</span>
          </div>
          <div class="songlists">
            <div class="song">
              <p class="stitle">歌名歌名</p>
              <div class="down">
                <i class="iconfont icon-gou"></i>
                <p class="singer">演唱者</p>
              </div>            
            </div>
            <span class="more"><i class="iconfont icon-gengduo"></i></span>
          </div>         
        </li>
      </ul>

      <!-- mini播放器 -->
      <myfooter></myfooter>
      </div>
  </transition>

  
</template>

<script>
import myfooter from "@/base/footer"
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
  methods:{
    goback() {
      return this.$router.go(-1);
    },
    index(b){
      console.log("sdf")
      console.log(this.active,b)      
      if(this.active == b){

        //return this.$router.go('/songlist');
        window.location.href= "http://localhost:8088/#/player"      
      }
      this.active = b
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
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #efefef;
  font-size: 16/$s+rem;
  padding-bottom: 46/$s+rem;
}
.cover{
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 10;
  background: rgba(0,0,0,.5)
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
    background: green;
    padding: 70/$s+rem 25/$s+rem 20/$s+rem;
    @extend .flex;
    flex-direction: column;
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