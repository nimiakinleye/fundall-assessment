<script>
export default {
  props: ["placeholder", "type", "name", "modelValue", "label", "error", "ownError"],
  emits: ["update:modelValue"],
  methods: {
    sendValue(e) {
      // this.$emit('setInputValue', e)
    },
  },
};
</script>\

<template>
  <div class="flex flex-col mt-4 text-left">
    <label class="text-left mb-2 font-medium" :for="name">{{ label }}</label>
    <input
      class="appearance-none w-full border-2 border-gray-200 rounded py-2 px-3 focus:outline-none"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p class="text-red-600 text-xs" v-if="error && ownError">Please confirm this field</p>
  </div>
</template>