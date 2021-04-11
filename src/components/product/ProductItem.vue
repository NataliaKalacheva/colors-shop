<template>
  <div class="product-item">
    <div class="aspect-ratio-box">
      <img
        class="product-item__img aspect-ratio-box__inside"
        :src="product.featured_image"
        :alt="product.title"
      />
    </div>
    <h3 class="product-item__title">{{ product.title }}</h3>
    <div>
      <p class="product-item__price">{{ product.price }}</p>
      <button
        class="product-item__atc"
        @click="onClickAtc(product)"
        area-label="Add to cart"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("cart", ["addToCart", "openCart"]),
    onClickAtc(product) {
      this.addToCart(product);
      this.openCart();
    },
  },
};
</script>

<style lang="scss" scoped></style>
