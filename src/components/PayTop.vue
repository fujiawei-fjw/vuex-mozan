<template>
  <div class="paytop">
    <div class="paytop-top">
      <div>
        <h3>
          购物车[
          <span>{{shopCarts.length}}</span> 件]
        </h3>
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
</template>
 
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "paytop",
  computed: {
    ...mapState({ shopCarts: state => state.checkgoods.shopCarts })
  }
};
</script>

<style>
.paytop h3 {
  margin: 0;
  padding: 0;
  font-size: 20px;
}
.paytop .paytop-top {
  padding: 20px 50px;
  background-color: #fdd900;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.paytop .paytop-top > div:first-child {
  border-left: 5px solid #000;
  padding-left: 30px;
}
.paytop .paytop-top > div h3 > span {
  color: red;
}
.paytop .paytop-top img {
  position: absolute;
  top: 76px;
  left: 0;
}
.paytop .paytop-top > div:nth-child(2) {
  display: flex;
}
.paytop .paytop-top > div:nth-child(2) span {
  color: #2c2c34;
  display: block;
}
.paytop .paytop-top > div:nth-child(2) > div {
  margin: 0 10px;
}
.paytop .paytop-top .bottomLine {
  width: 100%;
  background-color: #000000;
  padding-bottom: 2px;
  margin-top: 10px;
}
.payTop-right > div:first-child > span:first-child {
  font-weight: bolder;
}
.payTop-right > div:first-child > span:last-child {
  padding-bottom: 5px;
}
</style>