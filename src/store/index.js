import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import pay from "./modules/pay";
import fillIn from "./modules/fillIn";
import cashier from "./modules/cashier";
import checkgoods from "./modules/checkgoods";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    submission(state, payload) {
      if (
        payload.value === 123123 &&
        payload.text === 123123 &&
        payload.code === "hvdhn"
      ) {
        state.checkgoods.isLogin = false;
        state.isLogin = true;
      } else if (payload.value != 123123) {
        alert("用户名不对");
      } else if (payload.text != 123123) {
        alert("密码不对");
      } else if (payload.code != "hvdhn") {
        alert("验证码不对，请重新输入");
      }
    }
  },
  modules: {
    home,
    pay,
    checkgoods,
    fillIn,
    cashier
  }
});
