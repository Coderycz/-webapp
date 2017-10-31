<template>
 <transition name="container"  transition-mode="out-in">
    <div class="container">
        <!-- 头 -->
        <div class="headsearch">
        <div class="header">
            <i class="iconfont icon-zuo" @touchend="goback"></i>
            <div ><input v-model="search" @touchend="target"  placeholder="音乐、视频、歌词、电台"/>
            <router-link tag="i" to="/result" @click.native="save" class="iconfont icon-tubiao17"></router-link>
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

        <!-- 热门 -->
        <div class="bottom" @touchend="hidd=true">
        <div class="hot">
            <div class="">热门搜索</div>
            <ul>            
                <li class="" v-for="(v,k) in list" @click="choose(list[k].k)"><p ref="innerhtml">{{list[k].k}}</p></li>
            </ul>
        </div>
        <!-- 底部 -->
        <div class="hist">
            <div class="lis">搜索记录</div>
            <ul>
                <li v-for="(v,k) in hist" @click="choose(v)">
                    <i class="iconfont icon-tubiao17"></i>
                    <div class="right">
                        <p>{{v}}</p>
                        <i class="iconfont icon-chuyidong"></i>
                    </div>                   
                </li>
            </ul>
        </div>

        </div>

    </div>
 </transition>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      hidd: true,       /* 结果隐藏 */  
      search: "",       /* 关键字 */
      showsearch: {
        songname:[],    /* 歌名 */
        singername:[],   /* 歌手名 */
        special:[]        /* 专辑 */
    },
     // hist: ["promise", "化身孤岛的鲸", "李香兰", "陈奕迅", "看穿"],/* 搜索历史 */
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
    hist(){
      return this.$store.state.search.hist ? this.$store.state.search.hist: ["promise", "化身孤岛的鲸", "李香兰" ]
    }
  },
  created() {
    this.gethot();  
  },
  methods: {
    target(){
      this.hidd=!this.hidd
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
         this.list = this.luanarr(hotkey).slice(0,8)
        });
    }
  }
};
</script>

<style lang="scss" scoped>
$sc:25;

.container-enter-to,.container-leave-to{
  transition: all 0.3s
}			
		.container-enter{
			transform: translate3d(0,10%,0);
			opacity: 0.5}
		.container-leave-to{
			transform: translate3d(100%,0%,0);
			opacity: 0}
.flex {
  display: flex;
  justify-content: space-between;
}
@mixin i($size: 50/$sc+rem) {
  width: $size;
  height: $size;
  display: inline-block;
  text-align: center;
  line-height: $size;
}
.container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #f7f7f7;
  i{
    font-size: 20/$sc+rem
  }
}
.headsearch{
  width: 100%;
  position: fixed;
  z-index: 889;
}
.bottom{
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 50/$sc+rem;
  bottom: 46/$sc+rem;
  z-index: 99;
}



.header {
  @extend .flex;
  height: 50/$sc+rem;
  width: 100%;
  background: pink;
  padding-right: 10/$sc+rem;
  i {
    @include i;
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
      @include i;
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

.hot {
  padding: 0 10/$sc+rem;
  width: 100%;
  font-size: 16/$sc+rem;
  div {
    width: 100%;
    height: 40/$sc+rem;
    line-height: 40/$sc+rem;
  }
  ul {
    width: 100%;
    li {
      float: left;
      height: 30/$sc+rem;
      padding: 0 10/$sc+rem;
      border-radius: 30/$sc+rem;
      text-align: center;
      line-height: 30/$sc+rem;
      font-size: 14/$sc+rem;
      margin: 0 20/$sc+rem 10/$sc+rem 0;
      border: 1/$sc+rem solid #ddd;

      //padding: 5/$sc+rem;
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
}

.hist {
  padding: 0 10/$sc+rem;
  .lis {
    font-size: 16/$sc+rem;
    width: 100%;
    height: 40/$sc+rem;
    line-height: 40/$sc+rem;
    border-bottom: 1/$sc+rem solid #ddd;
  }
  li {
    @extend .flex;
    border-bottom: 1/$sc+rem solid #ddd;
    i {
      @include i(40/$sc+rem);
    }
    .right {
      flex: 1;
      @extend .flex;
      p {
        font-size: 16/$sc+rem;
        line-height: 40/$sc+rem;
      }
    }
  }
}
</style>