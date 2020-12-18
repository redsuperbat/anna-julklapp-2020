<template>
  <teleport to="body">
    <div
      v-if="show"
      class="absolute w-full h-full grid place-items-center bg-black bg-opacity-50 top-0 left-0"
      @click="hideDialog"
    >
      <div
        class="bg-white rounded"
        style="max-width: 95%; min-height: 250px; "
        @click.stop
      >
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    modelValue: Boolean,
    dissmissable: Boolean,
  },
  setup(props, { emit }) {
    const show = computed({
      set(show) {
        emit("update:modelValue", show);
      },
      get() {
        return props.modelValue;
      },
    });
    function hideDialog() {
      if (props.dissmissable) {
        show.value = false;
      }
    }
    return { show, hideDialog };
  },
};
</script>
