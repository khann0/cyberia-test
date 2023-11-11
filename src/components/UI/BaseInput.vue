<template>
  <input
    :value="modelValue"
    @input="updateInputValue"
    class="input"
    :class="{ input_error: errorClass }"
    :id="idx"
    :type="type"
    :name="name"
    autocomplete="on"
  />
  <label
    class="label"
    :class="{ label_fixed: isLabelFixed, label_error: errorClass }"
    :for="idx"
  >
    {{ labelText }}
  </label>
</template>

<script>
export default {
  props: {
    idx: String,
    type: String,
    name: String,
    labelText: String,
    modelValue: String,
    errorClass: Boolean,
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
