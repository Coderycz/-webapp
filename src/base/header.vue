<template>   
    <div class="my-header">
        <div class="container">
        <div class="header">
            <div><span><i class="iconfont red">&#xe607;</i></span></div>
            <div class="h-center">               
                <span class="active"><i class="iconfont red">&#xe680;</i></span>
                <span><i class="iconfont red">&#xe601;</i></span>
                <span><i class="iconfont red">&#xe603;</i></span>
            </div>
            <div><span><i class="iconfont red">&#xe610;</i></span></div>
        </div>
    </div>
    </div>
</template>

<script>
import "common/style/layout.css";
export default {
  components: {}
};
</script>

<style lang="scss"  scoped>
.container{
    width: 100%;
    height: 2rem;
    position: fixed;
  top: 0;
}
.header {
  
  height: 2rem;
  background: #c62f2f;
  display: flex;
  justify-content: space-between;
}
span {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  i {
    font-size: 0.8rem !important;
    color: #aaa;
  }
}
.active i {
  color: #eee !important;
}
</style>