<template>
  <the-header />
  <main class="main">
    <router-view />
  </main>
  <scroll-up-button />
  <the-footer />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import ScrollUpButton from './components/ScrollUpButton.vue';

export default {
  components: { TheHeader, TheFooter, ScrollUpButton },
};
</script>

<style lang="scss"></style>
