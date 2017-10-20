<template>
<div class="y-footer">
  <div class="pragress">
      <div class="value">
      </div>
      <span class="cricle"></span>
  </div>
  <div class="control" v-for="v in icondata">
      <i class="icon iconfont" :class="v"></i>
  </div>
</div>
</template>
    
<script>

export default {
    data(){
        return{
            icondata:["icon-xunhuanbofang","icon-shangyiqu101","icon-bofang","icon-xiayiqu101","icon-caidan"]
        }
    }
  
}
</script>

<style lang="scss" scoped>

.y-footer{
    width: 100%;
    height: 120px;
    position: fixed;
    bottom: 0;
    .control{
        width: 100%;
        height: 80px;

    }
}
    .pragress{
        margin: 0 auto;
        width: 80%;
        height: 10px;
        color: gray;
        position: relative;
        div{
            background: red;
            height: 10px;

        }
        .cricle{
            width: 14px;
            height: 14px;
            position: absolute;
            top: -2px;

        }
        
    }





</style>