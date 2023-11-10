<template>
  <form class="feedback-form">
    <div class="feedback-form__wrapper">
      <base-input type="email" :idx="email" name="email" :labelText="`Email`" />
    </div>
    <div class="feedback-form__wrapper">
      <base-input type="tel" :idx="phone" name="phone" :labelText="`Телефон`" />
    </div>
    <div class="feedback-form__wrapper feedback-form__wrapper_styled">
      <base-textarea :idx="message" name="message" :labelText="`Сообщение`" />
    </div>
    <div class="feedback-form__submit">
      <base-button class="feedback-form__btn">Отправить</base-button>
      <p class="feedback-form__descr">
        Нажимая “Отправить”, Вы даете согласие на обработку персональных данных
      </p>
    </div>
    <span class="feedback-form__sent-status"></span>
  </form>
</template>

<script>
import BaseInput from '@/components/UI/BaseInput.vue';
import BaseTextarea from '@/components/UI/BaseTextarea.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  components: { BaseInput, BaseTextarea, BaseButton },
};
</script>

<style lang="scss">
@import '@/assets/styles/base';

.feedback-form {
  max-width: 596px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  &__wrapper {
    position:relative;
    &_styled {
      width: 100%;
      padding: 18px;
      border: 1px solid #9aa8ba;
      border-radius: 8px;
    } 
  }
  &__submit {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
  &__sent-status {
    height: 55px;
  }
}
@media (max-width: 991px) {
  .feedback-form {
    max-width: none;
    gap: 30px;
    &__sent-status {
      height: 50px;
    }
  }
}
@media (max-width: 575px) {
  .feedback-form {
    gap: 22px;
    &__submit {
      margin-top: 20px;
      flex-direction: column;
      gap: 25px;
      text-align: center;
    }
    &__btn {
      width:100%;
    }
    &__descr {
      font-size: 13px;
      line-height: normal;
    }
  }
  
}
</style>
