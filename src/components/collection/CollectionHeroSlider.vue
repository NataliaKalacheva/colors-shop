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
        headline: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: require("@/assets/slide1.png"),
      },
      {
        headline: "Dolor sit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: require("@/assets/slide2.jpg"),
      },
      {
        headline: "Lorem Dolor",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: require("@/assets/slide3.jpg"),
      },
    ],
  }),
};
</script>
