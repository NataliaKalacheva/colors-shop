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
    <div class="product-item__cta">
      <p class="product-item__price">{{ product.price }} ₽</p>
      <button
        class="product-item__btn"
        @click="onClickAtc(product)"
        area-label="Add to cart"
      >
        <IconPlus />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import IconPlus from "@/components/icons/IconPlus";

export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    IconPlus,
  },
  methods: {
    ...mapActions("cart", ["addToCart", "openCart"]),
    onClickAtc(product) {
      const cartItem = JSON.parse(JSON.stringify(product));
      cartItem.quantity = 1;
      this.addToCart(cartItem);
      this.openCart();
    },
  },
};
</script>

<style lang="scss" scoped>
.product-item {
  padding-bottom: 24px;
  text-align: left;
  border-bottom: 1px solid $color-border;

  &__title {
    margin: 16px 0;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0.02em;
  }

  &__price {
    margin: 0 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 1;
  }

  &__cta {
    display: flex;
    justify-content: space-between;
  }

  &__btn {
    @include button-reset;
    background-color: $color-milk;
    border-radius: 4px;
    padding: 2px 16.5px;

    &:hover {
      background-color: #ccc;
    }

    &.disabled {
      background-color: #eee;
      color: #777;
      cursor: not-allowed;
      &:hover {
        background-color: #eee;
      }
    }
  }
}
</style>
