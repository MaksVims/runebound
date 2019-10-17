<template>
  <article class="game-globalEvent">
    <p>Глобальное событие</p>
    <div class="game-globalEvent--content">
      <GameCard
        v-for="event of events"
        :key="event.id"
        :card="event"
        :src="`/img/content/globalEvent/${event.type}_${event.id}.png`"
        type='event'
        class="card-event"
      />
    </div>
  </article>
</template>

<script>
import GameCard from "./GameCard";

export default {
  components: {
    GameCard
  },

  computed: {
    events() {
      return this.$store.getters.getGame.globalEvent;
    }
  }
};
</script>

<style lang="scss">
.game-globalEvent,
.game-globalEvent--content {
  display: flex;
}
</style>
