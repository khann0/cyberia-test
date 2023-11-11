<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base';

.btn {
  padding: 20px 85px;
  text-transform: uppercase;
  border-radius: 35px;
  cursor: pointer;
  background-color: $clr-accent;
  color: $clr-main;
  font-family: $ff-os;
  font-size: 13px;
  font-weight: 300;
  line-height: normal;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #0359f3;
  }
}
.btn:disabled {
  pointer-events: none;
  opacity: 0.7;
}
@media (max-width: 991px) {
  .btn {
    padding: 17px 76px;
    font-size: 16px;
    font-weight: 400;
  }
}
@media (max-width: 575px) {
  .btn {
    padding: 15px 45px;
    font-size: 13px;
    line-height: normal;
  }
}
</style>
