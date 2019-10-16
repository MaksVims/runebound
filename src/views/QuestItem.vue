<template>
  <article class="card-item">
    <img :src="src" :alt="item.title" class="card" :class="animateClass" />
    <img :src="getBackCard" alt="back" class="back" />
  </article>
</template>

<script>
import CardItemAnimate from '../mixins/cardItemAnimate';

export default {
  mixins: [CardItemAnimate],

  computed: {
    src() {
      return `/img/content/quests/quest_${this.item.id}.png`;
    },

    getBackCard() {
      return `/img/content/cards_back/${this.item.type}_q.png`;
    },
  },
};
</script>


<style lang="scss">
$color: #6ca86a;
</style>
