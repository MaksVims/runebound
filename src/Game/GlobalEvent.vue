<template>
  <article class="game-globalEvent">
    <p>Глобальное событие</p>
    <div class="game-globalEvent--content">
      <img 
      :src="`/img/content/globalEvent/${event.type}_${event.id}.png`" 
      :alt="event.title" 
      v-for='event of events' 
      :key="event.id"
      class="card-event"
      >
    </div>
  </article>
</template>

<script>

export default {
  computed: {
    events() {
      return this.$store.getters.getGame.globalEvent;
    },
  },
};
</script>

<style lang="scss">
.game-globalEvent {
  display: flex;
}
.card-event {
  width: 150px;
  height: 200px;
}
</style>
