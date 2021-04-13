<template>
  <div class="site-logo">COLORS</div>
</template>

<script>
export default {
  name: "SiteLogo",
};
</script>

<style lang="scss" scoped>
.site-logo {
  position: relative;
  display: inline-block;
  margin-right: 12px;
  font-family: TT Hoves;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 0.8;

  &::after {
    content: "";
    position: absolute;
    right: -10px;
    top: 2px;
    width: 8px;
    height: 8px;
    background-color: currentColor;
    border-radius: 50%;
  }
}
</style>
