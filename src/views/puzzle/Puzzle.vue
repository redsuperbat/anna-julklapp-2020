<template>
  <div
    class="flex flex-col items-center h-screen"
    style="background-image: url(https://cdn140.picsart.com/321921542060201.gif);background-size: contain;"
  >
    <h1 class="text-2xl my-4 text-yellow-500">Animebingo</h1>
    <h2 class="text-lg text-purple-600">Only for the weebiest of weebs</h2>
    <h4 class="text-md py-4 text-center">
      För att få den sanna presenten måste du vinna detta spel. Bevisa att du är
      den weebiaste weeaboon!!!
    </h4>
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
        @wrong-answer="handleWrongAnswer"
        @tile-selected="handleTileSelected"
      />
    </div>
    <div v-if="meme" class="flex flex-col items-center p-4">
      <h1 class="text-center text-ls">
        {{ text }}
      </h1>
      <img
        :src="meme"
        class="w-5/6 xyz-in"
        xyz="fade up-100 flip-down flip-right-50 rotate-left-100 origin-bottom duration-10"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { chooseRandom } from "../../utils";
import { correctAnswerGif, weeaboLinks } from "../../assets/constants";
import usePuzzleValidator from "../../hooks/usePuzzleValidator";
import useAudio from "../../hooks/useAudio";

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

    // Play endless soundtrack!!
    const { soundtrack, wow, NANI } = useAudio();
    soundtrack.play();
    soundtrack.onended = () => soundtrack.play();

    const meme = ref("");
    const text = ref("");
    let timeout = null;
    function handleCorrectAnswer(index) {
      latestAnswer.value = index;
      wow.play();
      showMeme(
        correctAnswerGif,
        "WOO! Sann weeaboo du är! Snart så vinner du!!!!"
      );
    }

    function showMeme(newMeme, newText) {
      meme.value = newMeme;
      text.value = newText;
      timeout = setTimeout(() => {
        meme.value = "";
        text.value = "";
      }, 5000);
    }

    function handleWrongAnswer(index) {
      console.log(index);
      NANI.play();
      const randomMeme = chooseRandom(weeaboLinks, 1)[0];
      showMeme(
        randomMeme,
        "Åhnej det var fel! Här får du en meme som plåster på såren!"
      );
    }
    function handleTileSelected() {
      clearTimeout(timeout);
      meme.value = "";
      text.value = "";
    }

    return {
      questions,
      handleCorrectAnswer,
      handleWrongAnswer,
      meme,
      text,
      handleTileSelected,
    };
  },
  components: {
    Question,
  },
};
</script>
