<template>
<!-- 下面mini菜单 -->
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
                <div @touchend="clear">
                    <i class="iconfont icon-icon-text-fn-delete"></i>
                    <span>清空</span>
                </div>               
            </div>
        </div> 

       
            <ul class="songlist">
                <li v-for="(v,k) in minilist" @click="index(k,v)">
                    <div :class="{'redtext':key == k && isplay}">
                        <i class="iconfont icon-shengyin red"  v-show="key == k && isplay"></i>
                        <span class="songname">{{v.album.name}}</span> - 
                        <span class="singer">{{v.author[0].title}}</span>
                    </div>                    
                    <i class="iconfont icon-chuyidong del" @click.stop="del(k)"></i>
                </li>
            </ul>       
    </div> 
</div>  
  
</template>

<script>

var audio = document.querySelector("audio");
export default {
  props:['isclose'],
  data() {
    return { 
     
    };
  },
  created(){    
  },
  computed:{
      isplay(){
          return this.$store.state.isplay
      },
      key(){
          var songname = this.$store.state.nowplay.name
          var arr = []
          for(var i = 0; i<this.$store.state.minisonglist.length; i++){
            arr.push(this.$store.state.minisonglist[i].album.name)
          }  
          this.$store.commit('changenowplayminikey',arr.indexOf(songname))
         //console.log(songname,)         
         return arr.indexOf(songname)
         //return this.$store.state.nowplay.minikey
      },
      minilist(){
          return this.$store.state.minisonglist
      },
      typenum(){
      return this.$store.state.typenum
    },
    songlist(){
        return this.$store.state.minisonglist
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
      /* 检测播放列表是否已空 */
      testmini(){
          if(this.$store.state.minisonglist.length == 0 ){
                  this.$store.commit('changemini')              /* mini播放列表 */
                  this.$store.commit('changeminiplayer',false)  /* mini播放器 */
                  //console.log(this.$store.state.isplay)
                  this.$store.commit('changeplay')              /* 停止播放器 */
                  audio.currentTime = 0;
                  audio.pause();
                  //console.log(this.$store.state.isplay)
                  //console.log(this.$store.state.minisonglist.length)
                  this.$router.push('/songlist')                /* 跳转到歌单列表 */
                  return 
              }
      },
      clear(){
          var list = this.$store.state.minisonglist
          var arr1 = list.slice(0,0)
          this.$store.commit('initminisonglist',[])
          this.testmini()      
      },
      del(k){       
          var list = this.$store.state.minisonglist
          var arr1 = list.slice(0,k)
          var arr2 = list.slice(k+1)  
          this.$store.commit('initminisonglist',arr1.concat(arr2)) 
          var oldkey = this.$store.state.nowplay.minikey
          if(oldkey > k)  {
              this.$store.commit('changenowplayminikey',oldkey-1)
          }
          if(oldkey == k){
              this.testmini()
              this.target()
              /* 根据歌名找到索引 */
              var songname = this.$store.state.nowplay.name
                var arr = []
                for(var i = 0; i<this.$store.state.minisonglist.length; i++){
                    arr.push(this.$store.state.minisonglist[i].album.name)
                } 
         //console.log(songname, ) 
                this.$store.commit('changenowplayminikey',arr.indexOf(songname))           
          }
          //console.log(this.$store.state.songlist)
      },
      playtype(){
           this.$store.commit("changetype")
      },
    add() {
      
    },
    close(){     
      this.$store.commit("changemini")
    },
    target(){  /* 切换歌曲 */     
      var type = this.typenum
      var num = 0                           
      if(type==1){                          /* 列表循环 */
          num = 1                           /* 下一曲 */
      }else if(type==0){                    /* 随机播放 */
        num = Math.round(Math.random()*this.songlist.length)
      }else if(type == 2){                  /* 单曲循环 */
        audio.currentTime = 0;
        audio.play()
        if(!this.$store.state.isplay){
          this.$store.commit("changeplay") 
        }
        return 
      }
      //var imgindex = Math.round(Math.random()*this.$store.state.resl.length)
      var nextsong = this.key+num>this.songlist.length-1 ? this.key+num-this.songlist.length :
                     this.key+num < 0 ? this.key+num+this.songlist.length : this.key+num
    
     var songinfo = this.songlist[nextsong] 
      var imgindex = nextsong%this.$store.state.resl.length     
      this.$store.commit('changenowplaysongname',songinfo.album.name) 
      this.$store.commit('changenowplaysinger',songinfo.author[0].title) 
      this.$store.commit('changenowplayid',songinfo.album.mid) 
      this.$store.commit('changenowplayimg',this.$store.state.resl[imgindex])
      this.$store.commit('changenowplayminikey',this.key) 
      //console.log(nextsong,this.$store.state.resl.length ,this.$store.state.resl[imgindex]) 
      audio.currentTime = 0;
      audio.play()
      if(!this.$store.state.isplay){
         this.$store.commit("changeplay") 
      }      
    },
    index(k,v){    
      var imgindex =  Math.round(Math.random()*(this.$store.state.resl.length-1))
      this.$store.commit('changenowplaysongname',v.album.name) 
      this.$store.commit('changenowplaysinger',v.author[0].title) 
      this.$store.commit('changenowplayid',v.album.mid) 
      this.$store.commit('changenowplayminikey',k)
      this.$store.commit('changenowplayimg',this.$store.state.resl[imgindex])
      audio.currentTime = 0;
      audio.play() 
      //console.log(imgindex,this.$store.state.nowplay.minikey)
      if(!this.$store.state.isplay){
         this.$store.commit("changeplay") 
      }
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
    background: #fff;
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
        .redtext{
            color: red!important;
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
        .del{
            width: 42/$sc+rem;
            height: 42/$sc+rem;
            position: -15/$sc+rem;
            line-height: 42/$sc+rem;
            text-align: center;
        }
    }

}

</style>