<template>
  <div class="breadсrumbs">
    <div class="container breadсrumbs__container">
      <a href="" class="breadсrumbs__item" @click="$router.push(`/`)">Главная</a>
      <a href="" class="breadсrumbs__item" @click="$router.push(`/projects`)">Проекты</a>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import '@/assets/styles/base';

.breadсrumbs {
  margin-bottom: 76px;

  &__container {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  &__item {
    position: relative;
    color: $clr-crumbs;
    font-family: $ff-rubik;
    font-size: 18px;
    line-height: normal;
    font-weight: 300;
    transition: color 0.3s ease-in-out;
    &:not(:last-of-type)::after {
      content: '/';
      position: absolute;
      color: $clr-crumbs;
      left: calc(100% + 5px);
    }
    &:last-of-type {
      pointer-events: none;
      color: #616580;
    }
    &:hover {
      color: $clr-accent;
    }
  }
}
@media (max-width: 991px) {
  .breadсrumbs {
    margin-bottom: 72px;
  }
}
@media (max-width: 767px) {
  .breadсrumbs {
    margin-bottom: 47px;
    &__container {
      gap: 15px;
    }
    &__item {
      font-size: 12px;
    }
  }
}
</style>
