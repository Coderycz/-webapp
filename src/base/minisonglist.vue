<template>
  <div class="sidebar">
    
    <div class="cover" @click="close" :class="{'coverhid':!flag}"></div>
    <div class="bar " :class="{'close':flag}">
        <div class="title">
            <div class="palytype" @touchstart="playtype">
                <i class="iconfont icon-liebiaoxunhuan" :class="playtype1[typenum]" ></i>
                <span class="typename">{{describing[typenum]}}</span>
                <span>({{minilist.length}})</span>
            </div>
            <div class="right">
                <div>
                    <i class="iconfont icon-wenjianjia"></i>
                    <span>收藏</span>
                </div>
                <div>
                    <i class="iconfont icon-icon-text-fn-delete"></i>
                    <span>清空</span>
                </div>               
            </div>
        </div> 

       
            <ul class="songlist">
                <li v-for="(v,k) in minilist" @click="index(k,v)">
                    <div>
                        <i class="iconfont icon-shengyin red"  v-show="key == k"></i>
                        <span class="songname">{{v.album.name}}</span> - 
                        <span class="singer">{{v.author[0].title}}</span>
                    </div>                    
                    <i class="iconfont icon-chuyidong"></i>
                </li>
            </ul>       
    </div> 
</div>  
  
</template>

<script>
export default {
  props:['isclose'],
  data() {
    return { 
     
    };
  },
  created(){
      console.log()
  },
  computed:{
      key(){
          return this.$store.state.nowplay.key
      },
      minilist(){
          return this.$store.state.songlist
      },
      typenum(){
      return this.$store.state.typenum
    },
    playtype1(){
      return this.$store.state.type
    },
    describing(){
      return this.$store.state.describing
    },

    flag(){
      return this.$store.state.showminilist
    }
  },
  methods: {
      playtype(){
           this.$store.commit("changetype")
      },
    add() {
      console.log("sdf");
    },
    close(){     
      this.$store.commit("changemini")
    } ,
    index(k,v){    
        var imgindex =  Math.round(Math.random()*this.$store.state.resl.length)

      this.$store.commit('changenowplaysongname',v.album.name) 
      this.$store.commit('changenowplaysinger',v.author[0].title) 
      this.$store.commit('changenowplayid',v.album.mid) 
      this.$store.commit('changenowplaykey',k) 
      this.$store.commit('changenowplayimg',this.$store.state.resl[imgindex])
    }
  }
};
</script>

<style lang="scss" scoped>
$sc: 25;

.cover {
  position: fixed;
  bottom: 0; 
  opacity: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.coverhid{
  opacity: 1;
  z-index: 9998;
}

/* 下面mini歌单 */
.close {
  bottom: -320/$sc+rem !important;
}
.bar {
  position: fixed;
  left: 0;
  bottom: 0;
  overflow: auto;
  transition: all 0.3s ease-out;
  z-index: 9999;
  width: 100%;
  height: 320/$sc+rem;
  background: #fff;
  color: #ddd;
  padding-bottom: 40/$sc+rem; 
}

.flex{
    display: flex;
    justify-content: space-between;
}
i{
    font-size: 16/$sc+rem;
}
.title{
    @extend .flex;
    height: 50/$sc+rem;
    width: 100%;
    color: #2c3e50;
    padding: 0 15/$sc+rem;
    font-size: 14/$sc+rem;
    border-bottom: 1/$sc+rem solid rgba(7,17,27,.1);
    .palytype{
        line-height: 50/$sc+rem;
    }
    .right{
        @extend .flex;
        line-height: 50/$sc+rem;
        div{
            margin-left: 30/$sc+rem;
        }
    }


}

.songlist{
    //@extend .flex;
    padding: 0 15/$sc+rem;
    color: #2c3e50;
    li{
        height: 42/$sc+rem;
        width: 100%;
        @extend .flex;
        flex-wrap: wrap;
        align-items: center;
        border-bottom: 1/$sc+rem solid rgba(7,17,27,.1);
        div{
            height: 42/$sc+rem;
        line-height: 42/$sc+rem;
        }
        .red{
            font-size: 14/$sc+rem;
            color: red;
        }
        .songname{
            font-size: 14/$sc+rem
        }
        .singer{
            font-size: 12/$sc+rem;
            color: #999;
        }
    }

}

</style>