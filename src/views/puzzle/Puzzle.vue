<template>
  <div
    class="flex flex-col items-center h-screen relative"
    style="background-image: url(https://cdn140.picsart.com/321921542060201.gif);background-size: contain;"
  >
    <Button label="Restart" class="absolute top-2 right-1" @click="restart" />
    <h1 class="text-2xl my-2 text-yellow-500">Animebingo</h1>
    <h2 class="text-lg text-purple-600">Only for the weebiest of weebs</h2>
    <h4 class="text-md py-2 font-bold text-center">
      För att få den sanna presenten måste du vinna detta spel. Bevisa att du är
      den weebigaste weeaboon!!!
    </h4>
    <div
      class="grid max-w-xl  grid-cols-5 grid-rows-5 gap-1 sm:gap-2"
      style="height: 90vmin; width:90vmin; max-height: 36rem;"
      :key="resetKey"
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
      <h1 class="text-center text-lg font-bold">
        {{ text }}
      </h1>
      <img
        :src="meme"
        class="w-5/6 xyz-in max-w-lg"
        xyz="fade up-100 flip-down flip-right-50 rotate-left-100 origin-bottom duration-10"
      />
    </div>
  </div>
</template>

<script>
import { onUnmounted, ref, watch } from "vue";
import { chooseRandom } from "../../utils";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { correctAnswerGif, weeaboLinks } from "../../assets/constants";
import usePuzzleValidator from "../../hooks/usePuzzleValidator";
import useAudio from "../../hooks/useAudio";

import Question from "./Question.vue";
import Button from "@/components/Button.vue";

export default {
  setup() {
    const allQuestions = ref([]);
    allQuestions.value = require("../../assets/questions.json");
    const questions = ref([]);
    chooseRandomQuestions();

    const latestAnswer = ref(-1);
    const store = useStore();
    const router = useRouter();
    const { hasWon, reset } = usePuzzleValidator(latestAnswer);
    watch(hasWon, (hasWon) => {
      if (hasWon) {
        store.commit("SET_HAS_WON", hasWon);
        router.push("/winner");
      }
    });

    function chooseRandomQuestions() {
      questions.value = chooseRandom(allQuestions.value, 25);
    }

    // Play endless soundtrack!!
    const { soundtrack, wow, NANI } = useAudio();
    soundtrack.play();
    soundtrack.onended = () => soundtrack.play();
    // Pause when navigate from page
    onUnmounted(() => {
      soundtrack.pause();
    });

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
      }, 8000);
    }

    function handleWrongAnswer() {
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

    const resetKey = ref(false);
    function restart() {
      reset();
      chooseRandomQuestions();
      resetKey.value = !resetKey.value;
    }

    return {
      questions,
      handleCorrectAnswer,
      handleWrongAnswer,
      meme,
      text,
      handleTileSelected,
      restart,
      resetKey,
    };
  },
  components: {
    Question,
    Button,
  },
};
</script>
