<template>
  <article class="game-typeGame" >
    <h3 @click="showCardType">{{getTitle | filterType}}</h3>
  </article>
</template>

<script>
import { EventEmmiter } from "../main";

export default {
  computed: {
    getTitle() {
      return this.$store.getters.getTypeGame;
    },
  },

  filters: {
    filterType(str) {
      switch (str) {
        case 'dragon': return 'Возвышение Маргата';
        case 'necromant': return 'Король мертвецов';
      }
    },
  },

  methods: {
    showCardType() {
      EventEmmiter.$emit("showCard", {card: {title:this.getTitle}, type: 'typeGame'});
    }
  },

};
</script>

<style lang="scss">

.game-typeGame {
  color: #fff;

  h3 {
    cursor: pointer;
  }
  
}

</style>
