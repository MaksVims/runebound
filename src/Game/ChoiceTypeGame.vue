<template>
  <section id="createGame">
    <h2>Выбери сюжет игры</h2>
    <div class="typeGame-list">
      <article class="typeGame-choise" v-for="(type,idx) of types" :key="idx">
        <img
          :src="`/img/content/typeGame/type.png`"
          :alt="type"
          class="typeGame-item"
          @dblclick="startGame(type)"
        />
        <br />
        <button class="btn green" @click="startGame(type)">Выбрать</button>
      </article>
    </div>
  </section>
</template>


<script>

export default {
  data() {
    return {
      types: ['necromant', 'dragon']
    };
  },

  methods: {
    startGame(type) {
      this.$store.commit("setTypeGame", type);
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

.typeGame-item {
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