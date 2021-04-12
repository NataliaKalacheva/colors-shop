import mutations from "@/store/mutations";
import Vue from "vue";

const {
  ADD_CART_ITEM,
  OPEN_CART,
  CLOSE_CART,
  UPDATE_QTY,
  CLEAN_CART,
} = mutations;

const cartStore = {
  namespaced: true,
  state: {
    cartItems: {
      1: {
        id: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        available: true,
        sku: 20,
        price: 6000,
        compare_at_price: null,
        rating: 5,
        contract: true,
        exclusive: false,
        featured_image: "/img/Product1.bee4ff39.png",
        date: 1374490205,
        quantity: 1,
      },
      2: {
        id: 2,
        title: "Краска Wallquest, Brownsone MS90102",
        available: false,
        sku: 10,
        price: 4800,
        compare_at_price: null,
        contract: true,
        exclusive: true,
        rating: 3,
        featured_image: "/img/Product2.d9ba9baf.png",
        date: 1374490205,
        new: true,
        quantity: 1,
      },
      3: {
        id: 3,
        title: "Краска Wallquest, Brownsone MS90102",
        available: true,
        sku: 5,
        price: 5290,
        compare_at_price: null,
        contract: false,
        exclusive: false,
        featured_image: "/img/Product3.e8126c3c.png",
        date: 1374490316,
        new: true,
        quantity: 1,
      },
    },
    cartOpen: true,
  },
  getters: {
    cartItems: ({ cartItems }) => cartItems,
    cartTotalPrice: ({ cartItems }) =>
      Object.keys(cartItems).reduce(
        (acc, key) => acc + cartItems[key].price,
        0
      ),
    cartItemsQty: ({ cartItems }) => Object.keys(cartItems).length,
    cartOpen: ({ cartOpen }) => cartOpen,
  },
  mutations: {
    [ADD_CART_ITEM](state, item) {
      Vue.set(state.cartItems, item.id, item);
    },
    [UPDATE_QTY](state, { id, quantity }) {
      state.cartItems[id].quantity = state.cartItems[id].quantity + quantity;
    },
    [OPEN_CART](state) {
      state.cartOpen = true;
    },
    [CLOSE_CART](state) {
      state.cartOpen = false;
    },
    [CLEAN_CART](state) {
      state.cartItems = {};
    },
  },
  actions: {
    addToCart({ commit, getters }, product) {
      if (getters.cartItems[product.id]) {
        commit(UPDATE_QTY, { id: product.id, quantity: product.quantity });
        return;
      }
      commit(ADD_CART_ITEM, product);
    },
    openCart({ commit }) {
      commit(OPEN_CART);
    },
    closeCart({ commit }) {
      commit(CLOSE_CART);
    },
    cleanCart({ commit }) {
      commit(CLEAN_CART);
    },
    updateQty({ commit }, { id, qty }) {
      commit(UPDATE_QTY, { id, qty });
    },
  },
};

export default cartStore;
