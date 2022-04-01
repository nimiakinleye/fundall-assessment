<script>
import WelcomeGraphic from "../WelcomeGraphic.vue";
export default {
  components: {
    WelcomeGraphic,
  },
};
</script>
<template>
  <div class="px-4 relative py-7 bg-white rounded-lg shadow">
    <div class="flex flex-col">
      <h1 class="font-bold text-2xl capitalize">
        <span class="text-primary">Welcome Back </span
        >{{ this.$store.state.user.firstname }}
      </h1>
      <p>Now, let’s get your expenses for this month</p>
    </div>
    <div class="right-2 absolute bottom-5 hidden z-10 lg:block">
      <WelcomeGraphic />
    </div>
  </div>
</template>