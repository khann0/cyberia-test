<template>
  <input class="input" :id="idx" autocomplete="on">
  <label class="label" :for="idx">{{ labelText }}</label>
</template>

<script>
export default {
  props: ['idx', 'labelText'],
}
</script>

<style lang="scss">

</style>