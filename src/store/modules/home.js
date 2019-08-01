const home = {
  state: {
    types: [
      {
        id: "111",
        type: "iphone 5",
        isActive: false
      },
      {
        id: "112",
        type: "iphone 6",
        isActive: false
      },
      {
        id: "113",
        type: "iphone 7",
        isActive: false
      }
    ],
    sizes: [
      {
        id: "660",
        size: "XXS",
        isShow: false
      },
      {
        id: "661",
        size: "XS",
        isShow: false
      },
      {
        id: "662",
        size: "S",
        isShow: false
      },
      {
        id: "663",
        size: "M",
        isShow: false
      },
      {
        id: "664",
        size: "L",
        isShow: false
      },
      {
        id: "665",
        size: "XL",
        isShow: false
      },
      {
        id: "666",
        size: "XXL",
        isShow: false
      }
    ],
    nowType: "",
    nowSize: "",
    nowNum: 1,
    goods: []
  },
  mutations: {
    whichType(state, payload) {
      state.types.filter(item => item.type === payload.type)[0].isActive = true;
      state.types
        .filter(item => item.type != payload.type)
        .map(item => (item.isActive = false));
      state.nowType = payload.type;
    },
    whichSize(state, payload) {
      state.sizes.filter(item => item.size === payload.size)[0].isShow = true;
      state.sizes
        .filter(item => item.size != payload.size)
        .map(item => (item.isShow = false));
      state.nowSize = payload.size;
    },
    add(state) {
      state.nowNum++;
    },
    loss(state) {
      if (state.nowNum > 1) {
        state.nowNum--;
      }
    },
    submit(state, payload) {
      const newInfo = {
        id: "c33",
        src: "https://github.com/shiyunhao/-/blob/master/lunbo1.jpg?raw=true",
        type: state.nowType,
        size: state.nowSize,
        num: state.nowNum,
        price: 700,
        total: (700 * state.nowNum).toFixed(2)
      };
      if (state.nowType && state.nowSize && state.nowNum) {
        state.goods.push(newInfo);
        payload.route();
      } else if (!state.nowType && !state.nowSize) {
        alert("请添加商品后再进行提交");
      } else if (!state.nowType) {
        alert("请选择款式");
      } else if (!state.nowSize) {
        alert("请选择尺码");
      }
      console.log(state.goods);
    }
  },
  actions: {},
  getters: {}
};
export default home;
