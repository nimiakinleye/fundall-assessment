<script>
import Button from '../components/reusable/button.vue'
import Logo from "../components/Logo.vue";
export default {
  components: {
    Button,
    Logo
  }
}
</script>

<template>
  <header class="flex justify-between items-center">
    <Logo />
    <div class="flex">
      <Button buttonTitle='Log in' buttonLink="/sign-in" buttonColor="bg-none"/>
      <Button buttonTitle='Sign up' buttonLink="/sign-up" class="ml-3"/>
    </div>
  </header>
</template>