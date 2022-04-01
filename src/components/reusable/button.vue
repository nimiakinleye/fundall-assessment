<script>
import { RouterLink } from "vue-router";
export default {
  props: ["buttonTitle", "formButton", "buttonColor", "buttonLink", "loading"],
  methods: {
    onClick() {
      // buttonLink ? this.$router.push(`/${buttonLink}`) : "";
    },
  },
  computed: {
    classObject() {
      return {
        "uppercase rounded-lg font-semibold": true,
        "px-3 py-2": !this.formButton,
        "py-3": this.formButton,
        "bg-primary": !this.buttonColor,
        [this.buttonColor]: this.buttonColor,
      };
    },
  },
};
</script>

<template>
  <button :class="{ 'w-full mt-6': formButton, disabled: loading }">
    <RouterLink :class="classObject" v-if="buttonLink" :to="buttonLink">{{
      buttonTitle
    }}</RouterLink>

    <p :class="classObject" v-if="!buttonLink">
      {{ loading ? "Loading..." : buttonTitle }}
    </p>
  </button>
</template>