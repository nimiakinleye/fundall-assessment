<script>
import Logo from '../Logo.vue'
import Profile from './Profile.vue'
import Button from '../reusable/Button.vue'
import TargetStatus from './TargetStatus.vue'
import DailyExpensesSummary from './DailyExpensesSummary.vue'
export default {
  props: [
    'user'
  ],
  components: {
    Logo,
    Profile,
    TargetStatus,
    DailyExpensesSummary,
    Button,
  }
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <Logo />
      <Button @click="this.$store.commit('logOut')" buttonTitle="Logout"/>
    </div>
    <Profile :user="user" class="mt-11"/>
    <TargetStatus class="my-11"/>
    <DailyExpensesSummary />
  </div>
</template>