<template> 
    <div class="recommend-type">
        <div>
            <h2>推荐歌单</h2>
            <span><i class="iconfont icon-xiala"></i></span>
        </div>
        <ul>
            <li class="mid"  v-for="(v,k) in list" >
                <img :src="v.picUrl"/>
                <p>{{v.songListDesc}}</p>
            </li>
        </ul>
    </div>
 <!-- :class="{'mid':k=2}" -->
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style lang="scss" scoped>
/* 推荐歌单 */
$sc: 25;
.recommend-type {
  width: 100%;
  h2 {
    display: inline-block;
    vertical-align: middle;
    height: 18px;
    line-height: 18px;
    letter-spacing: 2px;
    position: relative;
    color: #333;
    font-size: 16px;
    font-weight: 400;
    padding-left: 12px;
    border-left: 2px solid red;
    margin: 8px 0;
  }
  span {
    display: inline-block;
    height: 34px;
    line-height: 34px;
    i {
      font-size: 14px;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 -1px 10px;
    width: 381px;
    li {
      width: 33.33%;
      &.mid {
        padding: 0 1px;
      }
    }
  }
  img {
    width: 100%;
  }
  p {
    width: 100%;
    height: 34px;
    line-height: 16px;
    margin: 4px 0;
    padding: 0 3px;
    box-sizing: border-box;
    color: #333;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
