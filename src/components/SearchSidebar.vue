<template>
  <div>
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
