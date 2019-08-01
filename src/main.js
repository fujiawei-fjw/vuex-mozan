import Vue from "vue";
import App from "./App.vue";
import "./assets/glocal.css";
import PUBLICURL from "./link";
import "./assets/iconfont/iconfont.css";
import router from "./router";
import store from "./store/index";
Vue.prototype.$publicUrl = PUBLICURL;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
