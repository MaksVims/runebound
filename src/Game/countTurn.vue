<template>
  <section class="turn">
    <span>Ход {{turn}}</span>
  </section>
</template>

<script>
export default {
  name: 'countTurn',

  props: {
    turn: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.turn {
  color: #fff;
  font-size: 45px;
}
</style>
