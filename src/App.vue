<template>
  <div id="app">
    <CollectionHeroSlider />
    <CollectionList />
  </div>
</template>

<script>
import CollectionHeroSlider from "@/components/collection/CollectionHeroSlider.vue";
import CollectionList from "@/components/collection/CollectionList.vue";

export default {
  name: "app",
  components: {
    CollectionHeroSlider,
    CollectionList,
  },
};
</script>

<style lang="scss">
@import "./styles/_base.scss";
</style>
