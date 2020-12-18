<template>
  <div
    class="h-4 rounded w-full relative"
    ref="wrapper"
    :style="{ backgroundColor: bgColor }"
  >
    <div
      class="absolute h-4 rounded transition-all top-0 left-0"
      :style="{ backgroundColor: progressColor, minWidth: minWidth }"
    ></div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: {
    bgColor: {
      type: String,
      default: "lightgrey",
    },
    progressColor: {
      type: String,
      default: "rgba(37, 99, 235)",
    },
    progress: Number,
  },
  setup(props) {
    const wrapper = ref();
    const minWidth = computed(() => {
      const totalWrapperWidth = wrapper.value?.getBoundingClientRect().width;
      return `${props.progress * totalWrapperWidth}px`;
    });
    return { minWidth, wrapper };
  },
};
</script>

<style></style>
