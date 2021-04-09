<template>
  <div class="slider">
    <transition-group name="fade" tag="div">
      <template v-for="i in [currentIndex]">
        <SliderSlide :slide="currentSlide" :key="i" />
      </template>
    </transition-group>
    <button
      v-if="currentIndex != 0"
      class="slider__prev"
      @click="prev"
      area-label="Previous"
    >
      <IconArrow icon-name="Previous arrow" dir="left" />
    </button>
    <button
      v-if="currentIndex != total - 1"
      class="slider__next"
      @click="next"
      area-label="Next"
    >
      <IconArrow icon-name="Next arrow" />
    </button>
    <SliderDots :total="total" :active="currentIndex" @change="goToSlide" />
  </div>
</template>

<script>
import SliderSlide from "@/components/common/SliderSlide";
import SliderDots from "@/components/common/SliderDots";
import IconArrow from "@/components/icons/IconArrow";

export default {
  name: "Slider",
  components: {
    SliderSlide,
    IconArrow,
    SliderDots,
  },
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
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },
    next() {
      this.currentIndex += 1;
      this.currentIndex = Math.abs(this.currentIndex) % this.total;
    },
    prev() {
      this.currentIndex -= 1;
      this.currentIndex = Math.abs(this.currentIndex) % this.total;
    },
    goToSlide(i) {
      this.currentIndex = i;
    },
  },
  computed: {
    total() {
      return this.slides.length;
    },
    currentSlide() {
      return this.slides[this.currentIndex];
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
    @include button-reset;
    position: absolute;
    top: 65%;
    color: $color-white;
    transform: translateY(-50%);
  }

  &__prev {
    left: 21.875%;
  }

  &__next {
    right: 21.875%;
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
