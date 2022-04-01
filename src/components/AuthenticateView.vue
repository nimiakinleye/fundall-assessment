<script>
import SignUpContent from "../components/SignUpContent.vue";
import SignInContent from "../components/SignInContent.vue";
import SignUpForm from "../components/SignUpForm.vue";
import SignInForm from "../components/SignInForm.vue";
import Logo from "../components/Logo.vue";
export default {
  props: ["parent"],
  components: {
    SignUpContent,
    SignInContent,
    SignUpForm,
    SignInForm,
    Logo,
  },
};
</script>

<template>
  <div>
    <Logo />
    <div
      class="lg:grid grid-cols-2 items-center justify-center gap-x-6 mt-10 lg:px-16"
    >
      <div class="max-w-xs mx-auto mb-8 lg:mb-0 text-center lg:text-left">
        <SignUpContent v-if="parent === 'sign-up'" />
        <SignInContent v-else />
      </div>
      <div>
        <div class="px-5 max-w-lg mx-auto lg:px-10 bg-white shadow rounded-lg pb-12 text-center">
          <SignUpForm v-if="parent === 'sign-up'" />
          <SignInForm v-else />
        </div>
      </div>
    </div>
  </div>
</template>