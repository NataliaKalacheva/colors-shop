<template>
  <div class="collection">
    <template v-if="isProducts">
      <div class="collection__top-bar">
        <p>{{ totalNote }}</p>
        <CollectionSorting @sort="sortProducts" />
      </div>

      <div class="collection__sidebar">
        <Switcher val="new" v-model="checkedFilters">Новинки</Switcher>
        <Switcher val="available" v-model="checkedFilters"
          >Есть в наличии</Switcher
        >
        <Switcher val="contract" v-model="checkedFilters">Контрактные</Switcher>
        <Switcher val="exclusive" v-model="checkedFilters"
          >Эксклюзивные</Switcher
        >
        <Switcher val="compare_at_price" v-model="checkedFilters"
          >Распродажа</Switcher
        >
      </div>

      <ul class="collection__list">
        <template v-for="product in filteredProducts">
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
import Switcher from "@/components/common/Switcher.vue";
import CollectionSorting from "@/components/collection/CollectionSorting.vue";
import ProductItem from "@/components/product/ProductItem";
import { mapGetters } from "vuex";

export default {
  name: "CollectionList",
  components: {
    CollectionSorting,
    ProductItem,
    Switcher,
  },
  data: () => ({
    sortedBy: "price-desc",
    reverse: false,
    key: "price",
    checkedFilters: [],
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
      return [...this.collectionProducts].sort((a, b) => {
        let modifier = this.reverse ? -1 : 1;

        if (a[this.key] < b[this.key]) return -1 * modifier;
        if (a[this.key] > b[this.key]) return 1 * modifier;

        return 0;
      });
    },
    filteredProducts() {
      let currentProducts = [...this.sortedProducts];

      if (!this.checkedFilters.length) {
        return currentProducts;
      }

      this.checkedFilters.forEach((filterKey) => {
        console.log("I am filtering by " + filterKey);
        currentProducts = this.filterProductsByKey(currentProducts, filterKey);
      });
      return currentProducts;
    },
  },
  methods: {
    sortProducts(value) {
      this.sortedBy = value;

      switch (value) {
        case "price-desc":
          this.key = "price";
          this.reverse = true;
          break;
        case "price-asc":
          this.key = "price";
          this.reverse = false;
          break;
        case "popular":
          this.key = "rating";
          this.reverse = true;
          break;
        case "new":
          this.key = "date";
          this.reverse = false;
          break;
      }
    },
    filterProductsByKey(products, key) {
      return products.filter((product) => product[key]);
    },
  },
};
</script>

<style lang="scss" scoped>
.collection {
  display: grid;
  grid-template:
    "a b b"
    "a c c"
    "a c c";

  &__top-bar {
    grid-area: b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
  }

  &__sidebar {
    grid-area: a;
  }

  &__list {
    grid-area: c;
  }
}
</style>
