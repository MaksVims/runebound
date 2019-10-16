<template>
  <div>
    <h3>Состояние игрока</h3>
    <countTurn :turn='game.turn'/>
    <div>
      <img :src="`/img/content/heroes/hero_${game.user.heroId}_game.png`" :alt="game.user.name" class="hero">
    </div>
    <section class="top">
      <heroCard :hero='game.user.hero'/>
    </section>
    
    <button class="btn" @click="game.turn += 1">Конец хода</button>
  </div>
</template>


<script>
import countTurn from './countTurn';
import heroCard from './heroCard';


export default {
  components: {
    countTurn,
    heroCard
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
