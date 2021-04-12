<template>
  <div class="cart-item">
    <div class="cart-item__img-box">
      <img
        class="cart-item__img"
        :src="product.featured_image"
        :alt="product.title"
      />
    </div>
    <div class="cart-item__info">
      <h3 class="cart-item__title">{{ product.title }}</h3>
      <div>
        <p class="cart-item__price">{{ product.price }} ₽</p>
      </div>
    </div>
    <div class="cart-item__actions">
      <InputNumber :min="1" :max="maxValue" v-model="itemQty">
        <template v-slot:increment>
          <IconPlus />
        </template>
        <template v-slot:decrement>
          <IconMinus />
        </template>
      </InputNumber>
      <button class="cart-item__delete" area-label="Delete product">
        <IconClose width="28" height="28" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import InputNumber from "@/components/common/InputNumber";
import IconClose from "@/components/icons/IconClose";
import IconPlus from "@/components/icons/IconPlus";
import IconMinus from "@/components/icons/IconMinus";

export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    InputNumber,
    IconClose,
    IconPlus,
    IconMinus,
  },
  computed: {
    itemQty: {
      get() {
        return this.product.quantity;
      },
      set(newName) {
        return newName;
      },
    },
    maxValue() {
      return this.product.sku;
    },
  },
  methods: {
    ...mapActions("cart", ["updateQty"]),
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  align-items: center;
  padding: 12px 0;

  &:not(:last-child) {
    border-bottom: 1px solid $color-border;
  }

  &__img {
    width: 100%;
  }

  &__img-box {
    margin-right: 8px;
    flex-basis: 96px;
  }

  &__info {
    margin-right: 65px;
    width: 165px;
    text-align: left;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }

  &__title {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0.02em;
  }

  &__price {
    font-weight: 600;
    font-size: 16px;
    line-height: 1;
  }

  &__delete {
    @include button-reset;
    opacity: 0.2;
    transition: opacity 0.3s linear;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
