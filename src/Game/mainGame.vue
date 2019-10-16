<template>
  <div>
    <h3>Состояние игрока</h3>
    <section class="game-top">
      <CountTurn :turn='game.turn' />
      <TypeGame />
      <GlobalEvent />
    </section>

    <section class="game-middle">
      <HeroCard :hero='getHeroStats'/>
      <Trophies />
      <div class="all-skills">
        <Skills />
        <LearnedSkills />
      </div>
    </section>

    <section class="game-bottom">
      <Tokens />
      <Money />
      <Inventory />
    </section>
    
    <button class="btn" @click="game.turn += 1">Конец хода</button>
  </div>
</template>


<script>
import CountTurn from './countTurn';
import HeroCard from './heroCard';
import Trophies from './Trophies';
import Skills from './Skills';
import LearnedSkills from './LearnedSkills';
import Tokens from './Tokens';
import Money from './Money';
import Inventory from './Inventory';
import GlobalEvent from './GlobalEvent';
import TypeGame from './TypeGame';


export default {
  components: {
    CountTurn,
    HeroCard,
    Trophies,
    Skills,
    LearnedSkills,
    Tokens,
    Money,
    Inventory,
    GlobalEvent,
    TypeGame
  },

  data() {
    return {
      game: this.$store.getters.getGame,
    };
  },

  computed: {
    getHeroStats() {
      const hero = {
        id: this.game.user.heroId,
        title: this.game.user.name,
        ...this.game.user.hero,
      }
      return hero;
    }
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
