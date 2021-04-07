<template>
  <div id="app">
    <CollectionHeroSlider />
  </div>
</template>

<script>
import CollectionHeroSlider from "./components/collection/CollectionHeroSlider.vue";
export default {
  name: "app",
  components: {
    CollectionHeroSlider,
  },
};
</script>

<style lang="scss">
@import "./styles/_base.scss";
</style>
