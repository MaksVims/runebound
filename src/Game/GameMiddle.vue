<template>
  <section class="game-middle">
    <HeroCard :hero="getHeroStats" />
    <Trophies />
    <div class="all-skills">
      <Skills />
      <LearnedSkills />
    </div>
  </section>
</template>

<script>
import HeroCard from "./heroCard";
import Trophies from "./Trophies";
import Skills from "./Skills";
import LearnedSkills from "./LearnedSkills";

export default {
  components: {
    HeroCard,
    Trophies,
    Skills,
    LearnedSkills
  },

  props: {
    game: {
      type: Object,
      required: true
    }
  },

  computed: {
    getHeroStats() {
      const hero = {
        id: this.game.user.heroId,
        title: this.game.user.name,
        ...this.game.user.hero
      };
      return hero;
    }
  }
};
</script>