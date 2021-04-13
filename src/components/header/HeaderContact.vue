<template>
  <div class="contact-data">
    <a class="contact-data__link" href="tel:495-221-77-69"
      >+7 (495) 221-77-69</a
    >
    <button class="contact-data__btn">Заказать звонок</button>
  </div>
</template>

<script>
export default {
  name: "HeaderContact",
};
</script>

<style lang="scss" scoped>
.contact-data {
  &__link {
    display: block;
    margin-bottom: 2px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    letter-spacing: -0.02em;
    color: $color-text;
    text-decoration: none;
  }

  &__btn {
    display: block;
    @include button-reset;
    font-size: 14px;
    line-height: 1;
    opacity: 0.3;
  }

  @include mq-max($lap) {
    display: none;
  }
}
</style>
