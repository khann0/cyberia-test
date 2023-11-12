<template>
  <div class="scroll-up" :class="{ 'scroll-up_shown': show }">
    <button class="scroll-up__btn" @click="scrollUp">
      <svg
        class="scroll-up__icon"
        width="27"
        height="31"
        viewBox="0 0 27 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 13.0581L13.0579 2.00022L24.1158 13.0581"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.0586 28.0645L13.0586 2.00068"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    scrollUp() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base';

.scroll-up {
  position: fixed;
  right: 40px;
  bottom: -100%;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    bottom 0.3s ease;

  &__btn {
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 7px;
    transition: background-color 0.2s ease-in-out;
    background-color: $clr-accent;
    cursor: pointer;
    &:hover {
      background-color: #0359f3;
    }
  }
  &__icon {
    transition: transform 0.3s ease-in-out;
  }
  &__btn:hover &__icon {
    transform: scaleY(1.2);
  }
  &_shown {
    z-index: 9;
    bottom: 100px;
    opacity: 1;
  }
}
</style>
