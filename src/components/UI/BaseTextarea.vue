<template>
  <textarea :id="idx" class="textarea custom-scroll"></textarea>
  <label class="label" for="idx">{{ labelText }}</label>
</template>

<script>
export default {
  props: ['idx', 'labelText'],
}
</script>

<style>

</style>