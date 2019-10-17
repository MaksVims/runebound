<template>
  <section id="createGame">
    <h2>Выбери сюжет игры</h2>
    <div class="typeGame-list">
      <article class="typeGame-choise" v-for="(type,idx) of types" :key="idx">
        <FlipperCard :type="type" :parentMethod="toggleClassClick" @dblclick="startGame(type)" />
        <br />
        <button class="btn green" @click="startGame(type)">Выбрать</button>
      </article>
    </div>
  </section>
</template>


<script>
import FlipperCard from "../components/FlipperCard";

export default {
  components: {
    FlipperCard
  },

  data() {
    return {
      types: ["necromant", "dragon"]
    };
  },

  methods: {
    startGame(type) {
      this.$store.commit("setTypeGame", type);
    },

    toggleClassClick() {
      const target = event.target.closest(".flip-container");
      if (target) {
        target.classList.toggle("active");
      }
    }
  }
};
</script>

<style lang="scss">
.typeGame-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .typeGame-choise {
    margin-bottom: 50px;
  }
}
</style>
