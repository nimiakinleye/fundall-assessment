<script>
import CustomInput from "../reusable/Input.vue";
import Button from "../reusable/Button.vue";
export default {
  components: {
    CustomInput,
    Button,
  },
  data() {
    return {
      selectedFile: null,
      validImg: false,
      loading: false,
    };
  },
  methods: {
    onFileSelected(e) {
      if (!e.target.files[0].type.includes("image")) {
        this.$store.commit("setNoty", {
          message: "Wrong file format supplied, upload IMG file instead please",
          type: "error",
        });
      } else {
        this.selectedFile = e.target.files[0];
        this.validImg = true;
      }
    },
    async upload() {
      if (this.validImg) {
        this.loading = true;
        const headers = {
          Authorization: `Bearer ${this.$store.state.token}`,
          "Content-Type": "application/json",
        };
        const fd = new FormData();
        fd.append("avatar", this.selectedFile);
        var res = await this.axios
          .post("https://campaign.fundall.io/api/v1/base/avatar", fd, {
            headers: headers,
          })
          .then((res) => {
            this.$store.dispatch('updateUser')
            this.$store.commit("setNoty", {
              message: res.data.success.message,
              type: "success",
            });
            this.loading = false;
          })
          .catch((err) => {
            this.loading = false;
            this.$store.commit("setNoty", {
              message: err.response.data.error.message,
              type: "error",
            });
          });
      } else {
        this.$store.commit("setNoty", {
          message: "Upload an image please",
          type: "error",
        });
      }
    },
  },
};
</script>

<template>
  <div
    class="
      h-screen
      w-screen
      bg-black bg-opacity-90
      fixed
      top-0
      left-0
      z-40
      flex
      justify-center
    "
  >
    <div class="flex flex-col relative justify-center">
      
      <div
        class="w-72 h-72 flex justify-center rounded-md bg-white p-5 shadow-lg"
      >
      <div @click="$emit('toggle')" class="absolute right-4 bg-green-600 p-2 rounded-md text-white cursor-pointer">x</div>
        <div class="flex flex-col justify-center">
          <form @submit.prevent="upload">
            <CustomInput
              label="Select image file"
              type="file"
              name="avatar"
              id="avatar"
              @change="onFileSelected"
            />
            <Button formButton="true" buttonTitle="Upload" :loading="loading" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>