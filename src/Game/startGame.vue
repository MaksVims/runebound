<template>
  <div>
    <button class="btn blue" @click="startGame">Начать новую игру</button>
  </div>
</template>

<script>
export default {
  methods: {
    startGame() {
      this.$store.commit('setGameMod', true);
    },
  },
};
</script>
