<template>
<div class="reccontent">
    <div class="nav">
        <div class="active">音乐</div>
        <div >视频</div>
        <div >电台</div>
    </div>
    <banner :list="list.slider"></banner>
    <div class="banner-down"> 
    <div class="navicon">
        <div v-for="(v,k) in navicon.icon">
            <i class="iconfont " :class="navicon.icon[k]"></i>
            <p class="">{{navicon.info[k]}}</p>
        </div>
    </div>

    <type :list="list.songList"></type>
    <type :list="list.songList"></type>
    <type :list="list.songList"></type>
    </div>
</div>
  
</template>

<script>
import { getRecommend } from "api/jsonpdata";
import banner from "@/base/recommend/banner";
import type from "@/base/recommend/type"
export default {
  data() {
    return {
        list: "",
      navicon: {
        icon: [
          "icon-shouyinji01",
          "icon-rili",
          "icon-yinle101",
          "icon-yelaiyewang_paihangbang"
        ],
        info: ["私人FM", "每日推荐", "歌单", "排行榜"]
      }
    };
  },
  created() {
    this._get();
  },
  methods: {
    _get() {
      getRecommend().then(res => {
        if (res.code === 0) {
          this.list = res.data;
          console.log(res.data);
        }
      });
    }
  },
  components: {
    banner,
    type
  }
};
</script>

<style lang="scss" scoped>
/* sjdlksjdfl */
.reccontent {
  width: 100%;
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
  bottom: 2rem;
  overflow-x: hidden; 
}
.nav {
  margin: 0 20px;
  height: 36px;
  font-size: 14px;
  display: flex;
  line-height: 36px;
  justify-content: space-around;
  div {
    width: 70px;
    text-align: center;
  }
  .active {
    border-bottom: 2px solid red;
  }
}
.flex {
  display: flex;
  height: 90px;
  justify-content: space-around;
  align-items: center;
}
/* 防止banner没加载出来是后面的东西贴上去 */
.banner-down{
    position: absolute;
    width: 100%;
    top: 198px;
}
.navicon {
  @extend .flex;
  div {
    @extend .flex;
    flex-direction: column;
    padding: 10px 0;
  }
  i {
    display: inline-block;
    color: #c62f2f;
    font-size: 25px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #c62f2f;
    border-radius: 50%;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    margin: 0;
    margin-top: 8px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-align: center;
  }
}
/* 推荐歌单 */


</style>
