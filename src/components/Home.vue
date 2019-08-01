<template>
  <div class="home">
    <div class="inner">
      <div class="carousel">
        <Swiper />
      </div>
      <div class="shopping">
        <div class="soppingTop">
          <div class="timeMain">
            <div>
              <img src="./../assets/images/yushou.png" alt />
              <p>龙之谷六周年限定礼包大Boss冰龙款男士T恤</p>
            </div>
            <div>
              <!-- 倒计时z -->
              <span>距预售结束</span>
              <div>
                <TimeOver />
              </div>
              <span>
                注 :
                <span>商品将于</span>2019/10/1
                <span>统一发货!</span>
              </span>
            </div>
          </div>
          <div class="size">
            <div>
              <span>预售价</span>
              <div>
                <h3>￥700.00</h3>
                <div>
                  <span>正价:</span>
                  <span>￥960.00</span>
                </div>
              </div>
            </div>
            <div>
              <span>款式</span>
              <div>
                <span
                  @click="whichType({type:type.type})"
                  v-for="type in types"
                  :key="type.id"
                  :class="type.isActive?'active':''"
                >{{type.type}}</span>
              </div>
            </div>
            <div>
              <span>尺码</span>
              <div>
                <span
                  @click="whichSize({size:size.size})"
                  v-for="size in sizes"
                  :key="size.id"
                  :class="size.isShow?'show':''"
                >{{size.size}}</span>
              </div>
            </div>
            <div>
              <span>数量</span>
              <div>
                <span @click="loss">-</span>
                <span>{{nowNum}}</span>
                <span @click="add">+</span>
              </div>
            </div>
          </div>
        </div>
        <div class="soppingBottom">
          <div>
            <div>
              <button @click="submit({route:nextRoute})">立即预约</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="./../assets/images/home1.jpg" alt />
        <img src="./../assets/images/home2.jpg" alt />
      </div>
    </div>
  </div>
</template>
 
<script>
import { mapState, mapMutations } from "vuex";
import Swiper from "./Swiper";
import TimeOver from "./TimeOver";
export default {
  name: "home",
  components: {
    Swiper,
    TimeOver
  },
  computed: {
    ...mapState({
      types: state => state.home.types,
      sizes: state => state.home.sizes,
      nowNum: state => state.home.nowNum
    })
  },
  methods: {
    ...mapMutations({
      whichType: "whichType",
      whichSize: "whichSize",
      add: "add",
      loss: "loss",
      submit: "submit"
    }),
    nextRoute() {
      this.$router.push(`${this.$publicUrl}pay`);
    }
  }
};
</script>

<style>
.home {
  background: url("./../assets/images/headerbg.png") no-repeat top center;
  background-size: 160%, 476px;
}
.home > .inner > div:last-child img {
  width: 100%;
}
.home .carousel {
  background-image: url("./../assets/images/lunbo-bg.png");
  padding: 30px 50px;
  position: relative;
}
.home .shopping {
  background-color: #2b2e33;
}
.home .soppingTop {
  display: flex;
  padding: 20px 50px;
}
.home .timeMain {
  border-right: 2px solid #707378;
}
.home .timeMain > div:first-child {
  display: flex;
  padding-right: 110px;
  width: 634px;
}
.home .timeMain > div:first-child > p {
  font-size: 30px;
  color: #fff;
  padding-left: 30px;
  margin-top: 0;
}
.home .timeMain > div:last-child > span:first-child {
  color: #585b60;
}
.home .timeMain > div:last-child {
  margin-top: 60px;
}
.home .timeMain > div:last-child > span:last-child {
  color: #fdd900;
}
.home .timeMain > div:last-child > span:last-child > span {
  color: #fff;
}

/* size */
.home .size .active,
.home .size .show {
  background-color: #fdd900;
}
.home .size {
  padding: 0 0 0 50px;
}
.home .size > div {
  display: flex;
  margin-bottom: 20px;
}
.home .size > div span {
  color: #fff;
}
.home .size > div > span:first-child {
  background-color: #fff;
  border-radius: 10px;
  width: 60px;
  height: 30px;
  color: #000;
  text-align: center;
  line-height: 30px;
  flex-shrink: 0;
}
.home .size > div:first-child > div > div > span:nth-child(2) {
  text-decoration: line-through;
}
.home .size > div h3 {
  margin: 0;
}
.home .size > div h3 {
  color: #fdd900;
  font-size: 23px;
}
.home .size > div > div {
  flex-grow: 1;
  margin-left: 30px;
}
.home .size > div > div > span {
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-right: 5px;
  margin-top: 5px;
}
.home .size > div:nth-child(3) > div {
  display: flex;
  flex-wrap: wrap;
}
.home .size > div:nth-child(3) > div > span,
.home .size > div:nth-child(4) > div span {
  width: 64px;
  text-align: center;
}
.home .size > div:nth-child(4) > div span:nth-child(2) {
  border: none;
}
.home .size > div:nth-child(4) > div {
  display: flex;
  justify-content: space-between;
}

/* 提交 */
.home .soppingBottom {
  padding: 0 50px 20px 50px;
}
.home .soppingBottom > div {
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
}
.home .soppingBottom > div > div {
  padding: 10px 0;
}
.home .soppingBottom > div > div button {
  border: 2px solid #fdd900;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  font-size: 26px;
  background: #2b2e33;
  color: #fdd900;
  outline: none;
}
</style>