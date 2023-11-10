<template>
  <the-header></the-header>
  <router-view />
  <main class="main"></main>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: { TheHeader, TheFooter },
}
</script>

<style lang="scss">
@import '@/assets/styles/base';
</style>
