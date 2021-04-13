<template>
  <div id="app">
    <Header />
    <CollectionHeroSlider />
    <CollectionList />
    <CartDrawer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import CollectionHeroSlider from "@/components/collection/CollectionHeroSlider.vue";
import CollectionList from "@/components/collection/CollectionList.vue";
import CartDrawer from "@/components/cart/CartDrawer.vue";

export default {
  name: "app",
  components: {
    Header,
    CollectionHeroSlider,
    CollectionList,
    CartDrawer,
  },
};
</script>

<style lang="scss">
@import "./styles/_base.scss";
</style>
