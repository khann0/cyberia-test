<template>
  <textarea
    :value="modelValue"
    @input="updateInputValue"
    :id="idx"
    :name="name"
    class="textarea custom-scroll"
  />
  <label class="label" :class="{ label_fixed: isLabelFixed }" for="idx">{{
    labelText
  }}</label>
</template>

<script>
export default {
  name: 'base-textarea',
  props: {
    modelValue: String,
    idx: String,
    name: String,
    labelText: String,
  },
  computed: {
    isLabelFixed() {
      return this.modelValue;
    },
  },
  methods: {
    updateInputValue(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
