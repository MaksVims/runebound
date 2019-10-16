<template>
  <div>
    <h3>Состояние игрока</h3>
    <GameTop :game='game'/>
    <GameMiddle :game='game'/>
    <GameBottom :game='game'/>

    <button class="btn" @click="game.turn += 1">Конец хода</button>
  </div>
</template>


<script>
import GameTop from './GameTop';
import GameMiddle from './GameMiddle';
import GameBottom from './GameBottom';

export default {
  components: {
    GameTop,
    GameMiddle,
    GameBottom,
  },

  data() {
    return {
      game: this.$store.getters.getGame,
    };
  },

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
