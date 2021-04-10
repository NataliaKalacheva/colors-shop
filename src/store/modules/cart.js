import mutations from "@/store/mutations";

const { CART_TOTAL, ADD_CART_ITEM } = mutations;

const cartStore = {
  namespaced: true,
  state: {
    cartItems: [],
    cartTotal: 0,
  },
  getters: {
    cartItems: ({ cartItems }) => cartItems,
    cartTotal: ({ cartTotal }) => cartTotal,
  },
  mutations: {
    [CART_TOTAL](state, value) {
      state.cartTotal = value;
    },
    [ADD_CART_ITEM](state, item) {
      state.cartItems.push(item);
    },
  },
  actions: {},
};

export default cartStore;
