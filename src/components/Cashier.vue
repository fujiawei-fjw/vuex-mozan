<template>
  <div class="cashier">
    <div class="inner">
      <CashierTop />
      <div class="payfinish" v-if="payFinished">
        <div>
          <img src="./../assets/images/afterpay1.jpg" alt />
        </div>
        <div>
          <p>支付成功!</p>
          <div>
            <div>
              <p>订单号：2342342342</p>
              <p>成功支付:{{payThings.money}}</p>
            </div>
            <div>
              <span @click="gohome">继续逛逛</span>
              <span>查看订单</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cashierMain" v-else>
        <div class="cashierMainTop">
          <p>订单提交成功，请您尽快付款！</p>
          <div>
            <span>
              请您在提交订单的
              <span>24小时</span>内完成支付，否则订单回自动取消。
            </span>
            <span>
              应付金额：
              <span>￥{{payThings.money}}</span>
            </span>
          </div>
        </div>
        <div class="cashierMainSection">
          <div>
            <div>
              <p>订单号：1231353463</p>
            </div>
            <div>
              <span class="iconfont icon-ren">
                <span>{{payPeople.name}}</span>
              </span>
              <span class="iconfont icon-weibiaoti-">
                <span>{{payPeople.telephone.slice(0,3)+'****'+payPeople.telephone.slice(7,11)}}</span>
              </span>
              <p>
                <span class="iconfont icon-dizhi"></span>
                {{payPeople.address}}
              </p>
            </div>
          </div>
          <div>
            <h3>选择支付方式</h3>
            <div :class="pay_zhi?'checked':'unchecked'">
              <img @click="payStyle_zhi" src="./../assets/images/pay1.jpg" alt />
            </div>
            <div :class="pay_wei?'checked':'unchecked'">
              <img @click="payStyle_wei" src="./../assets/images/pay2.jpg" alt />
            </div>
          </div>
        </div>
        <div v-if="payPag">
          <PayPag />
        </div>
        <div v-else class="pay">
          <button @click="changePayPag">付款</button>
        </div>
      </div>
    </div>
    <div class="cashier_mask" v-if="payafter"></div>
    <div class="cashier_paySucssess" v-if="payafter">
      <div>
        <span>收银台</span>
        <span @click="payFinish" class="iconfont icon-cuo"></span>
      </div>
      <div>
        <div>
          <p>
            请您在新打开的网上银行页面进行支付
            <br />支付完成前请不要退出该页面
          </p>
        </div>
        <div>
          <span @click="payFinish">已完成支付</span>
          <span>支付遇到问题</span>
        </div>
      </div>
      <div>
        <p>选择其他支付方式</p>
      </div>
    </div>
  </div>
</template>
 
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import CashierTop from "./CashierTop";
import PayPag from "./PayPag";
export default {
  name: "cashier",
  components: {
    CashierTop,
    PayPag
  },
  computed: {
    ...mapGetters({
      payThings: "payThings",
      payPeople: "payPeople"
    }),
    ...mapState({
      payPag: state => state.cashier.payPag,
      payafter: state => state.cashier.payAfter,
      payFinished: state => state.cashier.payFinished,
      pay_zhi: state => state.cashier.pay_zhi,
      pay_wei: state => state.cashier.pay_wei
    })
  },
  methods: {
    ...mapMutations({
      changePayPag: "changePayPag",
      payFinish: "payFinish",
      payStyle_zhi: "payStyle_zhi",
      payStyle_wei: "payStyle_wei"
    }),
    gohome() {
      this.$router.push(`${this.$publicUrl}`);
    }
  }
};
</script>

<style>
.cashier .cashierMain {
  background-color: #fff;
  padding: 0 50px 100px;
}
.cashier .cashierMain p {
  margin: 0;
}
.cashier .cashierMainTop > p {
  font-size: 20px;
  font-weight: bold;
}
.cashier .cashierMainTop > div {
  display: flex;
  justify-content: space-between;
}
.cashier .cashierMainTop > div > span > span {
  color: red;
}
.cashier .cashierMainTop > div > span:last-child > span {
  font-size: 20px;
}
.cashier .cashierMainSection {
  margin-top: 20px;
  border-top: 2px solid #222;
  border-bottom: 2px solid #222;
}
.cashier .cashierMainSection > div {
  padding: 20px 0;
}
.cashier .cashierMainSection > div + div {
  border-top: 2px solid #ccc;
}
.cashier .cashierMainSection > div:first-child {
  display: flex;
  justify-content: space-between;
}
.cashier .cashierMainSection > div:first-child > div:first-child > p {
  font-size: 20px;
  font-weight: bold;
}
.cashier
  .cashierMainSection
  > div:first-child
  > div:last-child
  > span:first-child {
  margin-right: 20px;
}
.cashier .cashierMainSection > div:last-child {
  display: flex;
  align-items: center;
}
.cashier .cashierMainSection > div:last-child h3 {
  margin: 0;
}
.cashier .cashierMainSection > div:last-child > div {
  padding: 5px 30px;
  height: 37px;
  margin-left: 20px;
}
.cashier .cashierMainSection > div:last-child img {
  display: block;
  width: 60px;
}
.cashier .cashierMain .pay {
  text-align: right;
  padding-top: 30px;
}
.cashier .cashierMain .pay > button {
  background-color: #fdd900;
  padding: 10px 50px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
}

.cashier_mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 666;
  background-color: #a8a7ac94;
}
.cashier .cashier_paySucssess {
  position: absolute;
  top: 25%;
  left: 25%;
  z-index: 999;
  background-color: #fff;
  width: 700px;
  padding: 0 20px;
}
.cashier .cashier_paySucssess > div:first-child {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  line-height: 96px;
  border-bottom: 2px solid #222;
}
.cashier .cashier_paySucssess > div:nth-child(2) {
  padding: 30px 0;
  border-bottom: 2px solid #222;
}
.cashier .cashier_paySucssess > div:nth-child(2) > div:first-child {
  text-align: center;
  font-size: 18px;
}
.cashier .cashier_paySucssess > div:nth-child(2) > div:last-child {
  display: flex;
  justify-content: space-between;
}
.cashier .cashier_paySucssess > div:nth-child(2) > div:last-child span {
  background-color: #2b2e33;
  padding: 15px 30px;
  color: #fff;
  font-weight: bolder;
}
.cashier .cashier_paySucssess > div:last-child {
  text-align: center;
}
.cashier .cashier_paySucssess > div:last-child > p {
  color: #6cbced;
  margin: 20px 0;
  font-size: 18px;
}
.cashier .payfinish {
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 20px 50px 80px;
}
.cashier .payfinish > div {
  flex-shrink: 0;
}
.cashier .payfinish > div:last-child {
  flex-grow: 1;
  margin-left: 20px;
}
.cashier .payfinish > div:last-child > p {
  padding-bottom: 20px;
  border-bottom: 2px solid #222;
  font-weight: bolder;
  font-size: 18px;
}
.cashier .payfinish > div:last-child > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cashier .payfinish > div:last-child > div p {
  font-weight: bold;
}
.cashier .payfinish > div:last-child > div > div span {
  padding: 15px 35px;
  background-color: #fdd900;
  margin-left: 10px;
  font-size: 20px;
}
</style>