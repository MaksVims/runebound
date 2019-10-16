<template>
  <article class="game-typeGame">
    <h3>{{getTitle | filterType}}</h3>
  </article>
</template>

<script>
export default {
  computed: {
    getTitle() {
      return this.$store.getters.getTypeGame;
    }
  },

  filters: {
    filterType(str) {
      switch(str) {
        case 'dragon': return 'Возвышение Маргата';
        case 'necromant': return 'Король мертвецов';
      }
    }
  }
}
</script>

<style lang="scss">
.game-typeGame {
  color: #fff;
}
</style>