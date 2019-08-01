<template>
  <div class="paypag">
    <span v-if="pay_zhi">支付宝支付</span>
    <span v-else>微信支付</span>
    <div>
      <p>
        距离二维码过期还有
        <span>{{creatNum}}</span>秒
        <br />或期后请重新刷新页面获取二维码
      </p>
      <img src="./../assets/images/paypag_03.jpg" alt />
    </div>
  </div>
</template>
 
<script>
import { mapState } from "vuex";
export default {
  name: "paypag",
  computed: {
    ...mapState({
      creatNum: state => state.cashier.creatNum,
      payAfter: state => state.cashier.payAfter,
      payPag: state => state.cashier.payPag,
      pay_zhi: state => state.cashier.pay_zhi
    })
  },
  created() {
    this.$store.getters.lessNum;
    this.$store.getters.goNext;
  }
};
</script>

<style>
.paypag {
  display: flex;
  padding: 20px 0;
}
.paypag > span {
  font-size: 20px;
  font-weight: bold;
  margin-right: 150px;
}
.paypag > div {
  text-align: center;
}
.paypag > div > p {
  line-height: 25px;
}
</style>