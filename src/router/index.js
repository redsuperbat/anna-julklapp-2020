import { createRouter, createWebHistory } from "vue-router";
// import store from "../store";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },

    {
      path: "/puzzle",
      name: "Puzzle",
      component: () => import("@/views/puzzle/Puzzle.vue"),
    },
    {
      path: "/winner",
      name: "Winner",
      beforeEnter: () => {
        // if (!store.state.hasWon) {
        //   return "/puzzle";
        // }
        //
      },
      component: () => import("@/views/winner/Winner.vue"),
    },
  ],
});

export default router;
