<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 18L18 30"
      stroke="#1F2020"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 18L30 30"
      stroke="#1F2020"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      v-if="isBordered"
      opacity="0.1"
      cx="24"
      cy="24"
      r="23.5"
      stroke="black"
    />
  </svg>
</template>

<script>
export default {
  name: "IconClose",
  props: {
    isBordered: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: 48,
    },
    height: {
      type: [Number, String],
      default: 48,
    },
  },
};
</script>
