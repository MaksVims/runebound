<template>
  <section class="turn">
    <span>{{turn}}</span>
  </section>
</template>

<script>
export default {
  name: "count Turn",

  props: {
    turn: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss">
.turn {
  color: #fff;
  font-size: 45px;
}
</style>