<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["noty"]),
};
</script>

<template>
  <div
    class="
      flex
      w-full
      max-w-md
      justify-center
      text-white
      p-2
      border-0
      rounded
      fixed
      z-50
      top-4
      right-0
      mb-4
      translate-x-full
    "
    :class="{
      'bg-red-700': noty.type === 'error',
      'bg-green-500': noty.type === 'success',
      'bg-yellow-500': noty.type === 'warning',
      'translate-x-0': noty.status,
    }"
  >
    {{ noty.message }}
  </div>
</template>

<style scoped>
div {
  transition-duration: 500ms;
}
</style>