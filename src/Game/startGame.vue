<template>
  <div>
    <button class="btn blue" @click="startGame">Начать новую игру</button>
  </div>
</template>

<script>
export default {
  methods: {
    startGame() {
      this.$store.commit("setGameMod", true);
    }
  },

  created() {
    this.$store.dispatch("loadCards", { path: "items", type: "setAllItems" });
    this.$store.dispatch("loadCards", { path: "quests", type: "setQuests" });
    this.$store.dispatch("loadCards", { path: "skills", type: "setSkills" });
    this.$store.dispatch("loadCards", { path: "event", type: "setEvents" });
  }
};
</script>
