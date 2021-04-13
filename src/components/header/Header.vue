<template>
  <div class="page-width">
    <header class="header">
      <IconBurger class="header__mobile-menu" />
      <div class="header__logo">
        <SiteLogo />
      </div>
      <HeaderNav class="header__nav" />
      <HeaderContact class="header__contact" />
      <HeaderUserNav class="header__user-nav" />
    </header>
  </div>
</template>

<script>
import SiteLogo from "@/components/common/SiteLogo";
import HeaderNav from "@/components/header/HeaderNav";
import HeaderContact from "@/components/header/HeaderContact";
import HeaderUserNav from "@/components/header/HeaderUserNav";
import IconBurger from "@/components/icons/IconBurger";

export default {
  name: "Header",
  components: {
    SiteLogo,
    HeaderNav,
    HeaderContact,
    HeaderUserNav,
    IconBurger,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 25px 0;

  @include mq($lap) {
    padding: 36px 0;
    &__mobile-menu {
      display: none;
    }
    &__logo {
      width: 17%;
      flex-basis: 17%;
      text-align: left;
    }
    &__contact {
      margin-right: 118px;
      margin-left: auto;
    }
  }
  @include mq-max($lap) {
    justify-content: space-between;
    &__nav {
      display: none;
    }
  }
}
</style>
