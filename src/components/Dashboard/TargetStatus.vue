<script>
export default {
  computed: {
    monthlyTarget () {
      return this.$store.state.user.monthly_target ? console.log('target found') : localStorage.getItem('monthlyTarget') || '0'
      // return this.$store.state.user.monthly_target ? this.$store.state.user.monthly_target : localStorage.getItem('monthlyTarget')
    }
  },
}
</script>

<template>
  <div>
    <p>Target Monthly Expenses</p>
    <h1 class="mb-4 text-3xl font-semibold">₦{{ monthlyTarget }}</h1>
    <div class="bg-slate-200 w-80 h-2 rounded-lg">
      <div class="bg-primary h-full rounded-lg" style="width: 30%;"></div>
    </div>
  </div>
</template>