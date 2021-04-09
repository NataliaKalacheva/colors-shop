<template>
  <svg
    :class="iconClasses"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 22 42"
    fill="none"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <path
      d="M1 41L21 21L1 1"
      :stroke="iconColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "arrow",
    },
    width: {
      type: [Number, String],
      default: 22,
    },
    height: {
      type: [Number, String],
      default: 42,
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
    dir: {
      type: String,
      default: "right",
    },
  },
  computed: {
    iconClasses() {
      return `icon--${this.dir}`;
    },
  },
};
</script>

<style scoped>
.icon--left {
  transform: rotate(180deg);
}
</style>
