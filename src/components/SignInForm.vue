<script>
import CustomInput from "../components/reusable/Input.vue";
import Button from "../components/reusable/Button.vue";

import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { mapMutations } from "vuex";
export default {
  components: {
    CustomInput,
    Button,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      error: null,
      loading: false,
    };
  },
  validations() {
    return {
      formData: {
        email: { required, email },
        password: { required },
      },
    };
  },
  mounted() {
    // console.log(this.$store)
  },
  methods: {
    async login() {
      this.loading = true;
      if (this.v$.formData.$invalid) {
        return (this.error = this.v$.formData.$invalid), (this.loading = false);
      }
      var res = await this.axios
        .post("https://campaign.fundall.io/api/v1/login", { ...this.formData })
        .then((res) => {
          if (res.data.success) {
            var user = res.data.success;
            this.$store.commit("setToken", user.user.access_token);
            this.$store.commit("setUser", user.user);
            this.$router.push("/dashboard");
            this.$store.commit("setNoty", {
              type: "success",
              message: "Login Successful",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
          this.$store.commit("setNoty", {
            type: "error",
            message: err.response.data.error.message,
          });
        });
    },
    ...mapMutations(["setToken", "setUser"]),
  },
};
</script>

<template>
  <div>
    <div class="text-left pt-16">
      <h1 class="text-4xl mb-3">Holla</h1>
      <p class="fundall-black">Sign in to the vibe!</p>
    </div>
    <form @submit.prevent="login">
      <CustomInput
        placeholder="Enter Email or Username"
        type="text"
        name="email/username"
        v-model="formData.email"
        label="Email or Username"
        :error="error"
        :ownError="v$.formData.email.$invalid"
      />
      <CustomInput
        placeholder="Enter Password"
        type="password"
        name="password"
        v-model="formData.password"
        label="Password"
        :error="error"
        :ownError="v$.formData.password.$invalid"
      />
      <div class="flex">
        <Button formButton="true" buttonTitle="Login" :loading="loading" />
      </div>
    </form>
    <p class="my-6">
      Don’t have an account?
      <RouterLink class="text-primary" to="/sign-up">Register Here</RouterLink>
    </p>
    <p>
      By clicking on Login, you agree to our
      <RouterLink class="text-primary" to="/"
        >Terms & Conditions and Privacy Policy</RouterLink
      >
    </p>
  </div>
</template>