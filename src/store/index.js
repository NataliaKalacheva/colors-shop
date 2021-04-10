import Vue from "vue";
import Vuex from "vuex";
import cart from "@/store/modules/cart";
import collection from "@/store/modules/collection";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    collection,
    cart,
  },
});
