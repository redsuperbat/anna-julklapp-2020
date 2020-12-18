<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl my-4">Animebingo</h1>
    <div
      class="grid max-w-4xl  grid-cols-6 grid-rows-6 gap-1 sm:gap-2"
      style="height: 90vmin; width:90vmin; max-height: 56rem;"
    >
      <Question
        v-for="(question, i) in questions"
        :key="i"
        :question="question"
      />
    </div>
  </div>
</template>

<script>
import Question from "./Question.vue";
import questions from "./questions";
export default {
  setup() {
    return {
      questions,
    };
  },
  components: {
    Question,
  },
};
</script>

<style scoped></style>
