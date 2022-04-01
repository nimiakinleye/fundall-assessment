<script>
import CustomInput from "../reusable/Input.vue";
export default {
  components: {
    CustomInput,
  },
};
</script>
<template>
  <div class="mt-8">
    <p class="-mb-4">Today's Expenses</p>
    <div class="sm:grid grid-cols-2 gap-x-12">
      <CustomInput placeholder="Enter an expense value" />
      <CustomInput placeholder="Enter an expense value" />
    </div>
  </div>
</template>