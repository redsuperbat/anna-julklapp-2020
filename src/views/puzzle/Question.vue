<template>
  <div
    @click="selectQuestion"
    v-if="show"
    xyz="fade"
    class="xyz-in hover:bg-opacity-50 transition-all grid w-full h-full place-items-center cursor-pointer shadow-sm rounded border-purple-900 border-4 text-white"
    :class="
      state === null
        ? 'bg-indigo-400'
        : state === true
        ? 'bg-green-400'
        : 'bg-red-500'
    "
  >
    <img class="h-5/6 w-5/6 " :src="src" />
  </div>
  <Dialog v-model="dialog">
    <div class="flex flex-col">
      <img v-if="question.imgUrl" :src="question.imgUrl" class="w-full" />
      <h4 class="italic uppercase underline text-xs p-1">
        {{ question.quiz }}
      </h4>
      <h1 class="text-center text-lg font-bold mt-4 px-8 ">
        {{ question.question }}
      </h1>
      <div class="flex flex-col space-y-4  p-8">
        <Button
          v-for="(alt, i) in question.alternatives"
          :key="i"
          :label="alt"
          @click="submitAnswer(alt, i)"
        />
      </div>
      <ProgressBar :progress="progress" />
    </div>
  </Dialog>
</template>

<script>
import Dialog from "@/components/Dialog.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import Button from "@/components/Button.vue";

import { computed, ref, watch } from "vue";
export default {
  props: {
    question: Object,
    index: Number,
  },
  setup(props, { emit }) {
    const state = ref(null);

    // handle fade animation
    const show = ref(false);
    setTimeout(() => (show.value = true), 50 * props.index);

    const src = computed(() => {
      const baseDir = "https://i.imgur.com";
      switch (state.value) {
        case null:
          return `${baseDir}/tI8JnE7.png`;
        case true:
          return `${baseDir}/gq60tIO.png`;
        case false:
          return `${baseDir}/AJ1l1lL.png`;
      }
    });

    const dialog = ref(false);
    const timerStartValue = 100;
    const timer = ref(timerStartValue);
    const progress = computed(() => timer.value / timerStartValue);
    let interval = null;
    function selectQuestion() {
      emit("tile-selected");
      if (state.value === null) {
        dialog.value = true;
        interval = setInterval(() => (timer.value -= 1), 100);
      }
    }
    function submitAnswer(alt) {
      resetTimer();
      dialog.value = false;
      if (props.question.answer.alternative.includes(alt)) {
        state.value = true;
        emit("correct-answer", props.index);
      } else {
        state.value = false;
        emit("wrong-answer", props.index);
      }
    }
    function resetTimer() {
      timer.value = timerStartValue;
      clearInterval(interval);
    }

    watch(
      () => timer.value,
      (value) => {
        if (!value) {
          resetTimer();
          dialog.value = false;
          state.value = false;
        }
      }
    );

    return { src, selectQuestion, submitAnswer, show, state, progress, dialog };
  },
  emits: ["correct-answer", "wrong-answer", "tile-selected"],
  components: {
    ProgressBar,
    Button,
    Dialog,
  },
};
</script>
