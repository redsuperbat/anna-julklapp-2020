<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl my-4">Animebingo</h1>
    <h2 class="text-lg">Only for the weebiest of weebs</h2>
    <div
      class="grid max-w-4xl  grid-cols-5 grid-rows-5 gap-1 sm:gap-2"
      style="height: 90vmin; width:90vmin; max-height: 56rem;"
    >
      <Question
        v-for="(question, i) in questions"
        :key="i"
        :index="i"
        :question="question"
        @correct-answer="handleCorrectAnswer"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { chooseRandom } from "../../utils";
import usePuzzleValidator from "../../hooks/usePuzzleValidator";

import Question from "./Question.vue";

export default {
  setup() {
    const allQuestions = ref([]);
    allQuestions.value = require("../../assets/questions.json");
    const questions = computed(() => chooseRandom(allQuestions.value, 25));
    const latestAnswer = ref(-1);
    const { hasWon } = usePuzzleValidator(latestAnswer);
    watch(hasWon, (hasWon) => {
      if (hasWon) {
        alert("You have won!");
      }
    });

    function handleCorrectAnswer(index) {
      latestAnswer.value = index;
    }

    return {
      questions,
      handleCorrectAnswer,
    };
  },
  components: {
    Question,
  },
};
</script>
