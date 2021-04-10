<template>
  <label class="switcher">
    <span class="switcher__toggle">
      <input
        type="checkbox"
        class="switcher__input"
        :value="val"
        v-model="checked"
        @change="onChange"
      />
      <span class="switcher__slider"></span>
    </span>
    <span class="switcher__label"><slot /></span>
  </label>
</template>

<script>
export default {
  name: "Switcher",
  props: ["value", "val"],
  data() {
    return {
      checkedProxy: false,
    };
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        this.checkedProxy = val;
      },
    },
  },
  methods: {
    onChange() {
      this.$emit("input", this.checkedProxy);
    },
  },
};
</script>

<style lang="scss" scoped>
.switcher {
  display: block;
  margin-bottom: 10px;
  text-align: left;

  &__toggle {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 22px;
    margin-right: 12px;
  }

  &__label {
    display: inline-block;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  &__input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .switcher__slider {
      background-color: $color-green;
    }

    &:checked + .switcher__slider:before {
      -webkit-transform: translateX(14px);
      -ms-transform: translateX(14px);
      transform: translateX(14px);
    }
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $color-milk;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 40px;
  }

  &__slider::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    left: 7px;
    bottom: 7px;
    background-color: $color-text;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
}
</style>
