export default {
  state: {
    gamemod: false,
    game: null,
    typeGame: null,
  },

  getters: {
    getGameMod: state => state.gamemod,
    getGame: state => state.game,
    getTypeGame: state => state.typeGame,
  },

  mutations: {
    setGameMod(state, payload) {
      state.gamemod = payload;
    },

    startGame(state, game) {
      state.game = game;
    },

    setTypeGame(state, type) {
      state.typeGame = type;
    },
  },

  actions: {

  },
};
