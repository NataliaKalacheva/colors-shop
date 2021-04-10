<template>
  <div class="collection">
    <template v-if="isProducts">
      <div class="collection__top-bar">
        <p>{{ totalNote }}</p>
        <CollectionSorting @sort="sortProducts" />
      </div>

      <ul>
        <template v-for="product in sortedProducts">
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
import CollectionSorting from "@/components/collection/CollectionSorting.vue";
import ProductItem from "@/components/product/ProductItem";
import { mapGetters } from "vuex";

export default {
  name: "CollectionList",
  components: {
    CollectionSorting,
    ProductItem,
  },
  data: () => ({
    filteredBy: "",
    sortedBy: "price-desc",
    reverse: false,
    key: "price",
  }),
  computed: {
    ...mapGetters("collection", ["collectionProducts", "totalProducts"]),
    isProducts() {
      return Boolean(this.totalProducts);
    },
    totalNote() {
      return this.totalProducts === 1
        ? `${this.totalProducts} товар`
        : `${this.totalProducts} товаров`;
    },
    sortedProducts() {
      console.log("sorting by " + this.key);

      return [...this.collectionProducts].sort((a, b) => {
        let modifier = this.reverse ? -1 : 1;

        if (a[this.key] < b[this.key]) return -1 * modifier;
        if (a[this.key] > b[this.key]) return 1 * modifier;

        return 0;
      });
    },
  },
  methods: {
    sortProducts(value) {
      this.sortedBy = value;
      console.log(value);

      switch (value) {
        case "price-desc":
        case "price-asc":
          this.key = "price";
          break;
        case "popular":
          this.key = "rating";
          break;
        case "new":
          this.key = "date";
          break;
        default:
          this.key = "price";
      }
      console.log(this.key);
    },
  },
};
</script>

<style lang="scss" scoped>
.collection {
  &__top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
  }
}
</style>
