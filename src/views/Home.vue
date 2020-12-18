<template>
  <div class="w-full h-screen grid place-items-center">
    <button @click="toggleText">Toggle</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const showText = ref(false);
    function toggleText() {
      showText.value = !showText.value;
    }
    return {
      toggleText,
      showText,
    };
  },
};
</script>
