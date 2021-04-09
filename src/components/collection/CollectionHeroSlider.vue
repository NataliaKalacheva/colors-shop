<template>
  <Slider :slides="imageSlides" />
</template>

<script>
import Slider from "@/components/common/Slider";

export default {
  name: "CollectionHeroSlider",
  components: {
    Slider,
  },
  data: () => ({
    imageSlides: [
      {
        title: "Краски",
        description:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        image: require("@/assets/slide1.png"),
      },
      {
        title: "Dolor sit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: require("@/assets/slide2.jpg"),
      },
      {
        title: "Lorem Dolor",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: require("@/assets/slide3.jpg"),
      },
    ],
  }),
};
</script>
