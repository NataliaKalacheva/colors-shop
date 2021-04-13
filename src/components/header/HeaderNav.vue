<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li class="main-nav__item">
        <a class="main-nav__link" href="#">Продукты</a>
      </li>
      <li class="main-nav__item">
        <a class="main-nav__link" href="#">Цвета</a>
      </li>
      <li class="main-nav__item">
        <a class="main-nav__link" href="#">Вдохновение</a>
      </li>
      <li class="main-nav__item">
        <a class="main-nav__link" href="#">Советы</a>
      </li>
      <li class="main-nav__item">
        <a class="main-nav__link" href="#">Найти магазин</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style lang="scss" scoped>
.main-nav {
  &__list {
    @include ul-reset;
  }

  &__link {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: $color-text;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @include mq($tab) {
    &__list {
      display: flex;
    }
    &__item {
      margin-right: 24px;
    }
  }
}
</style>
