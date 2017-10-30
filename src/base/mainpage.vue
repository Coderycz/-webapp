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
      lists: {},
      resl: {},
      list: {
        info: ['&#xe6cc;', ""]
      }
    }
  },
  created(){
    this._getsonglist()
  },
  methods:{
      _getsonglist(){
     var url = "https://u.y.qq.com/cgi-bin/musicu.fcg?data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22category%22%3A%7B%22method%22%3A%22get_hot_category%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22music.web_category_svr%22%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A8%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A8%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%2C%22new_song%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewSong%22%2C%22param%22%3A%7B%22type%22%3A0%7D%7D%2C%22new_album%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewAlbum%22%2C%22param%22%3A%7B%22type%22%3A0%2C%22category%22%3A%22-1%22%2C%22genre%22%3A0%2C%22year%22%3A1%2C%22company%22%3A-1%2C%22sort%22%3A1%2C%22start%22%3A0%2C%22end%22%3A39%7D%7D%2C%22toplist%22%3A%7B%22module%22%3A%22music.web_toplist_svr%22%2C%22method%22%3A%22get_toplist_index%22%2C%22param%22%3A%7B%7D%7D%2C%22focus%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetFocus%22%2C%22param%22%3A%7B%7D%7D%7D"
      this.$http.jsonp(url,{      
            callback: "recom17361411500470214"//callback=recom17361411500470214
          }).then(res=>{
             this.resl = res.body.recomPlaylist.data.v_hot
             console.log(this.resl)
          })
    },
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