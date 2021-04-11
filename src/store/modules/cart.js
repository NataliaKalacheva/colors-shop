import mutations from "@/store/mutations";

const { ADD_CART_ITEM, OPEN_CART, CLOSE_CART } = mutations;

const cartStore = {
  namespaced: true,
  state: {
    cartItems: [],
    cartOpen: true,
  },
  getters: {
    cartItems: ({ cartItems }) => cartItems,
    cartTotal: ({ cartItems }) =>
      cartItems.reduce((acc, item) => acc + item.price, 0),
    cartOpen: ({ cartOpen }) => cartOpen,
  },
  mutations: {
    [ADD_CART_ITEM](state, item) {
      state.cartItems.push(item);
    },
    [OPEN_CART](state) {
      state.cartOpen = true;
    },
    [CLOSE_CART](state) {
      state.cartOpen = false;
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit(ADD_CART_ITEM, product);
    },
    openCart({ commit }) {
      commit(OPEN_CART);
    },
    closeCart({ commit }) {
      commit(CLOSE_CART);
    },
  },
};

export default cartStore;
