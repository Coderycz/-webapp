<template>   
    <div class="my-songlist">
        <ul>
            <li class="y-footer">
                <div class="leftinfo">
                    <img src="" alt="">                 
                </div>
                <div class="rightmenu">
                    <div class="songname">
                        <p class="name">我喜欢的音乐</p>
                        <p class="gou"><i class="iconfont">&#xe615;</i>221首，已下载180首</p>
                    </div>                                  
                    <span><i class="iconfont">&#xe613;</i></span>
                </div>           
            </li>
            <li class="y-footer">
                <div class="leftinfo">
                    <img src="" alt="">                 
                </div>
                <div class="rightmenu">
                    <div class="songname">
                        <p class="name">我喜欢的音乐</p>
                        <p class="gou"><i class="iconfont">&#xe615;</i>221首，已下载180首</p>
                    </div>                                  
                    <span><i class="iconfont">&#xe613;</i></span>
                </div>           
            </li>
        </ul>
    </div>
</template>

<script>
import "common/style/layout.css";
export default {
    data(){
        return {
            
        }
    },
  components: {}
};
</script>

<style lang="scss"  scoped>
$sc: 25;
.y-footer {
  background: #f7f7f7;
  height: 60/$sc+rem;
  width: 100%;
z-index:10 ;
  display: flex;
  .leftinfo {
    img {
      width: 50/$sc+rem;
      height: 50/$sc+rem;
      margin: 5/$sc+rem;     
    }   
  }
  .rightmenu {
    flex: 1;
    margin-left: 10/$sc+rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    .songname {         
      float: left;     
      .gou i{
          font-size: 14/$sc+rem!important
      }
      p {
        height: 25/$sc+rem;
        font-size: 14/$sc+rem;
        line-height: 22/$sc+rem;
        font-weight: 400;
        text-align: left;
        color: #333;
      //  margin-top: 5px;
        padding: 2/$sc+rem 0;
      }
    }
    span {
      margin-left: 10/$sc+rem;
      height: 40/$sc+rem;
      width: 40/$sc+rem;
      line-height: 40/$sc+rem;
      text-align: center;
    }
    i {
      font-size: 20/$sc+rem;     
    }
  }
}
</style>