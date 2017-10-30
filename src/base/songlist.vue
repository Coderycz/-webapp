<template>   
    <div class="my-songlist">
        <div class="down-item" @click="changshow">              
                    <span class="fl licon icons" :class="{'deg':deg}"><i :class="{'iconfont':true,}">&#xe63b;</i></span>
                    <div class="fl lname">
                        <span class="">{{listname}}</span>
                        <span class="">({{res.length}})</span>
                    </div>              
               <span class="fr ricon icons"><i class="iconfont">&#xe611;</i></span>
           </div>
        <ul v-show="showsonglist">
            <router-link tag="li"   v-for="(v,k) in res" to="/songlist" :class="{'y-footer':true}" @touchstart.native="nowplay(v)">              
                <div class="leftinfo">
                    <img :src="v.cover" alt="">                 
                </div>
                <div :class="{'rightmenu':true,'bordernone': k==createdlist.length-1}">
                    <div class="songname">
                        <p class="name">{{v.title}}</p>
                        <p class="gou"><i class="iconfont">&#xe615;</i>221首，已下载180首</p>
                    </div>                                  
                    <span><i class="iconfont">&#xe613;</i></span>
                </div>                         
            </router-link>            
        </ul>
    </div>
</template>

<script>

import {getRecommend,getDiscList} from "api/jsonpdata"
export default {
  props:['listname','res'],
  data() {
    return {
        showsonglist: false,
        deg:false,
        createdlist:[],    
        lists: ["sdfsdf","sdfsdfsdfsdfsd"],
    };
  }, 
  computed:{
    
  },
  methods: {
    nowplay(v){
      this.$store.commit('nowplaylistcover',v.cover)
      this.$store.commit('nowplaylisttitle',v.title) 
    },
    changshow() {
      this.showsonglist = !this.showsonglist;
      this.deg = !this.deg
      console.log(this.deg)
    },  
  },
  components: {}
};
</script>

<style lang="scss"  scoped>
$sc: 25;
.y-footer {
  background: #f7f7f7;
  height: 60/$sc+rem;
  width: 100%;
  z-index: 10;
  display: flex;
  .leftinfo {
    img {
      width: 50/$sc+rem;
      height: 50/$sc+rem;
      margin: 5/$sc+rem;
    }
  }
  .rightmenu {
    flex: 1;
    margin-left: 10/$sc+rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    .songname {
      flex: 1;
      .gou i {
        font-size: 14/$sc+rem !important;
      }
      p {
         overflow: hidden; 
         text-overflow:ellipsis; 
         white-space: nowrap;
         width: 50vw;
        height: 25/$sc+rem;
        font-size: 14/$sc+rem;
        line-height: 22/$sc+rem;
        font-weight: 400;
        text-align: left;
        color: #333;
        //  margin-top: 5px;
        padding: 2/$sc+rem 0;
      }
    }
    span {
      margin-left: 10/$sc+rem;
      height: 40/$sc+rem;
      width: 40/$sc+rem;
      line-height: 40/$sc+rem;
      text-align: center;
    }
    i {
      font-size: 20/$sc+rem;
    }
  }
}

.down-item {
  width: 100%;
  height: 30/$sc+rem;
  color: #666;
  background: rgba(0,0,0,.1);
  text-align: center;
  line-height: 30/$sc+rem;
  .licon {
    font-size: 14/$sc+rem;
    width: 35/$sc+rem;
    height: 30/$sc+rem;
    transition: all 0.3s;
  }
  .lname {
    font-size: 12/$sc+rem;
  }

  .ricon {
    font-size: 14/$sc+rem;
    width: 40/$sc+rem;
  }
  .icons i {
    font-size: 14/$sc+rem !important;
  }
}
.down-item:after ,.down-item:before{
  content: "";
  display: block;
  clear: both;
}
.down-item {
  *zoom: 1;
}
.bordernone{
   border-bottom: 0px!important;
}

.deg{
    transform: rotate(90deg)
}
</style>