<template>   
    <div class="my-footer">
        <div class="container">

        
        <div class="y-footer">
            <div class="leftinfo">
                <img src="" alt="">
                <div class="songname">
                    <p class="name">小酒窝</p>
                    <p class="singer">林俊杰,蔡卓妍</p>
                </div>
            </div>
            <div class="rightmenu">               
                <span><i class="iconfont">&#xe600;</i></span>
                <span><i class="iconfont">&#xe604;</i></span>
            </div>           
        </div>
    </div>
    </div>
</template>

<script>
import "common/style/layout.css";
export default {
  componensts: {}
};
</script>

<style lang="scss"  scoped>
$sc: 25;

.container{
    background: #fff;
    height: 46/$sc+rem;
  width: 100%;
    position: fixed;
  bottom: 0;
}
.y-footer {
  padding: 5/$sc+rem;
  .leftinfo {
    float: left;
    display: flex;
    img {
      width: 36/$sc+rem;
      height: 36/$sc+rem;
      margin-right: 5/$sc+rem;
    }
    .songname {
      float: left;
      p {
        height: 18/$sc+rem;
        font-size: 14/$sc+rem;
        line-height: 14/$sc+rem;
        font-weight: 400;
        color: #333;
        padding: 2/$sc+rem 0;
      }
    }
  }
  .rightmenu {
    float: right;
    span {
      margin-left: 10/$sc+rem;
      height: 36/$sc+rem;
      width: 36/$sc+rem;
      line-height: 36/$sc+rem;
      text-align: center;
    }
    i {
      font-size: 30/$sc+rem;
      width: 36/$sc+rem;
      height: 36/$sc+rem;
    }
  }
}
</style>