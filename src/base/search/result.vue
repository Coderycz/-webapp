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
    <!-- 结果 -->
      <ul class="res">
          <li>
              <div>
                <p class="title">歌名</p>
                <p class="singer">史蒂夫史蒂夫</p>
              </div>
              <i class="iconfont icon-gengduo"></i>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return(){
            search: "",
        }
    },
  methods: {
    goback() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin i($size: 40px) {
  width: $size;
  height: $size;
  display: inline-block;
  text-align: center;
  line-height: $size;
}
.flex {
  display: flex;
  justify-content: space-between;
}

.container {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  overflow-y: auto;
  padding-bottom: 46px;
}

.header {
  @extend .flex;
  height: 50px;
  width: 100%;
  background: pink;
  padding-right: 10px;
  i {
    @include i(50px);
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
      @include i(50px);
    }
  }
}

.res {
  width: 100%;
  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 10px;

      .title {
        font-size: 16px;
      }
    }
    i {
      @include i;
    }
  }
}
</style>