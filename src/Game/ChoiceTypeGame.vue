<template>
  <section id="createGame">
    <h2>Выбери сюжет игры</h2>
    <div class="typeGame-list">
      <article class="typeGame-choise" v-for="(type,idx) of types" :key="idx">
        <div
          class="flip-container"
          ontouchstart="this.classList.toggle('hover');"
          @click="toggleClass"
        >
          <div class="flipper">
            <img
              :src="`/img/content/typeGame/${type}_1.png`"
              :alt="type"
              class="typeGame-item front"
              @dblclick="startGame(type)"
            />
            <img
              :src="`/img/content/typeGame/${type}_2.png`"
              :alt="type"
              class="typeGame-item back"
              @dblclick="startGame(type)"
            />
          </div>
        </div>
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
      types: ['necromant', 'dragon'],
    };
  },


  methods: {
    startGame(type) {
      this.$store.commit('setTypeGame', type);
    },

    toggleClass(event) {
      const target = event.target.closest('.flip-container');
      if (target) {
        target.classList.toggle('active');
      }
    },
  },
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

  .flip-container.active .flipper {
    transform: rotateY(180deg);
  }
}

.typeGame-item {
  width: 300px;
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.4s linear;
}
</style>
