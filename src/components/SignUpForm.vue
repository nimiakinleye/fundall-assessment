<script>
import CustomInput from "../components/reusable/Input.vue";
import Button from "../components/reusable/Button.vue";

import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
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
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      error: null,
      loading: false,
    };
  },
  validations() {
    return {
      formData: {
        firstname: { required },
        lastname: { required },
        email: { required, email },
        password: { required },
        password_confirmation: { required },
      },
    };
  },
  methods: {
    async signUp() {
      this.loading = true;
      if (this.v$.formData.$invalid) {
        return (this.error = this.v$.formData.$invalid), (this.loading = false);
      }
      var res = await this.axios
        .post("https://campaign.fundall.io/api/v1/register", {
          ...this.formData,
        })
        .then((res) => {
          if (res.data.success) {
            this.loading = false
            this.$store.commit("setNoty", {
              type: "success",
              message: "Sign Up Successful, Please log in with new credentials",
            });
            this.$router.push("/sign-in");
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
  },
};
</script>

<template>
  <div class="pt-8">
    <form @submit.prevent="signUp">
      <div class="flex flex-col xl:grid grid-cols-2 gap-x-12">
        <div class="col-span-1">
          <CustomInput
            placeholder="Enter First Name"
            type="text"
            name="firstName"
            v-model="formData.firstname"
            label="First Name"
            :error="error"
            :ownError="v$.formData.firstname.$invalid"
          />
        </div>
        <div class="col-span-1">
          <CustomInput
            placeholder="Enter Last Name"
            type="text"
            name="lastName"
            v-model="formData.lastname"
            label="Last Name"
            :error="error"
            :ownError="v$.formData.lastname.$invalid"
          />
        </div>
      </div>
      <CustomInput
        placeholder="Enter Email"
        type="text"
        name="email"
        v-model="formData.email"
        label="Email"
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
      <CustomInput
        placeholder="Confirm Password"
        type="password"
        name="confirm_password"
        v-model="formData.password_confirmation"
        label="Confirm Password"
        :error="error"
        :ownError="v$.formData.password_confirmation.$invalid"
      />
      <div class="flex">
        <Button formButton="true" buttonTitle="Sign up" :loading="loading" />
      </div>
    </form>
    <p class="my-6">
      Already have an account?
      <RouterLink class="text-primary" to="/sign-in">Login Here</RouterLink>
    </p>
    <p>
      By clicking on Sign Up, you agree to our
      <RouterLink class="text-primary" to="/"
        >Terms & Conditions and Privacy Policy</RouterLink
      >
    </p>
  </div>
</template>