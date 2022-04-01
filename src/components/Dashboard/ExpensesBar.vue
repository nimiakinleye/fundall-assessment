<script>
import WelcomeBack from "./WelcomeBack.vue";
import TargetMonthlyExpenses from "./TargetMonthlyExpenses.vue";
import TodayExpenses from "./TodayExpenses.vue";
export default {
  components: {
    WelcomeBack,
    TargetMonthlyExpenses,
    TodayExpenses,
  },
};
</script>

<template>
  <div class="px-7 py-10 rounded-lg bg-slate-300">
    <WelcomeBack class="mb-8" />
    <div class="px-8">
      <TargetMonthlyExpenses />
      <TodayExpenses />
    </div>
  </div>
</template>