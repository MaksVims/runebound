export default {
  state: {
    gamemod: false,
    game: null,
  },

  getters: {
    getGameMod: state => state.gamemod,
    getGame: state => state.game,
  },

  mutations: {
    setGameMod(state, payload) {
      state.gamemod = payload;
    },

    startGame(state, game) {
      state.game = game;
    },
  },

  actions: {

  },
};
