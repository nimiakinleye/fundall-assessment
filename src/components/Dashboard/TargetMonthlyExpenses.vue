<script>
import CustomInput from '../reusable/Input.vue'
export default {
  components: {
    CustomInput,
  },
};
</script>

<template>
  <div class="max-w-md">
    <CustomInput
      placeholder="Enter Target Monthly Expenses"
      type="number"
      label="Target Monthly Expenses"
      name="target_monthly_expenses"
      v-model="target_monthly_expenses"
    />
    <CustomInput
      placeholder="Pick Date"
      type="date"
      label="Date"
      name="target_date"
      v-model="target_date"
    />
  </div>
</template>