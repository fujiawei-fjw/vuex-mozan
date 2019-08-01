import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Pay from "./components/Pay.vue";
import ShopCart from "./components/ShopCart.vue";
import FillIn from "./components/FillIn.vue";
import Cashier from "./components/Cashier.vue";
import PUBLICURL from "./link";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: PUBLICURL,
      component: Home
    },
    {
      path: `${PUBLICURL}pay`,
      component: Pay
    },
    {
      path: `${PUBLICURL}shopcart`,
      component: ShopCart
    },
    {
      path: `${PUBLICURL}fillIn`,
      component: FillIn
    },
    {
      path: `${PUBLICURL}cashier`,
      component: Cashier
    }
  ],
  mode: "hash"
});
