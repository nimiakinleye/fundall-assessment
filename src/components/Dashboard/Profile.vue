<script>
import ChangeAvatar from "./ChangeAvatar.vue";
export default {
  props: ["user"],
  components: {
    ChangeAvatar,
  },
  data() {
    return {
      defaultImg: "/src/assets/profile_img.png",
      changeAvatar: false,
    };
  },
  methods: {
    toggleChangeAvatar() {
      this.changeAvatar = !this.changeAvatar;
    },
  },
};
</script>

<template>
  <div class="flex items-end">
    <ChangeAvatar @toggle="toggleChangeAvatar" v-if="changeAvatar" />
    <div
      @click="toggleChangeAvatar"
      :style="{
        backgroundImage: `url(${
          user.imgUrl !==
          'https://res.cloudinary.com/fundall/image/upload/v1559037519/Dummy_to0t3i.jpg'
            ? user.imgUrl
            : defaultImg
        })`,
        backgroundSize: 'contain',
      }"
      class="cursor-pointer bg-no-repeat bg-center bg-contain p-2 w-16 h-16 mr-6 rounded-xl"
    >
      <!-- <img :src="user.imgUrl" alt=""> -->
    </div>
    <div class="flex flex-col">
      <h1 class="font-bold text-2xl capitalize">
        {{ user.firstname }} {{ user.lastname }}
      </h1>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>