<template>
  <Slider
    class="collection__hero-slider"
    v-if="!isMobile"
    :slides="imageSlides"
  />
</template>

<script>
import Slider from "@/components/common/Slider";

export default {
  name: "CollectionHeroSlider",
  components: {
    Slider,
  },
  data: () => ({
    windowWidth: window.innerWidth,
    imageSlides: [
      {
        title: "Краски",
        description:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        image: require("@/assets/slides/slide1.png"),
      },
      {
        title: "Dolor sit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: require("@/assets/slides/slide2.jpg"),
      },
      {
        title: "Lorem Dolor",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: require("@/assets/slides/slide3.jpg"),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  computed: {
    isMobile() {
      if (this.windowWidth <= 1080) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.collection__hero-slider {
  margin-bottom: 72px;
}
</style>
