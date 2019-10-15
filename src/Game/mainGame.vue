<template>
  <div>
    <h4>Играем сука</h4>
    <div>Шаблон
      <img :src="`/img/content/heroes/hero_${game.user.heroId}_game.png`" :alt="game.user.name" class="hero">
    </div>
    <div>

    </div>
  </div>
</template>


<script>
export default {
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
