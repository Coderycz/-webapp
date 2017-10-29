<template>   
    <div class="my-songlist">
        <div class="down-item" @click="changshow">              
                    <span class="fl licon icons" :class="{'deg':deg}"><i :class="{'iconfont':true,}">&#xe63b;</i></span>
                    <div class="fl lname">
                        <span class="">创建的歌单</span>
                        <span class="">(5)</span>
                    </div>              
               <span class="fr ricon icons"><i class="iconfont">&#xe611;</i></span>
           </div>
        <ul v-show="showsonglist">
            <router-link tag="li"  v-for="(v,k) in resl" to="/songlist" :class="{'y-footer':true}" @touchstart.native="">              
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
  data() {
    return {
        showsonglist: false,
        deg:false,
        createdlist:[],
        resl: [],
        lists: ["sdfsdf","sdfsdfsdfsdfsd"]
    };
  },
  created(){
    this._getsonglist()
 
  },
  methods: {
    senddissid(num){
      this.$store.commit('changedissid',num)
    },
    _getlist(){
      /* "https://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg?songmid="+v.musicData.songmid+"&format=jsonp"
    'callback':'getOneSongInfoCallback'  
   souye https://u.y.qq.com/cgi-bin/musicu.fcg?data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22category%22%3A%7B%22method%22%3A%22get_hot_category%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22music.web_category_svr%22%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A8%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A8%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%2C%22new_song%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewSong%22%2C%22param%22%3A%7B%22type%22%3A0%7D%7D%2C%22new_album%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewAlbum%22%2C%22param%22%3A%7B%22type%22%3A0%2C%22category%22%3A%22-1%22%2C%22genre%22%3A0%2C%22year%22%3A1%2C%22company%22%3A-1%2C%22sort%22%3A1%2C%22start%22%3A0%2C%22end%22%3A39%7D%7D%2C%22toplist%22%3A%7B%22module%22%3A%22music.web_toplist_svr%22%2C%22method%22%3A%22get_toplist_index%22%2C%22param%22%3A%7B%7D%7D%2C%22focus%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetFocus%22%2C%22param%22%3A%7B%7D%7D%7D
      https://u.y.qq.com/cgi-bin/musicu.fcg?callback=recom17361411500470214&g_tk=676735114&jsonpCallback=recom17361411500470214&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22category%22%3A%7B%22method%22%3A%22get_hot_category%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22music.web_category_svr%22%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A8%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A8%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%2C%22new_song%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewSong%22%2C%22param%22%3A%7B%22type%22%3A0%7D%7D%2C%22new_album%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewAlbum%22%2C%22param%22%3A%7B%22type%22%3A0%2C%22category%22%3A%22-1%22%2C%22genre%22%3A0%2C%22year%22%3A1%2C%22company%22%3A-1%2C%22sort%22%3A1%2C%22start%22%3A0%2C%22end%22%3A39%7D%7D%2C%22toplist%22%3A%7B%22module%22%3A%22music.web_toplist_svr%22%2C%22method%22%3A%22get_toplist_index%22%2C%22param%22%3A%7B%7D%7D%2C%22focus%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetFocus%22%2C%22param%22%3A%7B%7D%7D%7D
       https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=676735114&jsonpCallback=callbackfunction&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0 */
      var url = "https://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg?songmid=0028zK3x0gVpRU&format=jsonp"
      this.$http.jsonp(url,{
        'callback':'albuminfoCallback' 
            //callback: "recom17361411500470214"//callback=recom17361411500470214
          }).then(res=>{
            console.log(res)
          })
    },
    _getsonglist(){
     var url = "https://u.y.qq.com/cgi-bin/musicu.fcg?data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22category%22%3A%7B%22method%22%3A%22get_hot_category%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22music.web_category_svr%22%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A8%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A8%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%2C%22new_song%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewSong%22%2C%22param%22%3A%7B%22type%22%3A0%7D%7D%2C%22new_album%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewAlbum%22%2C%22param%22%3A%7B%22type%22%3A0%2C%22category%22%3A%22-1%22%2C%22genre%22%3A0%2C%22year%22%3A1%2C%22company%22%3A-1%2C%22sort%22%3A1%2C%22start%22%3A0%2C%22end%22%3A39%7D%7D%2C%22toplist%22%3A%7B%22module%22%3A%22music.web_toplist_svr%22%2C%22method%22%3A%22get_toplist_index%22%2C%22param%22%3A%7B%7D%7D%2C%22focus%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetFocus%22%2C%22param%22%3A%7B%7D%7D%7D"
      this.$http.jsonp(url,{      
            callback: "recom17361411500470214"//callback=recom17361411500470214
          }).then(res=>{
             this.resl = res.body.recomPlaylist.data.v_hot

             console.log(this.resl)
          })
    },

    
    changshow() {
      this.showsonglist = !this.showsonglist;
      this.deg = !this.deg
      console.log(this.deg)
    }
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
  background: #e1e1e1;
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