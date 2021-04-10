<template>
  <div>
    <Dropdown :items="options" @change="onSortChange"></Dropdown>
  </div>
</template>

<script>
import Dropdown from "@/components/common/Dropdown.vue";

export default {
  name: "app",
  components: {
    Dropdown,
  },
  data: () => ({
    options: [
      {
        value: "price-desc",
        label: "Сначала дорогие",
      },
      {
        value: "price-asc",
        label: "Сначала недорогие",
      },
      {
        value: "popular",
        label: "Сначала популярные",
      },
      {
        value: "new",
        label: "Сначала новые",
      },
    ],
  }),
  methods: {
    onSortChange(item) {
      this.$emit("sort", item);
    },
  },
};
</script>
