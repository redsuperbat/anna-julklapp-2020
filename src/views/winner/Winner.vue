<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 place-items-center">
    <img
      src="https://i.pinimg.com/originals/90/fc/bf/90fcbf5bf03ba69fff50a565b330d7ea.gif"
    />
    <div class="flex flex-col items-center">
      <h4>{{ partyPoppers }}</h4>
      <h1>{{ winnerText }}</h1>
      <div class="w-40">
        <img
          src="https://i.imgur.com/uHH05u0.png"
          class="w-full animate-jump"
          v-show="!show"
          @click="toggleShow"
        />
        <img
          class="w-full xyz-in"
          xyz="fade duration-20"
          v-show="show"
          src="https://img.represent.com/uploads/242d3d7dd631b50eeea1a64625360952.jpg"
        />
      </div>
      <h4>{{ partyPoppers }}</h4>

      <Button label="Spela igen!!!" @click="playAgain" />
    </div>
    <img
      src="https://i.pinimg.com/originals/90/fc/bf/90fcbf5bf03ba69fff50a565b330d7ea.gif"
    />
  </div>
</template>

<script>
import { onUnmounted } from "vue";
import Button from "@/components/Button.vue";
import useAudio from "../../hooks/useAudio";
import { useRouter } from "vue-router";
import useShow from "../../hooks/useShow";
export default {
  setup() {
    const { winner } = useAudio();
    winner.play();
    onUnmounted(() => winner.pause());

    const router = useRouter();
    function playAgain() {
      router.replace("/puzzle");
    }
    const partyPoppers = "🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉";
    const winnerText = "Snyggt Anna! Välförtjänt av din julklapp";

    const { show, toggleShow } = useShow();
    return {
      playAgain,
      winnerText,
      partyPoppers,
      show,
      toggleShow,
    };
  },
  components: {
    Button,
  },
};
</script>
