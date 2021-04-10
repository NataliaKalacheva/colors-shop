<template>
  <div class="dropdown__wrapper">
    <button @click="toggle" class="dropdown__trigger">
      {{ items[selectedIndex].label }}
    </button>
    <ul v-if="open" class="dropdown">
      <template v-for="(item, i) in items">
        <li
          class="dropdown__item"
          :class="i === selectedIndex ? 'active' : ''"
          :key="item.value"
          @click="onChange(item.value, i)"
        >
          <button class="dropdown__option">{{ item.label }}</button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  created() {
    window.addEventListener("click", this.close);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.close);
  },
  data: () => ({
    open: false,
    selectedIndex: 0,
  }),
  methods: {
    toggle() {
      this.open = !this.open;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.open = false;
      }
    },
    onChange(item, i) {
      this.toggle();
      this.selectedIndex = i;
      this.$emit("change", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  margin: 0 0;
  padding: 0 0;
  background-color: $color-white;
  color: $color-text;
  cursor: pointer;
  font-size: 0.75rem;
  list-style: none;
  text-align: left;

  &__wrapper {
    position: relative;
    width: 280px;
    text-align: right;
  }

  &__trigger {
    @include button-reset;
    text-transform: uppercase;
  }

  &__trigger::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.5em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.28em solid transparent;
    border-bottom: 0;
    border-left: 0.28em solid transparent;
  }

  &__option {
    @include button-reset;
    text-transform: uppercase;
  }

  &__item {
    padding: 16px 24px;
    transition: background-color 0.15s ease-in-out;
  }

  &__item.active {
    background-color: $color-green;
  }

  &__item:hover:not(.active) {
    background-color: #f4f6f6;
    cursor: pointer;
  }
}
</style>
