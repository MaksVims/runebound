export default {
  state: {
    allSkills: [],
    allEvents: [],
    allItems: [],
    allQuests: [],

    usedGlobalEvents: [],
    usedSkills: [],
    usedItems: [],
    usedQuests: [],
  },

  getters: {
    getAllSkills(state) {
      return state.allSkills.filter(skill => {
        if (state.usedSkills.length) {
          for (let usedSkill of state.usedSkills) {
            if (usedSkill.id === skill.id) return false;
          }
          return skill;
        } else {
          return skill;
        }
      })
    },
    getAllEvents(state) {
      return state.allEvents.filter(event => {
        if (state.usedGlobalEvents.length) {
          for (let usedEvent of state.usedGlobalEvents) {
            if (usedEvent.id === event.id) return false;
          }
          return event;
        } else {
          return event;
        }
      })
    },
  },

  mutations: {
    setSkills(state, skills) {
      state.allSkills = skills;
    },
    setEvents(state, events) {
      state.allEvents = events;
    },
    setAllItems(state, items) {
      state.allItems = items;
    },
    setQuests(state, quests) {
      state.allQuests = quests;
    },

    addedUsedCards(state, payload) {
      state[payload.type].push(payload.item);
    },
  },

  actions: {
    loadCards({ commit }, payload) {
      fetch(`http://localhost:3000/${payload.path}`)
        .then(response => response.json())
        .then(cards => commit(payload.type, cards));
    }
  },
};