<template>
  <div>
    <template v-if="isProducts">
      <ul>
        <template v-for="product in collectionProducts">
          <ProductItem :key="product.id" :product="product" />
        </template>
      </ul>
    </template>
    <template v-else>
      <div>No items</div>
    </template>
  </div>
</template>

<script>
import ProductItem from "@/components/product/ProductItem";
import { mapGetters } from "vuex";

export default {
  name: "CollectionList",
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters("collection", ["collectionProducts"]),
    isProducts() {
      return Boolean(Object.keys(this.collectionProducts).length);
    },
  },
};
</script>

<style lang="scss" scoped></style>
