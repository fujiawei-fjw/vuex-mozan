<template>
  <div class="pay">
    <div class="inner">
      <div class="pay-header">
        <div>
          <h3>已成功加入购物车！</h3>
        </div>
        <img src="./../assets/images/yellowbg_03.jpg" alt />
      </div>
      <div class="pay-section">
        <ul>
          <li v-for="good in goods" :key="good.id">
            <div>
              <div class="goodInfo">
                <div>
                  <img :src="good.src" alt />
                  <p>龙之谷六周年限定礼包大Boss冰龙款男士T恤</p>
                </div>
                <div>
                  <span>
                    款式&nbsp;:&nbsp;
                    <span>{{good.type}}</span>
                  </span>
                  <span>
                    尺码&nbsp;:&nbsp;
                    <span>{{good.size}}</span>
                  </span>
                  <span>
                    数量&nbsp;:&nbsp;
                    <span>X{{good.num}}</span>
                  </span>
                </div>
              </div>
              <div class="backButton">
                <button @click="goBack">返回</button>
                <button @click="goNext">去购物车结算</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="pay-footer">
        <div>
          <h4>您可能还需要</h4>
          <div></div>
        </div>
        <div class="pay-moreInfo">
          <ul>
            <li v-for="needGood in needGoods" :key="needGood.id">
              <div>
                <img :src="needGood.src" alt />
                <p>{{needGood.text}}</p>
                <div>
                  <span>￥{{needGood.money.toFixed(2)}}</span>
                  <span class="iconfont icon-gouwu"></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "pay",
  computed: {
    ...mapState({
      goods: state => state.home.goods,
      needGoods: state => state.pay.needGoods
    })
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goNext() {
      this.$router.push(`${this.$publicUrl}shopcart`);
    }
  }
};
</script>

<style>
.pay .pay-header {
  background-color: #fdd900;
  padding: 20px 50px 0 50px;
  position: relative;
}
.pay .pay-header h3 {
  margin: 0;
  font-size: 20px;
  margin-left: 20px;
  color: #2b2e33;
  padding: 10px 0;
}
.pay .pay-header > div {
  border-left: 5px solid #000;
}
.pay .pay-header img {
  position: absolute;
  left: 0;
  top: 67px;
}
.pay .pay-section {
  padding-top: 70px;
  background-color: #fff;
  padding-bottom: 30px;
}
.pay .pay-section ul {
  margin: 0;
  padding: 0;
  margin: 0 50px;
  border-top: 2px solid #babec9;
  border-bottom: 2px solid #babec9;
  padding: 10px;
}
.pay .pay-section li + li {
  border-top: 2px solid #babec9;
}
.pay .pay-section li > div {
  display: flex;
  justify-content: space-between;
}
.pay .pay-section li > div > div {
  display: flex;
  align-items: center;
}
.pay .pay-section li > div > div > div:first-child {
  display: flex;
  align-items: center;
}
.pay .pay-section li img {
  width: 96px;
}
.pay .goodInfo > div:first-child p {
  font-size: 20px;
  margin-left: 10px;
  width: 300px;
  border-right: 2px solid #fdd900;
  padding: 15px 30px 15px 0;
}
.pay .goodInfo > div:last-child > span {
  display: flex;
  margin: 5px 0 5px 20px;
  color: #82858a;
}
.pay .backButton > button:first-child {
  background-color: #2b2e33;
  border: none;
  width: 130px;
  line-height: 46px;
  outline: none;
  color: #fff;
  font-size: 20px;
  margin-right: 20px;
}
.pay .backButton > button:last-child {
  border: none;
  outline: none;
  background-color: #fdd900;
  color: #000;
  font-size: 20px;
  width: 210px;
  line-height: 46px;
}
.pay .pay-footer {
  background-color: #fff;
  padding: 20px 50px 50px 50px;
}
.pay .pay-footer h4,
.pay .pay-footer ul {
  margin: 0;
  padding: 0;
}
.pay .pay-footer > div:first-child {
  display: flex;
  align-items: center;
}
.pay .pay-footer > div:first-child h4 {
  line-height: 60px;
  font-size: 20px;
  flex-shrink: 0;
}
.pay .pay-footer > div:first-child div {
  background-color: #fdd901;
  padding-bottom: 2px;
  flex-grow: 1;
  margin-left: 10px;
}
.pay .pay-footer > div:last-child ul {
  display: flex;
  justify-content: space-between;
}
.pay .pay-footer .pay-moreInfo li {
  margin-right: 30px;
}

.pay .pay-footer .pay-moreInfo li:last-child {
  margin-right: 0;
}
.pay .pay-footer .pay-moreInfo li > div {
  border: 1px solid #d1d7e3;
  padding-bottom: 10px;
}
.pay .pay-footer .pay-moreInfo li > div img {
  width: 100%;
}
.pay .pay-footer .pay-moreInfo li > div p {
  margin: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.pay .pay-footer .pay-moreInfo li > div > div {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 10px;
}
.pay .pay-footer .pay-moreInfo li > div > div > span:first-child {
  color: red;
}
.pay .pay-footer .pay-moreInfo li > div > div > span:last-child {
  border: 2px solid #fdd900;
  color: #fdd900;
  padding: 0 20px;
  border-radius: 5px;
}
</style>