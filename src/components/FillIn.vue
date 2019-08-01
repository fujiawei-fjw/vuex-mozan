<template>
  <div class="fillIn">
    <div class="inner">
      <div>
        <div class="paytop">
          <div class="paytop-top">
            <div>
              <h3>填写地址</h3>
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
      <div class="address">
        <div>
          <h4>收货地址</h4>
          <h4 @click="addAddress">
            <span>+</span> 新增地址
          </h4>
        </div>
        <ul v-if="showAll">
          <li v-for="address in addresses" :key="address.id">
            <div class="liInner" :class="address.isLiActive?'checked ':'bgBorder'">
              <div @click="changeLiactive({id:address.id})">
                <div>
                  <span class="iconfont icon-ren"></span>
                  <span>{{address.name}}</span>
                </div>
                <div>
                  <span class="iconfont icon-dizhi"></span>
                  <span>{{address.address}}</span>
                </div>
                <div>
                  <span class="iconfont icon-weibiaoti-"></span>
                  <span>{{address.telephone.slice(0,3)+'****'+address.telephone.slice(7,11)}}</span>
                </div>
              </div>
              <div>
                <span class="default" v-if="address.isDefault">默认</span>
                <span v-else @click="changeDefault({id:address.id})">设为默认</span>
                <span>
                  <span class="iconfont icon-jia"></span> 编辑
                </span>
                <span>
                  <div class="delBox" v-show="address.isDelAddress">
                    <span @click="delLiAddress({id:address.id})">确定删除</span>
                    <span class="iconfont icon-shang"></span>
                    <span @click="changeDelAddress({id:address.id})">不删除</span>
                  </div>
                  <span @click="changeDelAddress({id:address.id})" class="iconfont icon-shanchu">删除</span>
                </span>
              </div>
            </div>
          </li>
        </ul>
        <ul v-else>
          <li v-for="address in addressesShow" :key="address.id">
            <div class="liInner" :class="address.isLiActive?'checked ':'bgBorder'">
              <div @click="changeLiactive({id:address.id})">
                <div>
                  <span class="iconfont icon-ren"></span>
                  <span>{{address.name}}</span>
                </div>
                <div>
                  <span class="iconfont icon-dizhi"></span>
                  <span>{{address.address}}</span>
                </div>
                <div>
                  <span class="iconfont icon-weibiaoti-"></span>
                  <span>{{address.telephone.slice(0,3)+'****'+address.telephone.slice(7,11)}}</span>
                </div>
              </div>
              <div>
                <span class="default" v-if="address.isDefault">默认</span>
                <span v-else @click="changeDefault({id:address.id})">设为默认</span>
                <span>
                  <span class="iconfont icon-jia"></span> 编辑
                </span>
                <span>
                  <div class="delBox" v-show="address.isDelAddress">
                    <span @click="delLiAddress({id:address.id})">确定删除</span>
                    <span class="iconfont icon-shang"></span>
                    <span @click="changeDelAddress({id:address.id})">不删除</span>
                  </div>
                  <span @click="changeDelAddress({id:address.id})" class="iconfont icon-shanchu">删除</span>
                </span>
              </div>
            </div>
          </li>
        </ul>
        <p @click="changeShow" v-if="showAll">收回</p>
        <p @click="changeShow" v-else>显示更多</p>
      </div>
      <div class="payInfo">
        <div>
          <h4>商品信息</h4>
          <span @click="goShopCart">返回购物车修改</span>
        </div>
        <div class="payInfoInner">
          <ul>
            <li v-for="payGood in  needToPays" :key="payGood.id">
              <div class="payInfoLi">
                <div>
                  <img :src="payGood.src" alt />
                  <img v-if="payGood.id==='a11'" src="./../assets/images/yushou.png" alt />
                  <p>{{payGood.text}}</p>
                </div>
                <div>
                  <span>
                    款式:
                    <span>{{payGood.type}}</span>
                  </span>
                  <span>
                    尺码:
                    <span>{{payGood.size}}</span>
                  </span>
                </div>
                <div>
                  <span>￥{{payGood.price.toFixed(2)}}</span>
                </div>
                <div>
                  <span>X{{payGood.num}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="payMode">
          <div>
            <h2>支付方式</h2>
            <span class="checked">在线支付</span>
          </div>
          <div>
            <h2>物流方式</h2>
            <span class="checked">普通快递</span>
          </div>
          <div>
            <h2>发票信息</h2>
            <span @click="uninvoice" :class="uninvoiceStyle?'checked ':'checked unchecked'">不开发票</span>
            <span @click="invoice" :class="invoiceStyle?'checked ':'checked unchecked'">开发票</span>
            <input type="text" placeholder="请输入个人/单位名称" />
            <button>保存</button>
          </div>
        </div>
      </div>
      <div class="payInformation">
        <div>
          <p>备注</p>
          <textarea></textarea>
        </div>
        <div>
          <p>清算</p>
          <div>
            <ul>
              <li>
                <span class="redColor">
                  {{payGoodInfo.num}}
                  <span>件商品，总金额：</span>
                </span>
                <span>￥{{payGoodInfo.price}}</span>
              </li>
              <li>
                <span>优惠金额：</span>
                <span>-￥{{payGoodInfo.discount}}</span>
              </li>
              <li>
                <span>运费：</span>
                <span>￥{{payGoodInfo.freight}}</span>
              </li>
              <li>
                <span>应付总额：</span>
                <span class="redColor">￥{{payGoodInfo.money}}</span>
              </li>
            </ul>
          </div>
          <div>
            <button @click="goCashier">提交订单</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 蒙版 -->
    <div class="fillIn_mask" v-if="isAddAddress"></div>
    <AddAddress />
    <!-- end -->
  </div>
</template>
 
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import PayTop from "./PayTop";
import AddAddress from "./AddAddress";
export default {
  name: "fillIn",
  components: {
    PayTop,
    AddAddress
  },
  computed: {
    ...mapState({
      isAddAddress: state => state.fillIn.isAddAddress,
      addresses: state => state.fillIn.addresses,
      showAll: state => state.fillIn.showAll,
      uninvoiceStyle: state => state.fillIn.uninvoiceStyle,
      invoiceStyle: state => state.fillIn.invoiceStyle
    }),
    ...mapGetters({
      payGoodInfo: "payGoodInfo",
      needToPays: "needToPays",
      addressesShow: "addressesShow"
    })
  },
  methods: {
    ...mapMutations({
      changeDelAddress: "changeDelAddress",
      delLiAddress: "delLiAddress",
      changeDefault: "changeDefault",
      changeLiactive: "changeLiactive",
      changeShow: "changeShow",
      uninvoice: "uninvoice",
      invoice: "invoice",
      addAddress: "addAddress"
    }),
    goShopCart() {
      this.$router.push(`${this.$publicUrl}shopcart`);
    },
    goCashier() {
      this.$router.push(`${this.$publicUrl}cashier`);
    }
  }
};
</script>

<style>
.bgBorder {
  border: 2px solid #fff;
}
/*  */
.fillIn .payTop-right > div:first-child > span:first-child {
  font-weight: normal;
}
.fillIn .payTop-right > div:first-child > span:last-child {
  padding-bottom: 2px;
}
.fillIn .payTop-right > div:nth-child(2) > span:first-child {
  font-weight: bolder;
}
.fillIn .payTop-right > div:nth-child(2) > span:last-child {
  padding-bottom: 5px;
}

.fillIn .address {
  background-color: #fff;
  padding: 80px 50px 0;
}
.fillIn .address > div {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
}
.fillIn .address > div:first-child {
  border-bottom: 2px solid #000;
}
.fillIn .address > div > h4:last-child {
  display: flex;
}
.fillIn .address > div > h4:last-child > span {
  border: 1px solid #2b2e33;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
}
.fillIn .address > ul {
  margin: 0;
  padding: 0;
  margin-top: 10px;
}
.fillIn .address > ul span {
  color: rgba(29, 28, 28, 0.897);
}
.fillIn .address > ul > li + li {
  border-top: 1px solid #ccc;
}
.fillIn .liInner {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  margin: 5px 0;
}
.fillIn .liInner > div:first-child > div > span:first-child {
  margin-right: 5px;
}
.fillIn .liInner > div:last-child > span {
  margin-right: 30px;
}
.fillIn .liInner > div:last-child > span:last-child {
  position: relative;
}
.fillIn .liInner > div:last-child > span:last-child .delBox span {
  color: #fff;
}
.fillIn .liInner > div:last-child > span:last-child .delBox span:nth-child(2) {
  color: #2b2e33;
}
.fillIn .address > p {
  margin-bottom: 0;
  width: 100%;
  line-height: 60px;
  background-image: url("./../assets/images/cart-bg.jpg");
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
}
/* .payInfo */
.fillIn .payInfo {
  padding: 30px 50px;
  background-color: #fff;
}
.fillIn .payInfo > div:first-child {
  display: flex;
  justify-content: space-between;
}
.fillIn .payInfo > div:first-child > h4 {
  margin: 0;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
}
.fillIn .payInfo > div:first-child > span {
  line-height: 30px;
}
.fillIn .payInfoInner ul {
  margin: 0;
  padding: 10px 0;
  border-top: 2px solid #111;
  border-bottom: 2px solid #111;
}
.fillIn .payInfoInner ul li + li {
  border-top: 1px solid #ccc;
}
.fillIn .payInfoLi {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fillIn .payInfoLi > div:first-child {
  display: flex;
  width: 600px;
  align-items: center;
}
.fillIn .payInfoLi > div:first-child img {
  width: 66px;
  margin-right: 10px;
}
.fillIn .payInfoLi > div:first-child p {
  padding-left: 20px;
}
.fillIn .payInfoLi > div:nth-child(2) > span {
  margin-right: 30px;
}
.fillIn .payMode {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ccc;
  padding: 20px 0;
}
.fillIn .payMode > div {
  display: flex;
  align-items: center;
}
.fillIn .payMode > div span {
  padding: 5px 20px;
}
.checked {
  background-image: url("./../assets/images/border_10.jpg");
  border: 2px solid #fdd900;
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 10px;
}
.unchecked {
  border: 2px solid #ccc;
  background-image: none;
}
.fillIn .payMode h2 {
  margin-right: 20px;
}
.fillIn .payMode > div:last-child span {
  margin-right: 10px;
}
.fillIn .payMode > div:last-child input {
  border: 1px solid #ccc;
  padding: 9px;
  outline: none;
  border-radius: 5px;
  margin-right: 10px;
}
.fillIn .payMode > div:last-child button {
  background-color: #fdd900;
  border: none;
  padding: 8px;
}
.fillIn .payInformation {
  background-color: #fff;
  padding: 30px 50px 80px;
  display: flex;
  justify-content: space-between;
}
.fillIn .payInformation > div > p {
  margin-top: 0;
  font-weight: bold;
  font-size: 20px;
  border-bottom: 2px solid rgb(39, 38, 38);
  padding-bottom: 20px;
}
.fillIn .payInformation > div:first-child {
  flex-shrink: 0;
  width: 350px;
  margin-right: 50px;
}
.fillIn .payInformation > div:first-child textarea {
  width: 100%;
  height: 200px;
  resize: none;
}
.fillIn .payInformation > div:last-child {
  flex-grow: 1;
  text-align: right;
}
.fillIn .payInformation > div:last-child ul > li {
  display: flex;
}
.fillIn .payInformation > div:last-child ul > li > span:first-child {
  display: block;
  width: 500px;
  flex-shrink: 0;
}
.fillIn .payInformation > div:last-child ul > li > span:last-child {
  flex-grow: 1;
}
.fillIn span.redColor {
  color: red;
}
.fillIn span.redColor > span {
  color: #000;
}
.fillIn .borderTop {
  border-top: none;
}
.fillIn .address .default {
  padding: 3px 8px;
  background-color: rgba(34, 34, 34, 0.863);
  color: rgba(231, 229, 229, 0.925);
}
.fillIn .payInformation > div:last-child > div:last-child button {
  padding: 8px 25px;
  line-height: 30px;
  background-color: #fdd900;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  outline: none;
  margin-top: 20px;
}
.fillIn_mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(87, 87, 87, 0.644);
  z-index: 333;
}
</style>