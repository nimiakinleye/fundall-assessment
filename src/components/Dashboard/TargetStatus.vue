<template>
  <div>
    <p>Target Monthly Expenses</p>
    <h1 class="mb-4 text-3xl font-semibold">₦{{ $store.state.user.monthly_target }}</h1>
    <div class="bg-slate-200 w-80 h-2 rounded-lg">
      <div class="bg-primary h-full rounded-lg" style="width: 30%;"></div>
    </div>
  </div>
</template>