<template>
  <div class="cart__wrapper">
    <div v-if="cartOpen" class="overlay"></div>
    <div v-if="cartOpen" class="cart__drawer">
      <header class="cart__header">
        <h2 class="cart__title">Корзина</h2>
        <button class="cart__close" @click="closeCart">
          <IconClose is-bordered />
        </button>
      </header>
      <div class="cart__main" v-if="cartItemsQty">
        <aside class="cart__meta">
          <p class="cart__qty">{{ cartQty }}</p>
          <button class="cart__refresh-btn" @click="cleanCart">
            Очистить список
          </button>
        </aside>
        <ul class="cart__list">
          <template v-for="item in cartItems">
            <CartItem :product="item" :key="item.id" />
          </template>
        </ul>
        <div class="cart__footer">
          <p class="cart__total">
            Итого
            <span class="cart__total-price h2">{{ totalPrice }}руб</span>
          </p>
          <button class="cart__checkout-btn">Оформить заказ</button>
        </div>
      </div>
      <div class="cart__empty" v-else>Ваша корзина пуста</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import IconClose from "@/components/icons/IconClose";
import CartItem from "@/components/cart/CartItem";

export default {
  name: "CartDrawer",
  components: {
    IconClose,
    CartItem,
  },
  created() {
    window.addEventListener("click", this.close);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.close);
  },
  computed: {
    ...mapGetters("cart", [
      "cartItems",
      "cartTotalPrice",
      "cartOpen",
      "cartItemsQty",
    ]),
    cartQty() {
      if (this.cartItemsQty === 1) {
        return `${this.cartItemsQty} товар`;
      }
      if (this.cartItemsQty <= 4 && this.cartItemsQty > 1) {
        return `${this.cartItemsQty} товара`;
      }
      return `${this.cartItemsQty} товаров`;
    },
    totalPrice() {
      return this.cartTotalPrice.toLocaleString().replace(",", " ");
    },
  },
  methods: {
    ...mapActions("cart", ["closeCart", "cleanCart"]),
  },
};
</script>

<style lang="scss" scoped>
.cart {
  &__close {
    @include button-reset;
  }
  &__title {
    margin: 0 0;
  }

  &__header,
  &__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__main,
  &__drawer {
    display: flex;
    flex-direction: column;
  }
  &__main {
    flex-grow: 1;
  }
  &__header {
    margin-bottom: 40px;
  }
  &__footer {
    margin-top: auto;
    margin-bottom: 0;
  }
  &__refresh-btn {
    @include button-reset;
    opacity: 0.4;
    font-weight: 300;
  }
  &__qty,
  &__refresh-btn {
    margin: 10px 0;
    font-size: 14px;
    line-height: 1.2;
  }
  &__meta {
    border-bottom: 1px solid $color-border;
  }
  &__drawer {
    position: fixed;
    right: 0;
    top: 0;
    right: 0;
    width: 600px;
    max-width: 100%;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
    height: 100vh;
    background: white;
    z-index: 2;
  }
  &__list {
    @include ul-reset;
  }
  &__total {
    text-align: left;
    font-size: 1rem;
    line-height: 1;
  }

  &__checkout-btn {
    @include button-reset;
    width: 100%;
    padding: 20px 20px 21px;
    background: $color-green;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.06em;
    border-radius: 4px;
  }
}

@include mq($tab) {
  .cart {
    &__drawer {
      padding: 32px 40px 40px;
    }
    &__header {
      margin-bottom: 80px;
    }
    &__checkout-btn {
      max-width: 240px;
    }
    &__total-price {
      display: block;
      margin-top: 6px;
    }
    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
