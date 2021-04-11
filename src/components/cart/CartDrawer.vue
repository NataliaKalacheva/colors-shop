<template>
  <div class="cart__wrapper">
    <div v-if="cartOpen" class="overlay"></div>
    <div v-if="cartOpen" class="cart__drawer">
      <button @click="closeCart">X</button>
      <ul class="cart__list">
        <template v-for="item in cartItems">
          {{ item }}
        </template>
      </ul>
      Total: {{ cartTotal }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartDrawer",
  created() {
    window.addEventListener("click", this.close);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.close);
  },
  computed: {
    ...mapGetters("cart", ["cartItems", "cartTotal", "cartOpen"]),
  },
  methods: {
    ...mapActions("cart", ["closeCart"]),
  },
};
</script>

<style lang="scss" scoped>
.cart {
  &__drawer {
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    overflow: auto;
    height: 100vh;
    background: white;
    z-index: 2;
  }
}
</style>
