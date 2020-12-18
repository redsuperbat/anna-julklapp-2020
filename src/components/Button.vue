<template>
  <button
    class="bg-blue-600 hover:bg-blue-500 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded"
  >
    {{ label }}
    <slot v-if="!label" />
  </button>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>
