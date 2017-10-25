<template>
  <div class="sidebar">
    
    <div class="cover" @click="close" :class="{'coverhid':!flag}"></div>
    <div class="bar " :class="{'close':flag}">
        <div class="title">
            <div class="palytype">
                <i class="iconfont icon-liebiaoxunhuan"></i>
                <span class="typename">单曲循环</span>
                <span>(1)</span>
            </div>
            <div class="right">
                <div>
                    <i class="iconfont icon-wenjianjia"></i>
                    <span>收藏</span>
                </div>
                <div>
                    <i class="iconfont icon-icon-text-fn-delete"></i>
                    <span>清空</span>
                </div>               
            </div>
        </div> 

       
            <ul class="songlist">
                <li>
                    <div>
                        <i class="iconfont icon-shengyin red"></i>
                        <span class="songname">歌名</span> - 
                        <span class="singer">歌手</span>
                    </div>
                    
                    <i class="iconfont icon-chuyidong"></i>
                </li>

            </ul>
        
    </div> 
</div>  
  
</template>

<script>
export default {
  props:['isclose'],
  data() {
    return { 
     
    };
  },
  computed:{
    flag(){
      return this.$store.state.showminilist
    }
  },
  methods: {
    add() {
      console.log("sdf");
    },
    close(){     
      this.$store.commit("changemini")
    } 
  }
};
</script>

<style lang="scss" scoped>
$sc: 25;

.cover {
  position: fixed;
  bottom: 0; 
  opacity: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.coverhid{
  opacity: 1;
  z-index: 999;
}

/* 下面mini歌单 */
.close {
  bottom: -320/$sc+rem !important;
}
.bar {
  position: fixed;
  left: 0;
  bottom: 0;
  overflow: auto;
  transition: all 0.3s ease-out;
  z-index: 9999;
  width: 100%;
  height: 320/$sc+rem;
  background: #fff;
  color: #ddd;
  padding-bottom: 40/$sc+rem; 
}

.flex{
    display: flex;
    justify-content: space-between;
}
.title{
    @extend .flex;
    height: 50px;
    width: 100%;
    color: #2c3e50;
    padding: 0 15px;
    font-size: 14px;
    border-bottom: 1px solid rgba(7,17,27,.1);
    .palytype{
        line-height: 50px;
    }
    .right{
        @extend .flex;
        line-height: 50px;
        div{
            margin-left: 30px;
        }
    }


}

.songlist{
    @extend .flex;
    padding: 0 15px;
    color: #2c3e50;
    li{
        height: 42px;
        width: 100%;
        @extend .flex;
        align-items: center;
        border-bottom: 1px solid rgba(7,17,27,.1);
        div{
            height: 42px;
        line-height: 42px;
        }
        .red{
            font-size: 14px;
            color: red;
        }
        .songname{
            font-size: 14px
        }
        .singer{
            font-size: 12px;
            color: #999;
        }
    }

}

</style>