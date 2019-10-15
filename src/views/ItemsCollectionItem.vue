<template>
  <article class="card-item">
    <img :src="src" :alt="item.title" class="card" :class="animateClass" />
    <img src="/img/content/cards_back/items.png" alt="back" class="back" />
  </article>
</template>

<script>
import CardItemAnimate from "../mixins/cardItemAnimate";

export default {
  mixins: [CardItemAnimate],

  computed: {
    src() {
      return `/img/content/items/items_${this.item.id}.png`;
    },

    classCardStyle() {
      return {
        weapon: this.item.type === "weapon",
        armor: this.item.type === "armor",
        equipment: this.item.type === "equipment",
        goods: this.item.type === "goods",
        move: this.item.type === "move"
      };
    }
  }
};
</script>


<style lang="scss">
$color: #6ca86a;
</style>
