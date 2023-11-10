<template>
  <nav class="nav header__nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a href="" class="link nav__link">О нас</a>
      </li>
      <li class="nav__item">
        <a href="" class="link nav__link">Услуги</a>
      </li>
      <li class="nav__item">
        <a href="" class="link nav__link" @click="$router.push(`/projects`)">
          Проекты
        </a>
      </li>
      <li class="nav__item">
        <a href="" class="link nav__link">Блог</a>
      </li>
      <li class="nav__item">
        <a href="" class="link nav__link">Контакты</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '@/assets/styles/base';

.nav {
  &__list {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 80px;
  }
  &__link {
    color: $clr-main;
    font-family: inherit;
    font-size: 18px;
    line-height: normal;
    font-weight: 300;
    &::after {
      content: '';
      width: 0px;
      height: 1px;
      margin-top: 5px;
      margin-left: 50%;
      display: block;
      border-radius: 7px;
      transition: all 0.3s ease-in-out;
      background-color: $clr-accent;
    }
    &:hover::after {
      width: 120%;
      margin-left: -10%;
    }
  }
}

@media (max-width: 991px) {
  .nav__list {
    flex-direction: column;
    gap: 83px;
    justify-content: flex-start;
  }
  .nav__link {
    font-size: 30px;
  }
}
@media (max-width: 767px) {
  .nav {
    &__list {
      gap: 30px;
    }
    &__link {
      font-size: 18px;
    }
  }
  
}
</style>
