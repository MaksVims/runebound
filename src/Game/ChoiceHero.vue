<template>
  <section id="createGame">
    <h2>Выбери игрового персонажа</h2>
    <div class="hero-list">
      <article class="hero-card--choise" v-for="hero of getHeroes" :key="hero.id">
        <img :src="`/img/content/heroes/hero_${hero.id}.jpg`" :alt="hero.name" class="hero-item" @dblclick="startGame(hero.id)"/>
        <br />
        <button class="btn green" @click="startGame(hero.id)">Выбрать</button>
      </article>
    </div>
  </section>
</template>

<script>
import Game from '../script/Game';

export default {
  data() {
    return {
      heroes: [],
    };
  },

  computed: {
    getHeroes() {
      return this.$store.getters.getItems;
    },
  },

  created() {
    this.$store.dispatch('loadItems', 'heroes');
  },

  methods: {
    startGame(id) {
      const hero = this.getHeroes.find(hero => hero.id === id);
      console.log(new Game(hero));
      this.$store.commit('startGame', new Game(hero));
    },
  },
};
</script>

<style lang="scss">

.hero-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .hero-card--choise {
    margin-bottom: 50px;
  }
}

.hero-item {
  width: 300px;
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform .4s linear;

  &:hover {
    transform: scale(1.4);
  }
}
</style>
