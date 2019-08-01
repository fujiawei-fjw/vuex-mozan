<template>
  <div class="cashierTop">
    <div class="paytop">
      <div class="paytop-top">
        <div>
          <h3>收银台</h3>
        </div>
        <div class="payTop-right">
          <div>
            <span>购物车</span>
            <span class="bottomLine"></span>
          </div>
          <div>
            <span>填写订单</span>
            <span class="bottomLine"></span>
          </div>
          <div>
            <span>付款,购买成功</span>
            <span class="bottomLine"></span>
          </div>
        </div>
        <img src="./../assets/images/yellowbg_03.jpg" alt />
      </div>
    </div>
  </div>
</template>
 
<script>
import PayTop from "./PayTop";
export default {
  name: "cashierTop",
  components: {
    PayTop
  }
};
</script>

<style>
.cashierTop {
  padding-bottom: 80px;
  background-color: #fff;
}
.cashierTop .payTop-right > div:first-child > span:first-child,
.cashierTop .payTop-right > div:nth-child(2) > span:first-child {
  font-weight: normal;
}
.cashierTop .payTop-right > div:first-child > span:last-child,
.cashierTop .payTop-right > div:nth-child(2) > span:last-child {
  padding-bottom: 2px;
}
.cashierTop .payTop-right > div:last-child > span:first-child {
  font-weight: bolder;
}
.cashierTop .payTop-right > div:last-child > span:last-child {
  padding-bottom: 5px;
}
</style>