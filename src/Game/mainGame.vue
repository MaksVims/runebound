<template>
  <div>
    <h3>Состояние игрока</h3>
    <GameTop :game="game" />
    <GameMiddle :game="game" />
    <GameBottom :game="game" />

    <button class="btn" @click="nextTurn">Конец хода</button>
  </div>
</template>


<script>
import randomElement from '../script/randomElement';
import GameTop from "./GameTop";
import GameMiddle from "./GameMiddle";
import GameBottom from "./GameBottom";

export default {
  components: {
    GameTop,
    GameMiddle,
    GameBottom
  },

  data() {
    return {
      game: this.$store.getters.getGame
    };
  },

  created() {
    this.$store.dispatch("loadCards", { path: "items", type: "setAllItems" });
    this.$store.dispatch("loadCards", { path: "quests", type: "setQuests" });
    this.$store.dispatch("loadCards", { path: "skills", type: "setSkills" });
    this.$store.dispatch("loadCards", { path: "event", type: "setEvents" });
  },

  methods: {
    nextTurn() {
      const eventTurn = [3, 6, 9, 12, 15, 18, 21, 24];
      this.game.turn += 1;
      if (eventTurn.includes(this.game.turn)) {
        const randomEvent = randomElement(this.$store.getters.getAllEvents);
        this.game.createEvent(randomEvent);
        this.$store.commit('addedUsedCards', {type: 'usedGlobalEvents', item: randomEvent})
      }
    },
  }
};
</script>

<style lang="scss">
.game-middle {
  display: flex;

  .all-skills {
    flex-basis: 50%;
  }
}

.game-bottom {
  display: flex;
}

.game-top {
  display: flex;
}
</style>
