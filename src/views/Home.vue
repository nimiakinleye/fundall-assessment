<script>
import Header from "../components/Header.vue";
import HomepageGraphics from "../components/Homepage.vue";
export default {
  name: "Home",
  components: {
    Header,
    HomepageGraphics,
  },
};
</script>

<template>
  <div>
    <Header />
    <div class="flex flex-col items-center w-full mt-20">
      <HomepageGraphics />
      <div class="text-center">
        <div class="text-4xl my-16">
          <h1 class="font-black mb-4">Fundall Expense Tracker</h1>
          <p>Mini Project Frontend</p>
        </div>
        <h1 class="font-bold">by Babatunde Fashola</h1>
      </div>
    </div>
  </div>
</template>