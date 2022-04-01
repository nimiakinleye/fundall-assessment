<script>
export default {
  data () {
    return {
      data: decodeURIComponent(localStorage.getItem('dailyExpenses'))
    }
  },
  computed: {
    dailyExpenses(){
      return localStorage.getItem('dailyExpenses') ? JSON.parse(decodeURIComponent(localStorage.getItem('dailyExpenses'))) : false
    }
  },
}
</script>

<template>
  <div class="fundall-black lg:w-96 h-96 p-8 rounded-xl bg-white">
    <h1>Daily Expenses Summary</h1>
    <div class="flex justify-between mt-8">
      <div>{{ dailyExpenses.date }}</div>
      <div>{{ dailyExpenses.value }}</div>
    </div>
    <div v-if="!dailyExpenses" class="flex flex-col h-full font-semibold justify-center items-center">
      <img class="w-40 mb-8" src="/src/assets/empty_cart.svg" alt="">
      <p>No expenses recorded today</p>
    </div>
  </div>
</template>