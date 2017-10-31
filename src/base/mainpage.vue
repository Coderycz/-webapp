<template>   
    <div class="my-body">
        <div class="container">
       <div class="up">
           <!-- 主页上面四格 -->
           <div class="up-item" >     
               <span class="left item-i"><i class="iconfont ">&#xe680;</i></span>
               <div class="con">     
                    <div class="item-content">
                        <span>本地音乐</span>
                        <span class="item-num">(297)</span>
                    </div>
                    <span class="item-i "><i class="iconfont red">&#xe6cc;</i></span>
               </div>               
           </div>

           <div class="up-item">     
               <span class="left item-i"><i class="iconfont ">&#xe680;</i></span>
               <div class="con">     
                    <div class="item-content">
                        <span>本地音乐</span>
                        <span class="item-num">(297)</span>
                    </div>
                    <span class="item-i "><i class="iconfont red" v-show="flag">&#xe6cc;</i></span>
               </div>               
           </div>

           <div class="up-item">     
               <span class="left item-i"><i :class="{'iconfont':true}">&#xe680;</i></span>
               <div class="con">     
                    <div class="item-content">
                        <span>本地音乐</span>
                        <span class="item-num">(297)</span>
                    </div>
                    <span class="item-i "><i class="iconfont red" v-show="flag">&#xe6cc;</i></span>
               </div>               
           </div>

           <div class="up-item">     
               <span class="left item-i"><i class="iconfont ">&#xe680;</i></span>
               <div class="con">     
                    <div class="item-content">
                        <span>本地音乐</span>
                        <span class="item-num">(297)</span>
                    </div>
                    <span class="item-i "><i class="iconfont red" v-show="flag">&#xe6cc;</i></span>
               </div>               
           </div>
       </div>
<!-- 下歌单 -->
<my-songlist :res="resl" listname="创建的歌单"></my-songlist>
<my-songlist :res="resl" listname="收藏的歌单"></my-songlist>
    
    </div>
    </div>
</template>

<script>
import mySonglist from "./songlist.vue"
import "common/style/layout.css";
import {data} from "@/assets/js/data";
export default {
  prop: ["sdf"],
  data() {
    return {
      flag: false,
    }
  },
  computed:{
      resl(){
        return this.$store.state.initlist
      }     
  },
  created(){
      console.log(this.resl)
  },
 
  components: {
      mySonglist
  }
};
</script>

<style lang="scss"  scoped>
$sc: 25;

.container{
    width: 100%;
    overflow-y: auto;
    margin-top: 2rem;
    margin-bottom: 46/$sc+rem;
}
.up-item {
  //color: 
  background: #f7f7f7;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  .con {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 100%;
    line-height: 2rem;
    font-size: 14/$sc+rem;
    border-bottom: 1px solid #ddd;
  }
  .item-i {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    i {
      font-size: 0.8rem !important;
      color: #c62f2f;
    }
    .red {
      font-size: 0.5rem !important;
    }
  }
}
.item-num {
  color: #aaa;
}

</style>