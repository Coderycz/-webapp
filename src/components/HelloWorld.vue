<template>
  <div class="hello">
    
    <my-header></my-header>  
    <my-body></my-body>
     
  </div>
</template>

<script>
import {getRecommend,getSongList,getperson,gethot} from "api/jsonpdata"
import mySonglist from "@/base/songlist.vue"
import myHeader from "../base/header"
import myBody from "../base/mainpage"
import myFooter from "../base/footer"
import {play,stop} from "api/audio"

export default {  
  name: 'HelloWorld',
  data () {
    return {     
      createdlist: [],
      collectlist: '',         
    }
  },
  created(){
    
    this._get()
    this.getpersonlist()  
   
  },
  methods:{   
    _get(){
      getRecommend().then((res) => {
        if(res.code === 0){
          //console.log(res.data)
        }
      })
    },
    getpersonlist(){
     var url = "https://u.y.qq.com/cgi-bin/musicu.fcg?callback=recom14277918772343812&jsonpCallback=recom14277918772343812&hostUin=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22new_album%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewAlbum%22%2C%22param%22%3A%7B%22type%22%3A1%2C%22category%22%3A%22-1%22%2C%22genre%22%3A0%2C%22year%22%3A1%2C%22company%22%3A-1%2C%22sort%22%3A1%2C%22start%22%3A0%2C%22end%22%3A39%7D%7D%7D"
    this.$http.jsonp(url,{
      callback:"recom14277918772343812"
    }).then(res=>{
      console.log(res.body.new_album.data.album_list)
      var arr = res.body.new_album.data.album_list

      this.$store.commit('changesonglist',res.body.new_album.data.album_list)     
      /* res.body.new_album.data.album_list .album.title*/
      
    })
    }

  },
  components:{
    "my-header": myHeader ,
    myFooter,
    myBody,
    mySonglist,
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$sc :25;

.hello{
 width: 100%;
 height: 100%;
 overflow: auto;
  background: #f7f7f7;
}
</style>
