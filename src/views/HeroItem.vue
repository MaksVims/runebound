<template>
  <article class="card-item">
    <div class="card-item--inner">
      <transition name="move" mode="appear">
        <img :src="src" :alt="item.title" class="card-hero" v-if="load === true"/>
      </transition>
      <div class="test"></div>
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
      return `/img/content/heroes/hero_${this.item.id}.jpg`;
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

.card-item--inner {
  position: relative;
}

.card-hero {
  width: 550px;
  height: 350px;
  border-radius: 15px;
  transition: all .1s linear .2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  .test {
    width: 100%;
    height: 100%;
    border: 4px solid red;
    position: absolute;
  }
}
</style>
