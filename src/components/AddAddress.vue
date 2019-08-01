<template>
  <div class="fillIn_maskMain" v-if="isAddAddress">
    <div>
      <span>新增地址</span>
      <span @click="addAddress" class="iconfont icon-cuo"></span>
    </div>
    <!--  -->
    <div class="addAddressMain">
      <div>
        <div class="addAddressMain_left">
          <div class="article">
            <span>
              <span class="Identification">*</span> 收货人
            </span>
            <span class="Identification" v-show="havName">请填写收货人！</span>
          </div>
          <input v-model="name" type="text" />
        </div>
        <div class="addAddressMain_right">
          <div class="article">
            <span>
              <span class="Identification">*</span> 联系电话
            </span>

            <span class="Identification" v-show="havPhoneNum">填写的手机号格式错误！</span>
          </div>
          <input v-model="phoneNum" type="text" />
        </div>
      </div>
      <!-- 第一个 -->
      <div>
        <div>
          <span>
            <span class="Identification">*</span> 所在地区
          </span>
          <span class="Identification" v-show="havWhere">请填写完整的所在地！</span>
        </div>
        <VDistpicker @selected="onSelected" :placeholders="placeholders"></VDistpicker>
      </div>
      <!-- 第二个 -->
      <div>
        <div class="article">
          <span>
            <span class="Identi8fication">*</span> 详细地址
          </span>
          <span class="Identification" v-show="havDetail">请填写详细地址！</span>
        </div>
        <input v-model="detailAddress" type="text" />
      </div>
      <div>
        <div>
          <p>地址别名</p>
          <input v-model="alias" type="text" />
        </div>
        <div>
          <p>常用别名</p>
          <div>
            <span>家</span>
            <span>公司</span>
            <span>父母家</span>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div>
      <div>
        <span @click="addDefault">
          <span v-show="havDefault" class="iconfont icon-duihao"></span>
        </span>
        <span>设为默认地址</span>
      </div>
      <div>
        <button
          @click="addNewAddress(
          {
            name:name,
            phoneNum:phoneNum,
            where:where,
            detailAddress:detailAddress,
            alias:alias
          }
          )"
        >保存地址</button>
      </div>
    </div>
  </div>
</template>
 
<script>
import { mapState, mapMutations } from "vuex";
import VDistpicker from "v-distpicker";
export default {
  name: "addAddress",
  data() {
    return {
      placeholders: {
        province: "请选择",
        city: "请选择",
        area: "请选择"
      },
      name: "某某某",
      phoneNum: "176****8056",
      where: "",
      detailAddress: "1111",
      alias: "木有"
    };
  },
  components: {
    VDistpicker
  },
  computed: {
    ...mapState({
      isAddAddress: state => state.fillIn.isAddAddress,
      havName: state => state.fillIn.havName,
      havPhoneNum: state => state.fillIn.havPhoneNum,
      havWhere: state => state.fillIn.havWhere,
      havDetail: state => state.fillIn.havDetail,
      havDefault: state => state.fillIn.havDefault
    })
  },
  methods: {
    onSelected(data) {
      this.where = data.province.value + data.city.value + data.area.value;
    },
    ...mapMutations({
      addAddress: "addAddress",
      addDefault: "addDefault",
      addNewAddress: "addNewAddress"
    })
  }
};
</script>

<style>
.fillIn_maskMain {
  position: fixed;
  top: 10%;
  left: 25%;
  width: 600px;
  background-color: #fff;
  z-index: 999;
  width: 700px;
  padding: 20px;
}
.fillIn_maskMain > div:first-child {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 2px solid #222;
}
.fillIn_maskMain > div:first-child > span:first-child {
  font-size: 18px;
  font-weight: bold;
}
.fillIn_maskMain > div:last-child {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  align-items: center;
}
.fillIn_maskMain > div:last-child > div {
  display: flex;
  align-items: center;
}
.fillIn_maskMain > div:last-child > div > span:first-child {
  border: 1px solid rgb(158, 157, 157);
  width: 20px;
  height: 20px;
  display: block;
}
.fillIn_maskMain > div:last-child > div > span:first-child > span {
  line-height: 20px;
  text-align: center;
}
.fillIn_maskMain > div:last-child > div > button {
  background-color: #fdd900;
  padding: 15px 35px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: bold;
}
.fillIn .addAddressMain input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
}
.fillIn .addAddressMain .Identification {
  color: red;
}
.fillIn .addAddressMain > div {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.fillIn .addAddressMain > div:last-child > div {
  flex-shrink: 0;
}
.fillIn .addAddressMain > div:last-child > div p {
  margin-bottom: 0;
}
.fillIn .addAddressMain > div:last-child > div:first-child {
  flex-grow: 1;
  margin-right: 20px;
}
.fillIn .addAddressMain > div:last-child > div:first-child > input {
  width: 100%;
  padding: 8px;
}
.fillIn .addAddressMain > div:last-child > div > div {
  display: flex;
}
.fillIn .addAddressMain > div:last-child > div > div span {
  border: 1px solid #333;
  width: 66px;
  text-align: center;
  margin-left: 5px;
  height: 35px;
  line-height: 35px;
}
.fillIn .article {
  display: flex;
  justify-content: space-between;
}
.fillIn .addAddressMain_left {
  flex-shrink: 0;
  width: 210px;
  margin-right: 10px;
}
.fillIn .addAddressMain_right {
  flex-grow: 1;
}
.fillIn .addAddressMain > div:nth-child(3) {
  display: block;
}
.fillIn .addAddressMain > div:nth-child(2) {
  display: block;
}
.fillIn .addAddressMain > div:nth-child(2) > div:first-child {
  display: flex;
  justify-content: space-between;
}
.fillIn .addAddressMain select {
  width: 33%;
  border: 1px solid #ccc;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: url("./../assets/images/select_07.jpg") no-repeat scroll right
    center transparent;
  background-size: contain;
}
.fillIn .addAddressMain .distpicker-address-wrapper {
  display: flex;
  justify-content: space-between;
}
.fillIn .distpicker-address-wrapper select {
  padding: 5px;
}
</style>