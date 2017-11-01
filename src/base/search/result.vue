<template>
  <div class="container">
      <!-- 头 -->
        <div class="headsearch">
        <div class="header">
            <i class="iconfont icon-zuo" @touchend="goback"></i>
            <div ><input v-model="search" @touchend="target"  placeholder="音乐、视频、歌词、电台"/>
            <i @click="save" class="iconfont icon-tubiao17"></i>
        </div>
        </div>
        <ul class="red" v-show="showsearch.songname.length > 0 && !hidd">
            <li class="tishi">搜索“{{search}}”</li>
            <li v-for ="(v,k) in showsearch.songname" @click="choose(showsearch.songname[k],showsearch.singername[k])">
                <i class="iconfont icon-tubiao17"></i>
                <p>
                  <span class="name">{{showsearch.songname[k]}}</span>
                  <span class="singer">{{showsearch.singername[k]}}</span>
                </p>
            </li>         
        </ul>
        </div>
    <!-- 结果 -->
      <div class="bottom" @click="hidd = true" :class="{'hidminiplayer':this.$store.state.showminiplayer}">
      <ul class="res">
          <li v-for="(v,k) in result.songname">
              <div>
                <p class="title">{{result.songname[k]}}</p>
                <p class="singer">
                <span>  {{result.singername[k]}}  </span> --
                <span>  {{result.special[k]}}  </span>                   
                </p>
              </div>
              <i class="iconfont icon-gengduo"></i>
          </li>
      </ul>
      </div>
  </div>
</template>
<script>

export default{
  data() {
    return {
      hidd: true,       /* 结果隐藏 */  
      search: "",       /* 关键字 */
      showsearch: {
        songname:[],    /* 歌名 */
        singername:[],   /* 歌手名 */
        special:[]
    },
      hist: ["promise", "化身孤岛的鲸", "李香兰", "陈奕迅", "看穿"],/* 搜索历史 */
      list: []          /* 热门搜索 */
    };
  },
  watch:{
      search(n,o){
        /* 空值时清空数组 */
          this.searching()
          this.hidd = false;
      }
  },
  computed:{
      result (){
        return this.$store.state.search.result
      }
    },
  created() {
    this.gethot();  
  },
  methods: {
    target(){
      this.hidd = !this.hidd
    },
    save(){
      var index = this.hist.indexOf(this.search)
      if(index>=0){
        this.hist.splice(index,1)
      }
      var temp = this.hist.unshift(this.search)
      this.hist = this.hist.splice(0,5)
      this.$store.commit("changesearch",this.showsearch)
      this.$store.commit("changehist",this.hist)
      console.log( this.showsearch)
    },

    choose(k,b) {
      if(b !== undefined){
        this.search = k + b;
      }else{
        this.search = k;
      }     
      console.log(k);
    },
    goback() {
      return this.$router.go(-1);
    },
    searching() {     
      this.$http
        .jsonp(
          "https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&w=" +
            this.search,
          {
            jsonp: "jsonpCallback"
          }
        )
        .then(res => {
          var songinfo = res.data.data.song.list
          if(this.search == ''){
            this.showsearch.songname.length = 0
            this.showsearch.singername.length = 0
            this.showsearch.special.length = 0
          }
          this.showsearch.songname.length = 0
          this.showsearch.singername.length = 0
          this.showsearch.special.length = 0
          for(let i =0;i < songinfo.length;i++){ 
            /* 当songname 和singername 没有时不进行添加 */
            if(songinfo[i].songname.indexOf('&')>=0 
            || songinfo[i].singer[0].name.indexOf('&')>= 0
            || songinfo[i].albumname.indexOf('&')>= 0) {
              return
            } 
                  
            this.showsearch.songname.push(songinfo[i].songname)
            this.showsearch.singername.push(songinfo[i].singer[0].name)
            this.showsearch.special.push(songinfo[i].albumname)
              
          }
          
        });
    },
    /* 打乱数组 */
    luanarr(arr) {
      arr.sort(function() {
        return Math.random() - 0.5;
      });
      return arr;
      //console.log(arr)
    },
    gethot() {
      this.$http
        .jsonp(
          "https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=676735114&jsonpCallback=callbackfunction&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",
          {
            jsonp: "jsonpCallback"
          }
        )
        .then(res => {          
         let hotkey = res.data.data.hotkey;
         console.log(res.data.data.hotkey)
         this.list = this.luanarr(hotkey).slice(0,8)
         console.log(this.list)
        });
    }
  }    
}



</script>

<style lang="scss" scoped>
$sc:25;
@mixin i($size: 40/$sc+rem) {
  width: $size;
  height: $size;
  display: inline-block;
  text-align: center;
  line-height: $size;
}
.flex {
  display: flex;
  justify-content: space-between;
}

.container {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  overflow-y: auto;
  padding-bottom: 46/$sc+rem;
  
    
  
}


.bottom{
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 50/$sc+rem;
  z-index: 99;
  overflow-y: auto
}
.hidminiplayer{
  bottom: 46/$sc+rem;
}

.header {
  @extend .flex;
  height: 50/$sc+rem;
  width: 100%;
  background: pink;
  padding-right: 10/$sc+rem;
  i {
    @include i(50/$sc+rem);
    font-size: 20/$sc+rem;
    color: #eee;
  }
  div {
    flex: 1;
    position: relative;
    input {
      height: 30/$sc+rem;
      width: 100%;
      border: 0;
      background: pink;
      margin-top: 10/$sc+rem;
      border-bottom: 1/$sc+rem solid #aaa;
      outline: none;
      font-size: 14/$sc+rem;
    }
    i {
      position: absolute;
      top: 0;
      right: -10/$sc+rem;
      @include i(50/$sc+rem);
    }
  }
}

.red {
  background: #fff;
  position: fixed;
  top: 50/$sc+rem;
  width: 100%;
  padding: 0 10/$sc+rem;
  font-size: 20/$sc+rem;
  z-index: 10000;
  li {
    height: 40/$sc+rem;
    line-height: 40/$sc+rem;
    border-top: 1/$sc+rem solid #eee;
    font-size: 14/$sc+rem;  
    @extend .flex;    
    p{
      flex: 1;
      width: 100%;
      white-space:nowrap; 
      text-overflow:ellipsis; 
      overflow:hidden;
      .name{
        font-size: 16/$sc+rem;
      }
      .singer{
        font-size: 12/$sc+rem;
        color: #aaa;
      }

    }
    &.tishi {
      border: 0;
      text-indent: 15/$sc+rem;
      letter-spacing: 3/$sc+rem;
      width: 100%;
      white-space:nowrap; 
      text-overflow:ellipsis; 
      overflow:hidden;
    }
    i {
      @include i(40/$sc+rem);
      font-size: 16/$sc+rem;
    }
  }
}

.res {
  width: 100%;
  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1/$sc+rem solid #ddd;
    height: 50/$sc+rem;
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 10/$sc+rem;

      .title {
        font-size: 16/$sc+rem;
      }
      .singer{
        font-size: 12/$sc+rem;
        color: #aaa;
      }
    }
    i {
      @include i(50/$sc+rem);
      font-size: 16/$sc+rem;
    }
  }
}
</style>