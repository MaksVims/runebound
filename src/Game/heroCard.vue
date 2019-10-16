<template>
  <article class="game-hero--card">
    <img
      :src="`/img/content/heroes/hero_${this.hero.id}_game.png`"
      :alt="this.hero.title"
      class="hero"
    />
  </article>
</template>

<script>
export default {
  name: "heroCard",
  props: {
    hero: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.game-hero--card {
  flex-basis: 35%;
  .hero {
    width: 350px;
    height: 250px;
  }
}
</style>