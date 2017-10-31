<template>
  <div id="app"> 
    <sidebar></sidebar> 
    <keep-alive>
      <router-view/>
    </keep-alive>
    <minilist></minilist>
    <my-footer></my-footer>    
  </div>
</template>
<script>
import "common/style/reset.css";
import "common/style/layout.css";
import sidebar from 'components/sidebar'
import minilist from '@/base/minisonglist'
import myFooter from '@/base/footer'
    

document.documentElement.style.fontSize = innerWidth / 15 + "px";
document.getElementById("app").style.height = innerHeight + "px";

export default {
  name: 'app',
  data(){
    return {
      resl:{}
    }
  },
  components:{
    sidebar,
    minilist,
    myFooter,
    
  },
  created(){
    this.getpersonlist() /* 模拟默认数据 */
    this._getsonglist() /* 获取歌单 */
    console.log(this.$store.state.songlist)
    this.init()
  },
  methods:{
    init(){
      var data = this.$store.state.songlist
      /* this.$store.commit('changenowplaysongname',data[0].album.name) 
      this.$store.commit('changenowplaysinger',data[0].author[0].title) 
      this.$store.commit('changenowplayid',data[0].album.mid) 
      this.$store.commit('changenowplaykey',0) */
      console.log(data)
    }, 
     _getsonglist(){
     var url = "https://u.y.qq.com/cgi-bin/musicu.fcg?data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22category%22%3A%7B%22method%22%3A%22get_hot_category%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22music.web_category_svr%22%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A8%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A8%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%2C%22new_song%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewSong%22%2C%22param%22%3A%7B%22type%22%3A0%7D%7D%2C%22new_album%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewAlbum%22%2C%22param%22%3A%7B%22type%22%3A0%2C%22category%22%3A%22-1%22%2C%22genre%22%3A0%2C%22year%22%3A1%2C%22company%22%3A-1%2C%22sort%22%3A1%2C%22start%22%3A0%2C%22end%22%3A39%7D%7D%2C%22toplist%22%3A%7B%22module%22%3A%22music.web_toplist_svr%22%2C%22method%22%3A%22get_toplist_index%22%2C%22param%22%3A%7B%7D%7D%2C%22focus%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetFocus%22%2C%22param%22%3A%7B%7D%7D%7D"
      this.$http.jsonp(url,{      
            callback: "recom17361411500470214"//callback=recom17361411500470214
          }).then(res=>{
             this.resl = res.body.recomPlaylist.data.v_hot
             console.log(this.resl)
             this.$store.commit("initsonglist",this.resl)
             
             for(let i = 0;i<this.resl.length;i++){
                 /* 存入图片，歌曲切换用 */
                this.$store.commit('changeimg',this.resl[i].cover)     
             }                      
          })
    },
    getpersonlist(){
     var url = "https://u.y.qq.com/cgi-bin/musicu.fcg?callback=recom14277918772343812&jsonpCallback=recom14277918772343812&hostUin=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22new_album%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewAlbum%22%2C%22param%22%3A%7B%22type%22%3A1%2C%22category%22%3A%22-1%22%2C%22genre%22%3A0%2C%22year%22%3A1%2C%22company%22%3A-1%2C%22sort%22%3A1%2C%22start%22%3A0%2C%22end%22%3A39%7D%7D%7D"
    this.$http.jsonp(url,{
      callback:"recom14277918772343812"
    }).then(res=>{
      var arr = res.body.new_album.data.album_list
      console.log(arr)
      this.$store.commit('changesonglist',res.body.new_album.data.album_list)     
      /* res.body.new_album.data.album_list .album.title*/    
    })
    }
  }
}
</script>

<style>

.flod-enter{
    opacity: 0;
    transform: scale(0.5);   
}
.flod-enter-active{
    opacity: 1;
    transform: scale(1);  
    transition: all 0.5s ease  
}


#app{
  width: 100%;
 height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
