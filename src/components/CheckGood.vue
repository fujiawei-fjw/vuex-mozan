<template>
  <div class="checkGoods">
    <div class="checkGoods-top">
      <!-- 单选 -->
      <div class="checkBox">
        <input type="checkbox" id="all" />
        <label @click="changeAll" :class="checkType?'labelBg':''" for="all">
          <span v-show="checkType" class="iconfont icon-duihao"></span>
        </label>
        全选
      </div>
      <div class="goodInfo-Box">
        <div>商品</div>
        <div>单价</div>
        <div>数量</div>
        <div>小计</div>
      </div>
      <div class="del">操作</div>
    </div>

    <!-- v-for -->
    <div class="cartLists">
      <ul>
        <li v-for="checkGood in shopCarts" :key="checkGood.id">
          <!--  -->
          <div class="cartLists-contain">
            <div class="checkBox">
              <input type="checkbox" :id="checkGood.id" />
              <label
                :class="checkGood.isCheck?'labelBg':''"
                @click="changeCheck({id:checkGood.id})"
                :for="checkGood.id"
              >
                <span v-show="checkGood.isCheck" class="iconfont icon-duihao"></span>
              </label>
            </div>
            <!--  -->
            <div :class="checkGood.status==='on'?'goodInfoBox':'goodInfoBox lineBg'">
              <div>
                <img :src="checkGood.src" alt />
              </div>
              <div class="status">
                <div v-if="checkGood.status!='on'">{{checkGood.status}}</div>
              </div>
              <div>
                <p>{{checkGood.text}}</p>
                <span>
                  款式:
                  <span>{{checkGood.type}}</span>
                </span>
                <span>
                  尺码:
                  <span>{{checkGood.size}}</span>
                </span>
              </div>
              <div>￥{{checkGood.price.toFixed(2)}}</div>
              <div>
                <span @click="loseCartNum({id:checkGood.id})">-</span>
                <span>{{checkGood.num}}</span>
                <span @click="addCartNum({id:checkGood.id})">+</span>
              </div>
              <div>{{(checkGood.price*checkGood.num).toFixed(2)}}</div>
            </div>
            <!--  -->
            <div class="del">
              <div class="delBox" v-show="checkGood.isDel">
                <span @click="delCartLists({id:checkGood.id})">确定删除</span>
                <span class="iconfont icon-shang"></span>
                <span @click="delMain({id:checkGood.id})">不删除</span>
              </div>
              <span @click="delMain({id:checkGood.id})" class="iconfont icon-cuo"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- end -->
    <div class="headquarters">
      <div class="headquartersLeft">
        <div class="headquartersLM">
          <div class="checkBox">
            <input type="checkbox" id="all" />
            <label @click="changeAll" :class="checkType?'labelBg':''" for="all">
              <span v-show="checkType" class="iconfont icon-duihao"></span>
            </label>
            全选
          </div>
          <!-- 删除 -->
          <div @click="delMainFooter">
            <div class="delBox" v-show="delMainF">
              <span @click="delAll">确定删除</span>
              <span class="iconfont icon-xiala"></span>
              <span @click="noDel">不删除</span>
            </div>
            <span class="iconfont icon-shanchu"></span>
            <span>删除</span>
          </div>
          <!--  -->
          <div>
            <span class="iconfont icon-mofabang"></span>
            <span>转到愿望单</span>
          </div>
          <div>
            <p>
              共
              <span>{{shopCarts.length}}</span>件商品,已选择
              <span>{{checkNum}}</span>件
            </p>
          </div>
        </div>
        <div>
          <div>
            <span>合计:</span>
            <span>[不含运费]</span>
          </div>
          <div>
            <h3>￥{{totals}}</h3>
          </div>
        </div>
      </div>
      <div>
        <span v-if="isLogin" @click="jumpPag">去结算</span>
        <span v-else @click="login">去结算</span>
      </div>
    </div>
    <!--  -->
  </div>
</template>
 
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "checkGoods",
  computed: {
    ...mapState({
      shopCarts: state => state.checkgoods.shopCarts,
      isDel: state => state.checkgoods.isDel,
      delMainF: state => state.checkgoods.delMainF,
      isLogin: state => state.isLogin
    }),
    ...mapGetters({
      checkType: "checkType",
      checkNum: "checkNum",
      totals: "totals"
    })
  },
  methods: {
    ...mapMutations({
      changeCheck: "changeCheck",
      changeAll: "changeAll",
      loseCartNum: "loseCartNum",
      addCartNum: "addCartNum",
      delCartLists: "delCartLists",
      delMain: "delMain",
      delMainFooter: "delMainFooter",
      noDel: "noDel",
      delAll: "delAll",
      login: "login"
    }),
    jumpPag() {
      this.$router.push(`${this.$publicUrl}fillIn`);
    }
  }
};
</script>

<style>
.checkGoods .checkBox > input {
  display: none;
}
.checkGoods .checkBox > label {
  display: block;
  border: 1px solid #ccc;
  width: 25px;
  text-align: center;
  height: 25px;
  line-height: 25px;
  margin-right: 10px;
}
.labelBg {
  background-color: #fdd900;
}

/*  */
.checkGoods .checkGoods-top {
  display: flex;
  justify-content: space-between;
}
.checkGoods .checkGoods-top > div {
  flex-shrink: 0;
}
.checkGoods .checkBox {
  display: flex;
  width: 100px;
}
.checkGoods .checkGoods-top > div:nth-child(2) {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}
.checkGoods .checkGoods-top > div:nth-child(3) {
  width: 60px;
  text-align: center;
}
.checkGoods .goodInfo-Box {
  padding-left: 10px;
}
.checkGoods .goodInfo-Box > div {
  flex-shrink: 0;
}
.checkGoods .goodInfo-Box > div:first-child {
  width: 267px;
}
.checkGoods .goodInfo-Box > div:nth-child(2) {
  flex-grow: 1;
  padding-left: 30px;
  text-align: center;
  margin-left: -60px;
}
.checkGoods .goodInfo-Box > div:nth-child(3) {
  width: 97px;
}
.checkGoods .goodInfo-Box > div:nth-child(4) {
  text-align: center;
  width: 166px;
}

/* v-for 样式 */
.checkGoods .cartLists .checkBox {
  width: 80px;
}
.checkGoods .cartLists ul {
  margin: 0;
  padding: 0;
  padding: 10px 0;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
}
.checkGoods .cartLists ul li {
  padding: 20px;
}
.checkGoods .cartLists ul li + li {
  border-top: 1px solid #d1d7e3;
}
.checkGoods .cartLists-contain {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.checkGoods .cartLists-contain > div {
  flex-shrink: 0;
}
.checkGoods .goodInfoBox {
  flex-grow: 1;
  display: flex;
  align-items: center;
}
.checkGoods .goodInfoBox > div {
  flex-shrink: 0;
}
.checkGoods .goodInfoBox > div:nth-child(3) {
  width: 338px;
}
.checkGoods .goodInfoBox > div:first-child {
  padding-left: 10px;
}
.checkGoods .goodInfoBox > div:first-child img {
  width: 96px;
  display: block;
}
.checkGoods .goodInfoBox > div:nth-child(3) p {
  width: 240px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
}
.checkGoods .goodInfoBox > div:nth-child(3) > span {
  color: #70737a;
  display: block;
  margin-left: 10px;
}
.checkGoods .goodInfoBox > div:nth-child(4) {
  flex-grow: 1;
}
.checkGoods .goodInfoBox > div:nth-child(5) {
  width: 180px;
  display: flex;
  justify-content: space-between;
}
.checkGoods .goodInfoBox > div:nth-child(5) > span {
  border: 1px solid #2b2e33;
  width: 38px;
  height: 38px;
  line-height: 38px;
  text-align: center;
}
.checkGoods .goodInfoBox > div:nth-child(5) > span:nth-child(2) {
  border: none;
}
.checkGoods .goodInfoBox > div:nth-child(6) {
  width: 150px;
  text-align: center;
}
.checkGoods .lineBg {
  background-image: url("./../assets/images/cart-bg.jpg");
}
.checkGoods .del {
  width: 50px;
  text-align: center;
  position: relative;
}
.delBox {
  width: 200px;
  position: absolute;
  top: 37px;
  left: -127px;
  box-shadow: 0 0 10px red;
  display: flex;
  text-align: center;
}
.delBox > span:first-child {
  background-color: #f50000;
  padding: 5px 8px;
  color: #fff;
  flex-shrink: 0;
}
.delBox > span:nth-child(2).icon-shang {
  position: absolute;
  right: 39px;
  top: -14px;
  color: #2b2e33;
}
.delBox > span:last-child {
  background-color: #2b2e33;
  padding: 5px 10px;
  color: #fff;
  flex-grow: 1;
}

/* 底部 */
.checkGoods .headquarters {
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
}
.checkGoods .headquarters > div:last-child {
  flex-shrink: 0;
  width: 220px;
  background-color: #fdd900;
}
.checkGoods .headquarters > div:last-child > span {
  width: 100%;
  border: none;
  line-height: 62px;
  font-size: 26px;
  color: #2a2f33;
  text-align: center;
  background: #fdd900;
  display: block;
}
.checkGoods .headquartersLeft {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  background-color: #2b2e33;
  padding: 0 20px;
}
.checkGoods .headquartersLeft span {
  color: #ebebeb;
}
.checkGoods .headquartersLeft > div {
  display: flex;
  align-items: center;
}
.checkGoods .headquartersLeft > div:first-child {
  justify-content: space-between;
}
.checkGoods .headquartersLeft > div:last-child > div > span {
  display: block;
  text-align: right;
}
.checkGoods .headquartersLeft > div:last-child > div > h3 {
  text-align: center;
  width: 137px;
  margin: 0;
  padding: 0;
  color: #fdd900;
}
.checkGoods .headquartersLeft > div > div {
  margin: 0 5px;
}
.checkGoods .headquartersLeft .checkBox {
  width: 70px;
  color: #fff;
  line-height: 25px;
}
.checkGoods .headquartersLM > div:nth-child(2) {
  margin-right: 10px;
  position: relative;
}
.checkGoods .headquartersLM > div:nth-child(2) > .delBox {
  top: -55px;
  left: 0;
}
.checkGoods .headquartersLM > div:nth-child(2) > .delBox span {
  margin: 0;
}
.checkGoods
  .headquartersLM
  > div:nth-child(2)
  > .delBox
  span:nth-child(2).icon-xiala {
  position: absolute;
  bottom: -12px;
  left: 15px;
  color: red;
}
.checkGoods .headquartersLM > div:nth-child(3) {
  padding-right: 20px;
  border-right: 2px solid #6f7277;
}
.checkGoods .headquartersLM > div:nth-child(4) {
  padding-left: 20px;
}
.checkGoods .headquartersLM > div:nth-child(2) span {
  margin-right: 5px;
}
.checkGoods .headquartersLM > div:nth-child(3) span {
  margin-right: 5px;
}
.checkGoods .headquartersLM > div:nth-child(4) p {
  color: #ebebeb;
}
.checkGoods .headquartersLM > div:nth-child(4) p > span {
  color: #fdd900;
}
.checkGoods .status {
  margin: 5px;
}
.checkGoods .status > div {
  font-size: 22px;
  font-weight: bolder;
  width: 40px;
  text-align: center;
  border: 2px solid #222;
  border-top: none;
  padding: 10px 0;
}
</style>