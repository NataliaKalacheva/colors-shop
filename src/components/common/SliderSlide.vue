<template>
  <div class="slider-slide">
    <img class="slider-slide__img" :src="slide.image" :alt="slide.title" />
    <div class="slider-slide__content">
      <div class="slider-slide__inner-text">
        <h2 class="h1 slider-slide__title">{{ slide.title }}</h2>
        <p>{{ slide.description }}</p>
      </div>
    </div>
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

  &__content {
    position: absolute;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__inner-text {
    max-width: 472px;
    margin: 0 auto;
    text-align: center;
    color: $color-white;
  }

  &__title {
    margin-bottom: 24px;
    line-height: 88%;
    letter-spacing: -0.02em;
  }
}
</style>
