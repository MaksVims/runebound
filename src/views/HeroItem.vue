<template>
  <article class="card-item card-item-hero">
    <transition name="move">
      <img :src="src" :alt="item.title" class="card-hero" v-if="load === true" />
    </transition>
  </article>
</template>

<script>
export default {
  data() {
    return {
      load: false,
    };
  },

  computed: {
    item() {
      return this.$store.getters.getItemsById(+this.$route.params.id);
    },

    src() {
      return `/img/content/heroes/hero_${this.item.id}.jpg`;
    },
  },

  mounted() {
    setTimeout(() => (this.load = true), 200);
  },
};
</script>


<style lang="scss">

.move-enter-active {
  transition: all 0.8s ease;
}

.move-leave-active {
  transition: all 0.8s ease;
}

.move-enter,
.move-leave-to {
  transform: translateY(-40%);
  opacity: 1;
}

.card-item-hero {
  display: flex;
  align-items: center;
}

.card-hero {
  width: 70%;
  height: 300px;
  border-radius: 15px;
  transition: all 0.1s linear 0.2s;
  cursor: pointer;
  margin: auto;

  &:hover {
    transform: scale(1.1);
  }

}
</style>
