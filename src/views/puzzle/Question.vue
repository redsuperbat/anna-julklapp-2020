<template>
  <div
    class="hover:bg-opacity-50 transition-all grid w-full h-full place-items-center cursor-pointer bg-indigo-400 shadow-sm rounded border-purple-900 border-4 text-white"
  >
    <h1>{{ question.points }} Poäng</h1>
  </div>
</template>

<script>
export default {
  props: {
    question: Object,
  },
  setup() {
    //
  },
};
</script>
