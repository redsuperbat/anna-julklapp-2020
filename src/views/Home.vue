<template>
  <div class="w-full h-screen grid place-items-center">
    <h1 class="text-4xl text-red-600 outline-white text-center">
      God Jul Anna! Här får du en present från din käre bror!
    </h1>
    <img
      src="https://i.imgur.com/uHH05u0.png"
      class="w-5/6 max-w-md animate-jump"
      @click="handlePresentClick"
    />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    function handlePresentClick() {
      router.push("/puzzle");
    }
    return {
      handlePresentClick,
    };
  },
};
</script>
