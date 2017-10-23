<template>
   <swiper  :options="swiperOption" ref="mySwiper" class="hid">
    <!-- slides -->
    <swiper-slide class="red" v-for="(v,k) in list"><img :src="list[k].picUrl"></swiper-slide>    
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
   <div class="swiper-scrollbar"   slot="scrollbar"></div>  -->
  </swiper>
</template>

<script>
import { getRecommend } from "api/jsonpdata";
require("swiper/dist/css/swiper.css");
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      list: {},
      swiperOption: {
        //官网api，链接http://www.swiper.com.cn/api/
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 1000,
        loop: true,
        initialSlide: 5,
        direction: "horizontal",
        //grabCursor : true,
        setWrapperSize: true,
        //autoHeight: true,
        autoplayDisableOnInteraction: false, //默认操作后停止自动播放，默认为true
        pagination: ".swiper-pagination",
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    this._get();
  },
  methods: {
    _get() {
      getRecommend().then(res => {
        if (res.code === 0) {
          this.list = res.data.slider;
          console.log(this.list[0]);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container{
    height: 160px;
}
.swiper-slide {
    width: 100%;
 
  img {
    width: 100%;
    height: 160px;
  }
}
</style>