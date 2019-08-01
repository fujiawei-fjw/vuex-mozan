<template>
  <div class="ownSwiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img src="./../assets/images/lunbo1.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="./../assets/images/lunbo2.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="./../assets/images/lunbo3.jpg" alt />
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev">
      <span class="iconfont icon-zuo"></span>
    </div>
    <div class="swiper-button-next" slot="button-next">
      <span class="iconfont icon-you"></span>
    </div>
  </div>
</template>
 
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "ownSwiper",
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper;
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style>
.ownSwiper .swiper-slide img {
  width: 100%;
  display: block;
}

.ownSwiper .swiper-button-prev,
.ownSwiper .swiper-button-next {
  position: absolute;
  top: 35%;
  line-height: 100px;
  height: 100px;
  width: 30px;
  text-align: center;
  background-color: rgba(80, 78, 78, 0.877);
  background-image: none;
}
.ownSwiper .swiper-button-prev {
  left: 0px;
}
.ownSwiper .swiper-button-next {
  right: 0px;
}
.ownSwiper .swiper-button-prev span,
.ownSwiper .swiper-button-next span {
  color: yellow;
  font-size: 32px;
}
</style>