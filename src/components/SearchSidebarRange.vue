<template>
  <div>
    <form action="#">
      <p class="range-field">
        <input type="range" id="test5" min="0" max="20" v-model.number="cost" @change="searchCost"/>
        <span
          class="thumb"
          style="height: 0px; width: 0px; top: 10px; margin-left: 7px; left: 48.9036px;"
        >
        </span>
      </p>
      <p class="money-text">
        <span> {{cost}} </span>
        <img src="/img/sprite/money.png" alt="money" class="icon-money">
      </p>
    </form>
  </div>
</template>

<script>
export default {
  model: {
    value: 'cost',
    event: 'searchCost',
  },

  props: {
    value: Number,
  },

  data() {
    return {
      cost: this.value,
    };
  },

  methods: {
    searchCost() {
      this.$emit('searchCost', this.cost);
    },
  },
};
</script>
