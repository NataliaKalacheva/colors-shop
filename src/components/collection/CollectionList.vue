<template>
  <div class="collection page-width">
    <template v-if="isProducts">
      <div class="collection__top-bar">
        <p class="collection__total">{{ totalNote }}</p>
        <CollectionSorting @sort="sortProducts" class="collection__sorting" />
      </div>

      <div class="collection__sidebar">
        <CollectionFiltering @filter="onFilter" />
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
import CollectionFiltering from "@/components/collection/CollectionFiltering.vue";
import CollectionSorting from "@/components/collection/CollectionSorting.vue";
import ProductItem from "@/components/product/ProductItem";
import { mapGetters } from "vuex";

export default {
  name: "CollectionList",
  components: {
    CollectionSorting,
    ProductItem,
    CollectionFiltering,
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
    onFilter(filters) {
      this.checkedFilters = filters;
    },
  },
};
</script>

<style lang="scss" scoped>
.collection {
  display: grid;
  grid-template:
    "a b"
    "c c"
    "c c";
  grid-template-columns: 30% 70%;
  margin-top: 48px;

  &__top-bar {
    margin-bottom: 24px;
    grid-area: b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    min-width: 0;
  }

  &__sidebar {
    margin-bottom: 24px;
    text-align: left;
  }

  &__list {
    @include ul-reset;
    grid-area: c;
  }

  &__total {
    display: none;
    margin: 0 0;
    white-space: nowrap;
    @include text-small;
  }

  &__sorting {
    width: 100%;
  }
}

@include mq($tab) {
  .collection {
    display: grid;
    grid-template:
      "a b b"
      "a c c"
      "a c c";

    &__total {
      display: block;
    }

    &__sidebar {
      grid-area: a;
      margin-bottom: 44px;
    }
    &__top-bar {
      margin-bottom: 44px;
    }
  }
}
</style>
