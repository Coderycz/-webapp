<template>
   <swiper  :options="swiperOption" ref="mySwiper" class="hid">
    <!-- slides -->
    <swiper-slide class="red" v-for="(v,k) in list"><a :href="list[k].linkUrl"><img  :src="list[k].picUrl"></a></swiper-slide>    
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>

require("swiper/dist/css/swiper.css");
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  props:["list"],
  data() {
    return {
      
      swiperOption: {
        //官网api，链接http://www.swiper.com.cn/api/
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 1500,
        loop: true,
        initialSlide: 5,
        direction: "horizontal",
        //grabCursor : true,
        setWrapperSize: true,
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
  
  
};
</script>

<style lang="scss" scoped>
$sc: 25;
.container{
    height: 160/$sc+rem;
    position: fixed;
    top: 4rem;
  
}

.swiper-slide {
    width: 100%;
  img {
    width: 100%;
    height: 160/$sc+rem;
  }
}
</style>