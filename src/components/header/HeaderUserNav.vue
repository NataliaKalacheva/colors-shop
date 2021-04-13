<template>
  <nav class="user-nav">
    <ul class="user-nav__list">
      <li class="user-nav__item">
        <a class="user-nav__link" href="#" area-label="search">
          <IconSearch />
        </a>
      </li>
      <li class="user-nav__item">
        <a class="user-nav__link" href="#" area-label="account">
          <IconAccount />
        </a>
      </li>
      <li class="user-nav__item">
        <a class="user-nav__link" href="#" area-label="wishlist">
          <IconWishlist />
        </a>
      </li>

      <li class="user-nav__item">
        <a
          class="user-nav__link user-nav__link--cart"
          href="#"
          area-label="Cart"
          @click.prevent="openCart"
        >
          <IconCart />
          <span class="user-nav__cart-qty">{{ cartItemsQty }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import IconSearch from "@/components/icons/IconSearch";
import IconWishlist from "@/components/icons/IconWishlist";
import IconAccount from "@/components/icons/IconAccount";
import IconCart from "@/components/icons/IconCart";

export default {
  name: "HeaderUserNav",
  components: {
    IconSearch,
    IconWishlist,
    IconAccount,
    IconCart,
  },
  computed: {
    ...mapGetters("cart", ["cartItemsQty"]),
  },
  methods: {
    ...mapActions("cart", ["openCart"]),
  },
};
</script>

<style lang="scss" scoped>
.user-nav {
  &__list {
    @include ul-reset;
    display: flex;
    align-items: center;
  }

  &__link {
    color: $color-text;
    text-decoration: none;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  &__link--cart {
    position: relative;
  }
  &__cart-qty {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(-50%);
  }

  @include mq-max($lap) {
    &__link:not(.user-nav__link--cart) {
      display: none;
    }
  }

  @include mq($lap) {
    &__item {
      margin-right: 26px;
    }
  }
}
</style>
