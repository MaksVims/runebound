<template>
  <div class="filterName">
    <input placeholder="Поиск..." id="searchSidebar" type="text" class="validate" @input="search" />
  </div>
</template>


<script>
export default {
  model: {
    prop: 'value',
    event: 'search',
  },

  props: {
    value: String,
  },

  methods: {
    search() {
      this.$emit('search', event.target.value);
    },
  },
};
</script>

<style lang="scss">
.filterName {
  width: 90%;
  margin-top: 15px;
}
#searchSidebar {
  font-family: 'Caveat', cursive;
  font-size: 20px;
}
</style>
