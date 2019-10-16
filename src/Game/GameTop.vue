<template>
  <section class="game-top">
    <CountTurn :turn="game.turn" />
    <TypeGame />
    <GlobalEvent />
  </section>
</template>

<script>
import CountTurn from "./countTurn";
import GlobalEvent from "./GlobalEvent";
import TypeGame from "./TypeGame";

export default {
  components: {
    CountTurn,
    GlobalEvent,
    TypeGame
  },

  props: {
    game: {
      type: Object,
      required: true
    }
  }
};
</script>