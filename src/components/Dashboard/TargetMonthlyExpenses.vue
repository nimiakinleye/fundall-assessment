<script>
import CustomInput from "../reusable/Input.vue";
import Button from "../reusable/Button.vue";
export default {
  components: {
    CustomInput,
    Button,
  },
  data () {
    return {
      formData: {
        targetMonthlyExpenses: null,
        targetDate: null,
      },
      loading: false,
    }
  },
  methods: {
    setMonthlyTarget () {
      if (this.formData.targetMonthlyExpenses === null || this.formData.targetDate === null) {
        return this.$store.commit('setNoty', {
          message: 'Please input complete details',
          type: 'error',
        })
      }
      localStorage.setItem('monthlyTarget', this.formData.targetMonthlyExpenses)
      window.location.href = '/dashboard'
    }
  }
};
</script>

<template>
  <div class="max-w-md">
    <form @submit.prevent="setMonthlyTarget">
      <CustomInput
        placeholder="Enter Target Monthly Expenses"
        type="number"
        label="Target Monthly Expenses"
        name="target_monthly_expenses"
        v-model="formData.targetMonthlyExpenses"
      />
      <CustomInput
        placeholder="Pick Date"
        type="date"
        label="Date"
        name="target_date"
        v-model="formData.targetDate"
      />
      <Button class="mt-4" buttonTitle="Set Target" :loading="loading"/>
    </form>
  </div>
</template>