<template>
<div class="reccontent" :class="{'hidminiplayer':this.$store.state.showminiplayer}">
    <div class="nav">
        <div class="active">音乐</div>
        <div >视频</div>
        <div >电台</div>
    </div>
    <banner :list="list.slider"></banner>
    <div class="banner-down"> 
    <div class="navicon">
        <div class="dis" v-for="(v,k) in navicon.icon">
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
$sc:25;

.reccontent {
  width: 100%;
  position: absolute;
  top: 2rem;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-x: hidden;  
}
.hidminiplayer{
  bottom: 46/$sc+rem;
}
.nav {
  margin: 0 20/$sc+rem;
  height: 36/$sc+rem;
  font-size: 14/$sc+rem;
  display: flex;
  line-height: 36/$sc+rem;
  justify-content: space-around;
  div {
    width: 70/$sc+rem;
    text-align: center;
  }
  .active {
    border-bottom: 2/$sc+rem solid red;
  }
}
.flex {
  display: flex;
  height: 90/$sc+rem;
  justify-content: space-around;
  align-items: center;
}
/* 防止banner没加载出来是后面的东西贴上去 */
.banner-down{
    position: absolute;
    width: 100%;
    top: 198/$sc+rem;
}
.navicon {
  @extend .flex;
  div {
    @extend .flex;
    flex-direction: column;
    padding: 10/$sc+rem 0;
  }
  i {
    display: inline-block;
    color: #c62f2f;
    font-size: 25/$sc+rem;
    width: 50/$sc+rem;
    height: 50/$sc+rem;
    line-height: 50/$sc+rem;
    text-align: center;
    border: 1/$sc+rem solid #c62f2f;
    border-radius: 50%;
  }
  p {
    font-size: 12/$sc+rem;
    font-weight: 400;
    margin: 0;
    margin-top: 8/$sc+rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-align: center;
  }
}
/* 推荐歌单 */


</style>
