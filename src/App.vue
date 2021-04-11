<template>
  <div id="app">
    <CollectionHeroSlider />
    <CollectionList />
    <CartDrawer />
  </div>
</template>

<script>
import CollectionHeroSlider from "@/components/collection/CollectionHeroSlider.vue";
import CollectionList from "@/components/collection/CollectionList.vue";
import CartDrawer from "@/components/cart/CartDrawer.vue";

export default {
  name: "app",
  components: {
    CollectionHeroSlider,
    CollectionList,
    CartDrawer,
  },
};
</script>

<style lang="scss">
@import "./styles/_base.scss";
</style>
