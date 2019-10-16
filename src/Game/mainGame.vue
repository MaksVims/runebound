<template>
  <div>
    <h3>Состояние игрока</h3>
    <countTurn :turn='game.turn'/>
    <div>
      <img :src="`/img/content/heroes/hero_${game.user.heroId}_game.jpg`" :alt="game.user.name" class="hero">
    </div>
    
    <button class="btn" @click="game.turn += 1">Конец хода</button>
  </div>
</template>


<script>
import countTurn from './countTurn';


export default {
  components: {
    countTurn
  },


  data() {
    return {
      game: this.$store.getters.getGame,
    };
  },
};
</script>

<style lang="scss">

.hero {
  width: 300px;
  height: 150px;
}

</style>
