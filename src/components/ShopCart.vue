<template>
  <div class="shoppingCart">
    <div class="inner">
      <div class="shop-top">
        <PayTop />
      </div>
      <div class="shop-bottom" v-if="shopCarts.length">
        <CheckGood />
      </div>
      <div class="shop-bottomK" v-else>
        <img src="./../assets/images/shop2.jpg" alt />
      </div>
    </div>
    <!-- 蒙版 -->
    <div class="black" v-if="isLogin"></div>
    <div class="login" v-if="isLogin">
      <div>
        <p>
          <span @click="close" class="iconfont icon-cuo"></span>
        </p>
        <img src="./../assets/images/bbg_04.jpg" alt />
      </div>
      <div class="ownInfo">
        <div>
          <span class="iconfont icon-ren"></span>
          <input v-model="val" type="text" placeholder="请输入手机号" />
        </div>
        <div>
          <span class="iconfont icon-mima"></span>
          <input v-model="text" type="password" placeholder="请输入密码" />
        </div>
        <div>
          <input v-model="code" placeholder="请输入验证码" type="text" />
          <img src="./../assets/images/yan_03.jpg" alt />
        </div>
        <div>
          <button
            @click="submission({
            value:val,
            text:text,
            code:code,
          })"
          >登录</button>
        </div>
      </div>
      <div>
        <span>忘记密码？</span>
        <span>注册</span>
      </div>
      <div>
        <span class="iconfont icon-icon5"></span>
        <span class="iconfont icon-wchart"></span>
        <span class="iconfont icon-weibo"></span>
      </div>
    </div>
  </div>
</template>
 
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import CheckGood from "./CheckGood";
import PayTop from "./PayTop";
export default {
  name: "shoppingCart",
  components: {
    CheckGood,
    PayTop
  },
  data() {
    return {
      val: 123123,
      text: 123123,
      code: "hvdhn"
    };
  },
  computed: {
    ...mapState({
      shopCarts: state => state.checkgoods.shopCarts,
      isLogin: state => state.checkgoods.isLogin
    })
  },
  methods: {
    ...mapMutations({ submission: "submission", close: "close" })
  }
};
</script>

<style>
.shoppingCart .shop-bottom {
  background-color: #fff;
  padding: 80px 50px 20px 50px;
}
.shoppingCart .shop-bottomK {
  padding-bottom: 200px;
  background-color: #fff;
}
.shoppingCart .shop-bottomK img {
  width: 100%;
  position: relative;
}

.shoppingCart .black {
  background-color: #ccccca;
  opacity: 0.4;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 555;
}
.shoppingCart .login {
  position: fixed;
  width: 422px;
  z-index: 888;
  left: 35%;
  top: 10%;
  background-color: #fff;
  padding: 20px;
}
.shoppingCart .login > div:first-child {
  padding-bottom: 20px;
}
.shoppingCart .login p {
  text-align: right;
}
.shoppingCart .login img {
  display: block;
  margin: 0 auto;
}
.shoppingCart .ownInfo > div {
  margin-bottom: 15px;
  display: flex;
}
.shoppingCart .ownInfo > div > span {
  border: 1px solid #babec9;
  color: #babec9;
  width: 46px;
  text-align: center;
  line-height: 46px;
  flex-shrink: 0;
}
.shoppingCart .ownInfo > div > input {
  border: 1px solid #babec9;
  border-left: none;
  line-height: 46px;
  flex-grow: 1;
  outline: none;
  padding-left: 10px;
}
.shoppingCart .ownInfo > div > img {
  display: block;
  width: 137px;
}
.shoppingCart .ownInfo > div:nth-child(3) > input {
  border-left: 1px solid #babec9;
  margin-right: 10px;
}
.shoppingCart .ownInfo > div:nth-child(4) > button {
  border: none;
  background: #fff500;
  width: 100%;
  line-height: 46px;
  font-size: 20px;
  color: #000;
  border-radius: 5px;
  margin-top: 10px;
  outline: none;
}
.shoppingCart .login > div:nth-child(3) {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.shoppingCart .login > div:nth-child(4) {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.shoppingCart .login > div:nth-child(4) span {
  font-size: 24px;
}
.shoppingCart .login > div:nth-child(4) > span:first-child {
  color: #0c9fec;
}
.shoppingCart .login > div:nth-child(4) > span:nth-child(2) {
  color: #28c62b;
}
.shoppingCart .login > div:nth-child(4) > span:last-child {
  color: #ef0000;
}
</style>