<template>
  <section class="game-bottom">
    <Tokens />
    <Money />
    <Inventory />
  </section>
</template>

<script>
import Tokens from './Tokens';
import Money from './Money';
import Inventory from './Inventory';

export default {
  components: {
    Tokens,
    Money,
    Inventory,
  },

  props: {
    game: {
      type: Object,
      required: true,
    },
  },
};
</script>
