<template>
  <article class="game-card">
    <img :src="src" :alt="card.title" class="game-card-img" @click="emmiter" />

  </article>
</template>

<script>
import { EventEmmiter } from "../main";

export default {
  name: "GameCard",
  props: {
    card: {
      type: Object,
      required: true
    },
    src: String,
    type: String
  },

  data() {
    return {
      active: false
    };
  },

  methods: {
    emmiter() {
      EventEmmiter.$emit("showCard", {card: this.card, type: this.type});
    }
  }
};
</script>

<style lang="scss">
.game-card-img {
  width: 150px;
  height: 200px;
  cursor: pointer;
  transition: transform 0.3s linear;

  &:hover {
    transform: scale(1.5);
  }
}
</style>