<template>
  <div class="sidebar">
    
    <div class="cover" @click="close" :class="{'coverhid':!flag}"></div>
    <div class="bar " :class="{'close':flag}">
            <div class="bg">            
               <img src="http://p.qq181.com/cms/1210/2012100413195471481.jpg"/>
                <div class="information">
                    <div class="info">
                         <span class="name">碎梦无痕</span>
                        <span class="level">Lv：7</span>
                    </div>
                    <div class="sign"><span><i class="icon iconfont icon-iconfontcoin"></i></span>签到</div>
                </div>
            </div>
        <div class="uls">       
        <ul >
            <li v-for="(v,k) in uls1.info">
                <span class="icon"><i class="iconfont "  :class="uls1.icon[k]"></i></span>
                <p >{{uls1.info[k]}}</p>
                <span></span>
            </li>
        </ul>
        <span class="gray"></span>

        <ul >
            <li v-for="(v,k) in uls2.info">
                <span class="icon"><i class="iconfont "  :class="uls2.icon[k]"></i></span>
                <p >{{uls2.info[k]}}</p>
                <span></span>
            </li>
        </ul>
        <span class="gray"></span>

        <ul >
            <li v-for="(v,k) in uls2.info">
                <span class="icon"><i class="iconfont "  :class="uls2.icon[k]"></i></span>
                <p >{{uls2.info[k]}}</p>
                <span></span>
            </li>
        </ul>      
    

    <div class="bottom">
            <div class="butt-item">
                <i class="iconfont icon-yejianmoshi"></i>
                <p>夜间模式</p>
            </div>
            <div class="butt-item">
                <i class="iconfont icon-shezhi"></i>
                <p>设置</p>
            </div>
            <div class="butt-item">
                <i class="iconfont icon-tuichu"></i>
                <p>退出</p>
            </div>
        </div><!-- buttom  end -->
    </div><!--  -->

        
    
    </div>
</div>   
  
</template>

<script>
import {getperson} from "api/jsonpdata"
export default {
  props:['isclose'],
  data() {
    return { 
     
      uls1: {
        icon: ["icon-xiaoxi", "icon-huiyuan", "icon-shangcheng"],
        info: ["我的消息", "会员中心", "商城"]
      },
      uls2: {
        icon: ["icon-xiaoxi", "icon-huiyuan", "icon-shangcheng"],
        info: ["我的消息", "会员中心", "商城"]
      }
    };
  },
  created(){
    getperson().then((res)=>{
        if(res.code === 0){
          console.log(res)
        }
    })
  },
  computed:{
    flag(){
      return this.$store.state.showsidebar
    }
  },
  methods: {
    add() {
      console.log("sdf");
    },
    close(){     
      this.$store.commit("change")
    }
    
    /* close(isclose) { 
      this.flag = !isclose;
      console.log(isclose+"----")
      this.$emit("changeflag",isclose)
    } */
  }
};
</script>

<style lang="scss" scoped>
$sc: 25;

.cover {
  position: fixed;
  top: 0; 
  opacity: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.coverhid{
  opacity: 1;
  z-index: 999;
}

/* 左边栏导航 */
.close {
  left: -286/$sc+rem !important;
}
.bar {
  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  transition: all 0.5s ease-out;
  z-index: 9999;
  width: 286/$sc+rem;
  height: 100%;
  background: #fff;
  color: #ddd;
  padding-bottom: 40/$sc+rem;
  height: 100%;
  .bg {
    background-image: url(http://www.daiwei.org/index/images/img/indeximg.jpg);
    background-size: cover;
    width: 100%;
    height: 168/$sc+rem;
    position: relative;
    padding: 50/$sc+rem 15/$sc+rem 15/$sc+rem;
    img {
      margin-top: 20/$sc+rem;
      width: 50/$sc+rem;
      height: 50/$sc+rem;
      border-radius: 50%;
    }
    .information {
      width: 100%;
      height: 35/$sc+rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .info {
        display: flex;
        align-items: center;
        .name {
          margin-right: 5/$sc+rem;
          font-size: 0.6rem;
        }
        .level {
          padding: 3/$sc+rem;
          font-size: 0.4rem;
          border-radius: 12/$sc+rem;
          border: 1/$sc+rem solid #ddd;
          font-style: italic;
        }
      }
      .sign {
        display: flex;
        justify-content: space-around;
        border: 1/$sc+rem solid #eee;
        width: 55/$sc+rem;
        height: 25/$sc+rem;
        border-radius: 30/$sc+rem;
        font-size: 0.5rem;
        line-height: 25/$sc+rem;
        i {
          font-size: 0.3rem;
        }
      }
    }
  }
}

.gray {
  display: block;
  height: 5/$sc+rem;
  background-color: #ddd;
  width: 100%;
}
.uls {
  width: 100%;
  li {
    height: 40/$sc+rem;
    line-height: 40/$sc+rem;
    padding: 0 10/$sc+rem;
    display: flex;
    i {
      font-size: 20/$sc+rem;
    }
    p {
        font-size: 14/$sc+rem;
      margin-left: 10/$sc+rem;
      color: #333;
    }
  }
}

.bottom {
  width: 286/$sc+rem;
  position: fixed;
  bottom: 0;
    background: #fff;
  height: 40/$sc+rem;
  border-top: 1/$sc+rem solid #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16/$sc+rem;
  color: #333;
  .butt-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    i {
      font-size: 18/$sc+rem;
      color: #999;
    }
  }
}
</style>