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

    animateClass() {
      return {
        active: this.load,
      };
    },

  },

  mounted() {
    setTimeout(() => (this.load = true), 300);
  },

  updated() {
    setTimeout(() => (this.load = true), 300);
  },

  watch: {
    $route() {
      this.load = false;
    },
  },
};
