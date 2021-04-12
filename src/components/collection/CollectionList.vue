<template>
  <div class="collection page-width">
    <template v-if="isProducts">
      <div class="collection__top-bar">
        <p class="collection__total">{{ totalNote }}</p>
        <CollectionSorting @sort="sortProducts" class="collection__sorting" />
      </div>

      <aside class="collection__sidebar">
        <CollectionFiltering @filter="onFilter" />
      </aside>

      <ul class="collection__list" v-if="totalFiltered">
        <template v-for="product in filteredProducts">
          <ProductItem :key="product.id" :product="product" />
        </template>
      </ul>

      <template v-else
        >Нет соответствующих товаров, попробуйте другой фильтр</template
      >
    </template>

    <template v-else>
      <div>Нет продуктов</div>
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
    reverse: true,
    key: "price",
    checkedFilters: [],
  }),
  computed: {
    ...mapGetters("collection", ["collectionProducts", "totalProducts"]),
    isProducts() {
      return Boolean(this.totalProducts);
    },
    totalFiltered() {
      return this.filteredProducts.length;
    },
    totalNote() {
      if (this.totalFiltered === 1) {
        return `${this.totalFiltered} товар`;
      }
      if (this.totalFiltered <= 4 && this.totalFiltered > 1) {
        return `${this.totalFiltered} товара`;
      }
      return `${this.totalFiltered} товаров`;
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
  position: relative;
  display: grid;
  grid-template:
    "a b"
    "c c"
    "c c";
  grid-template-columns: 30% 70%;
  margin-top: 48px;
  margin-bottom: 70px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: $color-white;
  }

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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 14.99px;
    grid-row-gap: 24px;
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
      margin-right: 70px;
    }
    &__top-bar {
      margin-bottom: 44px;
    }
    &__list {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 24px;
      grid-row-gap: 16px;
    }
  }
}

@include mq($lap) {
  .collection {
    &__list {
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 24px;
      grid-row-gap: 16px;
    }
  }
}

@include mq($desk) {
  .collection {
    margin-bottom: 147px;
    &__list {
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: 24px;
      grid-row-gap: 16px;
    }
    &__sidebar {
      margin-right: 140px;
    }
  }
}
</style>
