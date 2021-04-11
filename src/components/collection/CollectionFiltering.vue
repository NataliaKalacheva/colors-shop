<template>
  <div class="filters">
    <button class="filters__toggle" @click="toggleFilters">Фильтры</button>
    <div class="overlay" v-if="showSwitchers"></div>
    <div class="filters__switchers" :class="switchersClasses">
      <button
        class="filters__toggle filters__toggle--inner"
        @click="toggleFilters"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="4"
          viewBox="0 0 28 4"
          fill="none"
        >
          <rect opacity="0.6" width="28" height="4" rx="2" fill="#1F2020" />
        </svg>
      </button>
      <Switcher val="new" v-model="checkedFilters">Новинки</Switcher>
      <Switcher val="available" v-model="checkedFilters"
        >Есть в наличии</Switcher
      >
      <Switcher val="contract" v-model="checkedFilters">Контрактные</Switcher>
      <Switcher val="exclusive" v-model="checkedFilters">Эксклюзивные</Switcher>
      <Switcher val="compare_at_price" v-model="checkedFilters"
        >Распродажа</Switcher
      >
    </div>
  </div>
</template>

<script>
import Switcher from "@/components/common/Switcher.vue";

export default {
  name: "CollectionFiltering",
  components: {
    Switcher,
  },
  data: () => ({
    showSwitchers: false,
    checkedFilters: [],
  }),
  watch: {
    checkedFilters: function () {
      this.$emit("filter", this.checkedFilters);
    },
  },
  computed: {
    switchersClasses() {
      return {
        "is-active": this.showSwitchers,
      };
    },
  },
  methods: {
    toggleFilters() {
      this.showSwitchers = !this.showSwitchers;
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  &__toggle {
    @include button-reset;
    @include text-small;
  }
}
@include mq-max($tab) {
  .filters {
    &__switchers {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0 24px 114px;
      background: white;
      border-radius: 24px 24px 0px 0px;
      z-index: 9;
    }
    &__switchers.is-active {
      display: block;
    }
    &__toggle--inner {
      padding-bottom: 54px;
      margin: 0 auto;
      display: block;
    }
  }
}

@include mq($tab) {
  .filters {
    &__toggle {
      display: none;
    }
  }
}
</style>
