<template>
  <div class="slider-slide">
    <img class="slider-slide__img" :src="slide.image" :alt="slide.title" />
  </div>
</template>

<script>
export default {
  name: "SliderSlide",
  props: {
    slide: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-slide {
  position: relative;
  width: 100%;
  padding-bottom: $slider-aspect-ratio;

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    object-fit: cover;
  }
}
</style>
