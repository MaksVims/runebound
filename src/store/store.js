import Vue from 'vue';
import Vuex from 'vuex';
import gameStore from './gameStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gameStore,
  },

  state: {
    items: [],
  },
  getters: {
    getItems: state => state.items,
    getItemsById: state => id => state.items.find(item => item.id === id),
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },

  },
  actions: {
    loadItems({ commit }, path) {
      fetch(`http://localhost:3000/${path}`)
        .then(response => response.json())
        .then(items => commit('setItems', items));
    },
  },
});
