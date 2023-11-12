<template>
  <section class="feedback">
    <div class="container feedback__container">
      <div class="feedback__content">
        <div class="feedback__deco-img">
          <img src="../assets/images/feedback-decor.svg" alt="" />
        </div>
        <h2 class="title feedback__title">Расскажите о вашем проекте</h2>
        <p class="feedback__text">
          Поделитесь с нами информацией, чем мы можем быть полезны: реализовать
          идею или выделить разработчиков для ИТ-команды. Чем больше вы нам
          расскажете — тем продуктивнее будет дальнейшее обсуждение.
        </p>
      </div>
      <feedback-form class="feedback__form"></feedback-form>
    </div>
  </section>
</template>

<script>
import FeedbackForm from '@/components/FeedbackForm.vue';
export default {
  components: { FeedbackForm },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base';

.feedback {
  padding: 95px 0;
  background-color: $clr-bg-extra;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }

  &__content {
    max-width: 455px;
    display: flex;
    flex-direction: column;
  }

  &__deco-img img {
    object-fit: contain;
  }

  &__title {
    margin-top: 14px;
  }

  &__text {
    margin-top: 32px;
  }
}

@media (max-width: 991px) {
  .feedback {
    padding: 58px 0 106px;

    &__container {
      max-width: 656px !important;
      flex-direction: column;
      gap: 25px;
    }

    &__content {
      max-width: none;
    }
  }
}
@media (max-width: 575px) {
  .feedback {
    padding: 51px 0 39px;

    &__container {
      max-width: none;
      gap: 32px;
    }

    &__content {
      flex-direction: row;
      gap: 28px;
    }

    &__title {
      margin-top: 0;
    }

    &__text {
      display: none;
    }

    &__deco-img {
      width: 76px;
      height: 70px;
      & img {
        max-width: 100%;
      }
    }
  }
}
</style>
