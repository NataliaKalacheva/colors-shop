<template>
  <div class="slider-dots">
    <template v-for="(n, i) in total">
      <button
        class="slider-dots__item"
        :class="active === i ? 'is-active' : ''"
        :key="i"
        :area-label="'Slide ' + i"
        @click="onDotsClick(i)"
      ></button>
    </template>
  </div>
</template>

<script>
export default {
  name: "SliderDots",
  props: {
    total: {
      type: Number,
      required: true,
    },
    active: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onDotsClick(i) {
      this.$emit("change", i);
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-dots {
  display: inline-flex;
  position: absolute;
  bottom: 39px;
  left: 50%;
  transform: translateX(-50%);
  padding: 13px 24px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.4);

  &__item {
    display: block;
    margin-right: 8px;
    @include button-reset;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    background: $color-white;
    opacity: 0.2;
  }

  &__item.is-active {
    opacity: 1;
  }

  &__item:last-child {
    margin-right: 0;
  }
}
</style>
