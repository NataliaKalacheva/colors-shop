<template>
  <div class="slider">
    <transition-group name="fade" tag="div">
      <template v-for="i in [currentIndex]">
        <SliderSlide :slide="currentSlide" :key="i" />
      </template>
    </transition-group>
    <button class="slider__prev" @click="prev" area-label="Previous">
      &#10094;
    </button>
    <button class="slider__next" @click="next" area-label="Next">
      &#10095;
    </button>
  </div>
</template>

<script>
import SliderSlide from "@/components/common/SliderSlide";

export default {
  name: "Slider",
  components: { SliderSlide },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    timer: null,
    currentIndex: 0,
  }),
  // mounted() {
  //   this.startSlide();
  // },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },

    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
  },
  computed: {
    currentSlide() {
      return this.slides[Math.abs(this.currentIndex) % this.slides.length];
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  height: 0;
  padding-bottom: $slider-aspect-ratio;

  &__prev,
  &__next {
    position: absolute;
    top: 50%;
  }

  &__prev {
    left: 0;
  }

  &__next {
    right: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
