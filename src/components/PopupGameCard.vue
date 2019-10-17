<template>
  <section class="popup-game-card" v-if="show">
    <div class="popup-game-card--content">

      <template v-if="type !== 'typeGame'">
        <img :src="getSrc()" :alt="card.title" class="popup-card--img" @click="hidePopup" />
        <br />
        <button class="btn green" @click="completeCard">Выполнить</button>
        <button class="btn red">Поменять</button>
      </template>

      <template v-else>
        <FlipperCard :type='card.title' :class="{active: flipperAction}" :parentMethod="hidePopup"/>
        <button class="btn" @click="flipperActionToggle">Перевернуть</button>
      </template>
    </div>
  </section>
</template>

<script>
import { EventEmmiter } from "../main";
import FlipperCard from "../components/FlipperCard";

export default {
  name: "PopupGameCard",

  components: {
    FlipperCard
  },

  data() {
    return {
      show: false,
      card: null,
      type: null,
      flipperAction: false
    };
  },

  created() {
    EventEmmiter.$on("showCard", ({ card, type }) => {
      this.card = card;
      this.type = type;
      this.show = true;
    });
  },

  methods: {
    getSrc() {
      switch (this.type) {
        case "event":
          return `/img/content/globalEvent/${this.card.type}_${this.card.id}.png`;
        case "typeGame":
          return `/imgcontent/typeGame/${this.card.type}_1.png`;
      }
    },

    hidePopup() {
      this.show = false;
    },

    completeCard() {
      this.$store.commit("callMethodGame", {
        method: "deleteEvent",
        value: this.card.id
      });
      this.hidePopup();
    },

    flipperActionToggle() {
      this.flipperAction = !this.flipperAction;
    }
  }
};
</script>


<style lang="scss">
.popup-game-card {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.95);
  z-index: 100;

  .popup-game-card--content {
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
  }

  .popup-card--img {
    width: 250px;
    height: 400px;
    cursor: pointer;
  }

  button {
    font-size: 12px;
    font-family: "Caveat", cursive;
  }
}
</style>