<script>
import { RouterLink, RouterView } from 'vue-router'
import Notification from './components/reusable/Notification.vue'

export default {
  components: {
    Notification
  }
};
</script>

<template>
  <div class="container rounded-3xl shadow-lg py-16 mx-auto px-4 xl:px-8 pt-6 border-8 border-white">
    <Notification />
    <RouterView />
  </div>
</template>

<style>

</style>
