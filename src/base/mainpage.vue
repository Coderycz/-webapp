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
       <div class="title">
           <div class="down-item" @click="changshow">              
                    <span class="fl licon icons"><i class="iconfont">&#xe63b;</i></span>
                    <div class="fl lname">
                        <span class="">创建的歌单</span>
                        <span class="">(5)</span>
                    </div>              
               <span class="fr ricon icons"><i class="iconfont">&#xe611;</i></span>
           </div>
           <my-songlist v-show="showsonglist"></my-songlist>
           <div class="down-item" @click="changshow">              
                    <span class="fl licon icons"><i class="iconfont">&#xe63b;</i></span>
                    <div class="fl lname">
                        <span class="">创建的歌单</span>
                        <span class="">(5)</span>
                    </div>              
               <span class="fr ricon icons"><i class="iconfont">&#xe611;</i></span>
           </div>
           <my-songlist v-show="showsonglist"></my-songlist>
           <div class="down-item" @click="changshow">              
                    <span class="fl licon icons"><i class="iconfont">&#xe63b;</i></span>
                    <div class="fl lname">
                        <span class="">创建的歌单</span>
                        <span class="">(5)</span>
                    </div>              
               <span class="fr ricon icons"><i class="iconfont">&#xe611;</i></span>
           </div>
           <my-songlist v-show="showsonglist"></my-songlist>
       </div>
    </div>
    </div>
</template>

<script>
import mySonglist from "./songlist.vue"
import "common/style/layout.css";
export default {
  prop: ["sdf"],
  data() {
    return {
      flag: false,
      showsonglist: false,
      list: {
        info: ["&#xe6cc;", ""]
      }
    }
  },
  methods:{
      changshow(){
          this.showsonglist = !this.showsonglist
      }
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
   // height: 100%;
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
.title{
    width: 100%;
    height: 30/$sc+rem;
    color: #666;
    background: #e1e1e1;
    text-align: center;
    line-height: 30/$sc+rem;
    .licon{
        font-size: 14/$sc+rem;
        width: 35/$sc+rem;
        height: 30/$sc+rem;      
    }
    .lname{
        font-size: 12/$sc+rem;
    }
    
    .ricon{ 
        font-size: 14/$sc+rem;      
        width: 40/$sc+rem;        
    }
    .icons i{
        font-size: 14/$sc+rem!important;
    }
}
.down-item:after{
    content: '';
    display: block;
    clear: both;
}
.down-item{
    *zoom: 1
}
</style>