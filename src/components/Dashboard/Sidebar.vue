<script>
import Logo from '../Logo.vue'
import Profile from './Profile.vue'
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
  }
}
</script>

<template>
  <div>
    <Logo />
    <Profile :user="user" class="mt-11"/>
    <TargetStatus class="my-11"/>
    <DailyExpensesSummary />
  </div>
</template>