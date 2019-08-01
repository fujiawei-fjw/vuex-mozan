const fillIn = {
  state: {
    isAddAddress: false,
    showAll: false,
    uninvoiceStyle: false,
    invoiceStyle: true,
    addresses: [
      {
        id: "n111",
        name: "阿不来提 · 阿不都热西提",
        address: "河北省秦皇岛市海港区秦海路84号",
        telephone: "176*****8056",
        isLiActive: false,
        isDefault: false,
        isDelAddress: false
      },
      {
        id: "n222",
        name: "阿不来提",
        address: "河北省秦皇岛市海港区秦海路84号",
        telephone: "176*****8056",
        isLiActive: false,
        isDefault: true,
        isDelAddress: false
      }
    ],
    havName: false,
    havPhoneNum: false,
    havWhere: false,
    havDetail: false,
    havDefault: false
  },
  mutations: {
    changeDelAddress(state, payload) {
      const nowDel = state.addresses.find(item => item.id === payload.id);
      nowDel.isDelAddress = !nowDel.isDelAddress;
    },
    changeDefault(state, payload) {
      const nowDel = state.addresses.find(item => item.id === payload.id);
      const oldDefault = state.addresses.find(item => item.isDefault === true);
      oldDefault.isDefault = !oldDefault.isDefault;
      nowDel.isDefault = !nowDel.isDefault;
    },
    changeLiactive(state, payload) {
      const nowDel = state.addresses.find(item => item.id === payload.id);
      const oldDefault = state.addresses.find(item => item.isLiActive === true);
      oldDefault.isLiActive = !oldDefault.isLiActive;
      nowDel.isLiActive = !nowDel.isLiActive;
    },
    delLiAddress(state, payload) {
      state.addresses = state.addresses.filter(item => item.id != payload.id);
    },
    addAddress(state) {
      state.isAddAddress = !state.isAddAddress;
    },
    changeShow(state) {
      state.showAll = !state.showAll;
    },
    uninvoice(state) {
      state.uninvoiceStyle = true;
      state.invoiceStyle = false;
    },
    invoice(state) {
      state.uninvoiceStyle = false;
      state.invoiceStyle = true;
    },
    addDefault(state) {
      state.havDefault = !state.havDefault;
    },
    addNewAddress(state, payload) {
      const addNew = {
        name: payload.name,
        telephone: payload.phoneNum,
        address:
          payload.where + payload.detailAddress + "(" + payload.alias + ")",
        isLiActive: false,
        isDefault: state.havDefault,
        isDelAddress: false
      };
      if (!payload.name) {
        state.havName = !state.havName;
      } else if (!payload.phoneNum) {
        state.havPhoneNum = !state.havPhoneNum;
      } else if (!payload.where) {
        state.havWhere = !state.havWhere;
      } else if (!payload.detailAddress) {
        state.havDetail = !state.havDetail;
      } else if (
        payload.name &&
        payload.phoneNum &&
        payload.where &&
        payload.detailAddress
      ) {
        state.addresses.push(addNew);
        const oldDefault = state.addresses.find(
          item => item.isDefault === true
        );
        oldDefault.isDefault = !oldDefault.isDefault;
        state.isAddAddress = !state.isAddAddress;
        state.havName = false;
        state.havPhoneNum = false;
        state.havWhere = false;
        state.havDetail = false;
      }
    }
  },
  actions: {},
  getters: {
    addressesShow(state) {
      return state.addresses.slice(0, 3);
    },
    needToPays(state, getters, rootState) {
      const havGoods = rootState.checkgoods.shopCarts.filter(
        item => item.status === "on"
      );
      return havGoods.filter(item => item.isCheck === true);
    },
    payGoodInfo(state, getters) {
      const payNum = getters.needToPays.length;
      const payPrice = getters.needToPays.reduce((res, item) => {
        return (res = res + item.price * item.num);
      }, 0);
      const payDiscount = 100;
      const payFreight = 10;
      const payMoney = payPrice - payDiscount + payFreight;
      const payInfo = {
        id: "asudyoaisu",
        num: payNum,
        price: payPrice.toFixed(2),
        discount: payDiscount.toFixed(2),
        freight: payFreight.toFixed(2),
        money: payMoney.toFixed(2)
      };
      return payInfo;
    }
  }
};
export default fillIn;
