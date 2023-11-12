<template>
  <form class="feedback-form" @submit.prevent>
    <div class="feedback-form__wrapper">
      <base-input
        :type="email"
        v-model="email"
        idx="email"
        :name="`email`"
        labelText="Email"
        :errorClass="!isEmailValid"
      />
      <span v-if="!isEmailValid" class="feedback-form__error-message">
        Данные введены неверно.
      </span>
    </div>
    <div class="feedback-form__wrapper">
      <base-input
        v-model="phone"
        type="tel"
        idx="phone"
        name="`phone`"
        labelText="Телефон"
        :errorClass="!isPhoneValid"
      />
      <span v-if="!isPhoneValid" class="feedback-form__error-message">
        Данные введены неверно. Попробуйте ввести номер без пробелов и тире.
      </span>
    </div>
    <div class="feedback-form__wrapper feedback-form__wrapper_styled">
      <base-textarea
        v-model="message"
        idx="message"
        :name="`message`"
        labelText="Сообщениe"
      />
      <div class="add-files">
        <ul v-show="files" class="add-files__list">
          <li
            class="add-files__item file-item"
            v-for="(file, i) in files"
            :key="i"
          >
            <span class="file-item__name">{{ file.name }}</span>
            <span class="file-item__size">{{
              normalizeFileSize(file.size)
            }}</span>
            <span class="file-item__remove" @click="removeFile(file.name)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <path
                  d="M7 1L1 7"
                  stroke="#303958"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 7L1 1"
                  stroke="#303958"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </li>
        </ul>
        <input
          @change="getFiles"
          type="file"
          class="add-files__input"
          name="files"
          id="files"
          multiple
        />
        <label class="add-files__btn" for="files">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4994 9.66699L8.38756 18.9301C8.05937 19.2583 7.875 19.7034 7.875 20.1675C7.875 20.6317 8.05937 21.0768 8.38756 21.405C8.71575 21.7332 9.16087 21.9175 9.625 21.9175C10.0891 21.9175 10.5342 21.7332 10.8624 21.405L21.7242 10.3919C22.0492 10.0669 22.307 9.68102 22.4829 9.25638C22.6588 8.83174 22.7494 8.37662 22.7494 7.91699C22.7494 7.45737 22.6588 7.00224 22.4829 6.5776C22.307 6.15296 22.0492 5.76712 21.7242 5.44212C21.3992 5.11711 21.0134 4.85931 20.5888 4.68341C20.1641 4.50752 19.709 4.41699 19.2494 4.41699C18.7897 4.41699 18.3346 4.50752 17.91 4.68341C17.4853 4.85931 17.0995 5.11711 16.7745 5.44212L5.91269 16.4552C4.92812 17.4398 4.375 18.7751 4.375 20.1675C4.375 21.5599 4.92812 22.8953 5.91269 23.8798C6.89726 24.8644 8.23261 25.4175 9.625 25.4175C11.0174 25.4175 12.3527 24.8644 13.3373 23.8798L22.3119 14.917"
              stroke="#EEF3FF"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </label>
      </div>
    </div>
    <div class="feedback-form__submit">
      <base-button
        class="feedback-form__btn"
        :disabled="!isFormValid"
        @click="sendFeedback"
        >Отправить</base-button
      >
      <p class="feedback-form__descr">
        Нажимая “Отправить”, Вы даете согласие на обработку персональных данных
      </p>
    </div>
    <span
      v-if="status !== `none`"
      class="feedback-form__sent-status"
      :class="{ 'feedback-form__sent-status_error': status == 'error' }"
      >{{ statusMessage }}</span
    >
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      phone: '',
      message: '',
      files: '',
      status: 'none',
    };
  },
  computed: {
    isEmailValid() {
      if (this.email) {
        const emailRegexp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        console.log(emailRegexp.test(this.email));
        return emailRegexp.test(this.email);
      }
      return true;
    },
    isPhoneValid() {
      if (this.phone) {
        // eslint-disable-next-line no-useless-escape
        const phoneRegexp = /^(\+7|8)[\d]{10}$/;
        return phoneRegexp.test(this.phone);
      }
      return true;
    },
    isFormValid() {
      return this.phone && this.isPhoneValid && this.email && this.isEmailValid
        ? true
        : false;
    },
    statusMessage() {
      return this.status == 'success'
        ? 'Ваша заявка успешно отправлена'
        : this.status == 'error'
        ? 'Не удалось отправить заявку, повторите отправку позднее'
        : '';
    },
  },
  methods: {
    getFiles(event) {
      this.files = [...event.target.files];
    },
    removeFile(name) {
      console.log(name);
      this.files = this.files.filter(file => file.name !== name);
    },
    normalizeFileSize(num) {
      let size = num / 1024;
      if (size >= 1024) {
        size = size / 1024;
        return `(${size.toFixed(1)} МБ)`;
      }
      return `(${size.toFixed(1)} КБ)`;
    },
    async sendFeedback() {
      const formData = new FormData();
      formData.append('email', this.email);
      formData.append('phone', this.phone);
      formData.append('message', this.message);

      if (this.files) formData.append('attachment', ...this.files);
      try {
        const response = await axios.post(
          `https://backend.cyberia.studio/api/v1/feedbacks`,
          formData,
        );
        console.log(response);
        if (response.status == 200) {
          this.email = '';
          this.phone = '';
          this.message = '';
          this.files = '';
          this.status = 'success';
        } else if (response.status == 422) {
          this.status = 'error';
        }
      } catch (e) {
        this.status = 'error';
      }
    },
  },
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
    position: relative;
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
    font-size: 18px;
    color: $clr-success;
    &_error {
      color: $clr-error;
    }
  }

  &__error-message {
    display: inline-block;
    margin-top: 8px;
    color: $clr-error;
  }
}
.invalid-form-item {
  border: 1px solid $clr-error;
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
      width: 100%;
    }

    &__descr {
      font-size: 13px;
      line-height: normal;
    }

    &__sent-status {
      text-align: center;
      font-size: 13px;
    }
  }
}

.add-files {
  display: flex;
  flex-direction: row;
  gap: 20px;

  &__list {
    max-width: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__item {
    padding: 0 12px 0 14px;
    border-radius: 3px;
    background-color: #9aa8ba;
    color: #303958;
  }

  &__input {
    display: none;
    align-self: flex-end;
  }

  &__btn {
    position: absolute;
    right: 15px;
    bottom: 5px;
    background-color: transparent;
    cursor: pointer;

    & svg {
      max-width: 100%;
    }

    &:hover svg path {
      stroke: $clr-accent;
    }
  }
}

.file-item {
  display: flex;
  flex-direction: row;
  gap: 17px;

  &__size {
    flex-grow: 1;
    color: $clr-main;
  }

  &__remove {
    cursor: pointer;
  }
}

@media (max-width: 767px) {
  .file-item {
    font-size: 13px;
  }
}
</style>
