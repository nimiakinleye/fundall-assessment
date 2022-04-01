<script>
import CustomInput from "../reusable/Input.vue";
import Button from "../reusable/Button.vue";
export default {
  components: {
    CustomInput,
    Button,
  },
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
    };
  },
  computed: {
    todayExpenseTotal() {
      return Number(this.value1) + Number(this.value2) + Number(this.value3);
    },
    withDate() {
      var data = {
        value: this.todayExpenseTotal,
        date: new Date().toDateString(),
      };
      return data;
    },
  },
  methods: {
    submit() {
      if (this.todayExpenseTotal === 0) {
        return this.$store.commit('setNoty', {
          type: 'error',
          message: 'Please enter an expense',
        });
      }
      // localStorage.setItem('dailyExpenses', this.withDate);
      // console.log(this.withDate);
      localStorage.setItem(
        "dailyExpenses",
        encodeURIComponent(JSON.stringify(this.withDate))
      );
      window.location.href = "/dashboard";
    },
  },
};
</script>
<template>
  <div class="mt-8">
    <p class="-mb-4 fundall-black">Today's Expenses</p>
    <div>
      <form @submit.prevent="submit">
        <div class="sm:grid grid-cols-2 gap-x-12">
          <CustomInput placeholder="Enter an expense name" />
          <CustomInput
            type="number"
            v-model="value1"
            placeholder="Enter expense value"
          />
          <CustomInput placeholder="Enter an expense name" />
          <CustomInput
            type="number"
            v-model="value2"
            placeholder="Enter expense value"
          />
          <CustomInput placeholder="Enter an expense name" />
          <CustomInput
            type="number"
            v-model="value3"
            placeholder="Enter expense value"
          />
        </div>
        <div class="flex justify-end items-center mt-6">
          <p>Total Actual Expenses: ₦</p>
          <span class="p-2 bg-white rounded ml-1 fundall-black">{{
            todayExpenseTotal
          }}</span>
        </div>
        <div class="mt-8 flex justify-center">
          <Button buttonTitle="save Today's expenses" />
        </div>
      </form>
    </div>
  </div>
</template>