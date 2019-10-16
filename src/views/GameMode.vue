<template>
  <main id="game">
    <component :is="getComponent"></component>
  </main>
</template>


<script>
import startGame from '../Game/startGame';
import ChoiceHero from '../Game/ChoiceHero';
import mainGame from '../Game/mainGame';
import ChoiceTypeGame from '../Game/ChoiceTypeGame';

export default {
  components: {
    startGame,
    ChoiceHero,
    ChoiceTypeGame,
    mainGame,
  },

  computed: {
    getComponent() {
      if (this.$store.getters.getGameMod && this.$store.getters.getGame === null && this.$store.getters.getTypeGame === null) return 'ChoiceTypeGame';
      if (this.$store.getters.getGameMod && this.$store.getters.getGame === null && this.$store.getters.getTypeGame !== null) return 'ChoiceHero';
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
  margin-top: 30px;
  padding: 0px 40px;
}
</style>
