<template>
  <section class="feedback">
    <div class="container feedback__container">
      <div class="feedback__content">
        <div class="feedback__deco-img">
          <img src="../assets/images/feedback-decor.svg" alt="">
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
import FeedbackForm from './FeedbackForm.vue';
export default {
  components: {FeedbackForm}
}
</script>

<style lang="scss">
@import '@/assets/styles/base';
.feedback {
  background-color: $clr-bg-extra;
  padding: 95px 0;
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px
  }
  &__content {
    max-width: 455px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__deco-img img {
    object-fit: contain; 
  }
}

@media (max-width: 991px) {
  .feedback {
    padding: 58px 0 106px;
  }
}
@media (max-width: 767px) {
  
}
</style>