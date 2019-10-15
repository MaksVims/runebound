<template>
  <main id="game">
    <component :is="getComponent"></component>
  </main>
</template>


<script>
import startGame from '../Game/startGame';
import createGame from '../Game/createGame';
import mainGame from '../Game/mainGame';

export default {
  components: {
    startGame,
    createGame,
    mainGame,
  },

  computed: {
    getComponent() {
      if (this.$store.getters.getGameMod && this.$store.getters.getGame === null) return 'createGame';
      if (this.$store.getters.getGameMod && this.$store.getters.getGame !== null) return 'mainGame';
      return 'startGame';
    },
  },
};
</script>

<style lang="scss">
#game {
  margin: 0 auto;
  z-index: 4;
  text-align: center;
}
</style>
