<template> 
    <div class="recommend-type">
        <div>
            <h2>推荐歌单</h2>
            <span><i class="iconfont icon-xiala"></i></span>
        </div>
        <ul>
            <li class="mid"  v-for="(v,k) in list" >
                <img v-lazy="v.picUrl"/>
                <div class="dis">{{v.songListDesc}}</div>
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
    height: 18/$sc+rem;
    line-height: 18/$sc+rem;
    letter-spacing: 2/$sc+rem;
    position: relative;
    color: #333;
    font-size: 16/$sc+rem;
    font-weight: 400;
    padding-left: 12/$sc+rem;
    border-left: 2/$sc+rem solid red;
    margin: 8/$sc+rem 0;
  }
  span {
    display: inline-block;
    height: 34/$sc+rem;
    line-height: 34/$sc+rem;
    i {
      font-size: 14/$sc+rem;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 -1/$sc+rem 10/$sc+rem;
    width: 381/$sc+rem;
    li {
      width: 33.33%;
      &.mid {
        padding: 0 1/$sc+rem;
      }
    }
  }
  img {
    width: 100%;
  }
  .dis {
    width: 100%;
    height: 34/$sc+rem;
    line-height: 16/$sc+rem;
    margin: 4/$sc+rem 0;
    padding: 0 3/$sc+rem;
    box-sizing: border-box;
    color: #333;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  
  }
}
</style>
