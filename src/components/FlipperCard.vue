<template>
  <div class="flip-container" ontouchstart="this.classList.toggle('hover');" @click="parentMethod">
    <div class="flipper">
      <img :src="`/img/content/typeGame/${type}_1.png`" :alt="type" class="typeGame-item front" />
      <img :src="`/img/content/typeGame/${type}_2.png`" :alt="type" class="typeGame-item back" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FlipperCard",

  props: {
    type: String,
    parentMethod: Function,
  },

};
</script>

<style lang="scss">
.flip-container.active .flipper {
  transform: rotateY(180deg);
}

.typeGame-item {
  width: 300px;
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.4s linear;
}
</style>