<template>
    <div class="container">
        <!-- 头 -->
        <div class="header">
            <i class="iconfont icon-zuo" @touchend="goback"></i>
            <div ><input v-model="search" placeholder="音乐、视频、歌词、电台"/>
            <i @click="searching" class="iconfont icon-tubiao17"></i>
        </div>
        </div>
        <ul class="red" v-show="false">
            <li class="tishi">搜索“t”</li>
            <li>
                <i class="iconfont icon-tubiao17"></i>
                <span>结果</span>
            </li>
            <li>
                <i class="iconfont icon-tubiao17"></i>
                <span>结果</span>
            </li>
        </ul>

        <!-- 热门 -->
        <div class="hot">
            <div class="">热门搜索</div>
            <ul >            
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
  
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
        hotkey: [],
      search: "",
      hist: ["promise", "化身孤岛的鲸", "李香兰", "陈奕迅", "看穿"],
      list: []
    };
  },
  watch:{
      search(n){
          this.searching()
      }
  },
  created() {
    this.gethot();
    
    
  },
  methods: {
    choose(k) {
      this.search = k;
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
          console.log(res.data.data);
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
         this.hotkey = res.data.data.hotkey;
         console.log(res.data.data.hotkey)
         this.list = this.luanarr(this.hotkey).slice(0,8)
         console.log(this.list)
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
@mixin i($size: 50px) {
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
}
.header {
  @extend .flex;
  height: 50px;
  width: 100%;
  background: pink;
  padding-right: 10px;
  i {
    @include i;
    color: #eee;
  }
  div {
    flex: 1;
    position: relative;
    input {
      height: 30px;
      width: 100%;
      border: 0;
      background: pink;
      margin-top: 10px;
      border-bottom: 1px solid #aaa;
      outline: none;
      font-size: 14px;
    }
    i {
      position: absolute;
      top: 0;
      right: -10px;
      @include i;
    }
  }
}

.red {
  background: #fff;
  position: fixed;
  top: 50px;
  width: 100%;
  padding: 0 10px;
  font-size: 20px;
  z-index: 10000;
  li {
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #eee;
    font-size: 14px;
    &.tishi {
      border: 0;
      text-indent: 15px;
      letter-spacing: 3px;
    }
    i {
      @include i(40px);
      font-size: 16px;
    }
  }
}

.hot {
  padding: 0 10px;
  width: 100%;
  font-size: 16px;
  div {
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  ul {
    width: 100%;
    li {
      float: left;
      height: 30px;
      padding: 0 10px;
      border-radius: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      margin: 0 20px 10px 0;
      border: 1px solid #ddd;

      //padding: 5px;
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
}

.hist {
  padding: 0 10px;
  .lis {
    font-size: 16px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
  }
  li {
    @extend .flex;
    border-bottom: 1px solid #ddd;
    i {
      @include i(40px);
    }
    .right {
      flex: 1;
      @extend .flex;
      p {
        line-height: 40px;
      }
    }
  }
}
</style>