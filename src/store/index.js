import { createStore } from "vuex";

const store = createStore({
  state: {
    hasWon: false,
  },
  mutations: {
    SET_HAS_WON: (state, hasWon) => (state.hasWon = hasWon),
  },
  actions: {},
  modules: {},
});

export default store;
