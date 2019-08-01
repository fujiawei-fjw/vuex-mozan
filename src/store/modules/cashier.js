const cashier = {
  state: {
    payPag: false,
    payAfter: false,
    payFinished: false,
    creatNum: 60,
    pay_zhi: true,
    pay_wei: false
  },
  mutations: {
    changePayPag(state) {
      state.payPag = true;
    },

    payFinish(state) {
      state.payPag = false;
      state.payAfter = false;
      state.payFinished = true;
    },
    payStyle_zhi(state) {
      state.pay_zhi = true;
      state.pay_wei = false;
    },
    payStyle_wei(state) {
      state.pay_zhi = false;
      state.pay_wei = true;
    }
  },
  actions: {},
  getters: {
    payThings(state, getters, rootState, rootGetters) {
      return rootGetters.payGoodInfo;
    },
    payPeople(state, getters, rootState) {
      return rootState.fillIn.addresses.find(item => item.isLiActive === true);
    },
    lessNum(state) {
      setInterval(() => {
        state.creatNum--;
      }, 1000);
    },
    goNext(state) {
      setTimeout(() => {
        state.payPag = false;
        state.payAfter = true;
      }, 5000);
    }
  }
};
export default cashier;
