<script>
import ExpensesBar from "../components/dashboard/ExpensesBar.vue";
import Sidebar from "../components/dashboard/Sidebar.vue";
import { mapState } from "vuex";
export default {
  components: {
    Sidebar,
    ExpensesBar,
  },
  beforeCreate() {
    this.$store.commit('fetchUser');
  },
  computed: mapState(["user"]),
};
</script>
<template>
  <div class="lg:grid grid-cols-5 gap-x-6">
    <div class="col-span-1 col-span-2">
      <Sidebar
        class="mb-8 lg:mb-0"
        :user="{
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          imgUrl: user.avatar,
        }"
      />
    </div>
    <div class="col-span-3">
      <ExpensesBar />
    </div>
  </div>
</template>