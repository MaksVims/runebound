<template>
  <article class="card-item">
    <div class="card-item--inner">
      <transition name="move" mode="appear">
        <img :src="src" :alt="item.title" class="card-hero" v-if="load === true"/>
      </transition>
    </div>
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
      return `/img/content/heroes/hero_${this.item.id}.png`;
    },
  },

  mounted() {
    setTimeout(() => this.load = true, 200);
  },
};
</script>


<style lang="scss">
$color: #6ca86a;
.move-enter-active {
  transition: all .5s ease;
}

.move-leave-active {
  transition: all .5s ease;
}

.move-enter, .move-leave-to {
  transform: translateY(-30%);
  opacity: 1;
}

.card-hero {
  width: 550px;
  height: 350px;
  transition: all .1s linear .2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
