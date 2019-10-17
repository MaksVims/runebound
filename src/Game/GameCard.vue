<template>
  <article class="game-card">
    <img :src="src" :alt="card.title" class="game-card-img" />

    <template v-if="active">
      <div class="card-popup">
        
      </div>
    </template>

  </article>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    card: {
      type: Object,
      required: true
    },
    src: String
  },

  data() {
    return {
      active: false
    };
  }
};
</script>

<style lang="scss">
.game-card-img {
  width: 150px;
  height: 200px;
  cursor: pointer;
  transition: transform .3s linear;

  &:hover {
    transform: scale(1.5);
  }
}
</style>