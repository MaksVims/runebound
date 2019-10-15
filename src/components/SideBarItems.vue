<template>
  <div class="sidebar-list" :class="path">
    <ul class="collection">
      <router-link
      v-for="item of items"
      :key="item.id"
      tag="li"
      :to="`/${path}/` + item.id"
      class="collection-item coll-item"
      exact
      active-class="active"
      >
      <a href="#">{{item.title}}</a>
      </router-link>
    </ul>
  </div>
</template>


<script>
export default {
  props: {
    items: Array,
    path: String,
  },

};
</script>

<style lang="scss">
.sidebar-list {
  overflow-y: auto;
  height: 78%;
  margin-top: 10px;
}

.sidebar-list.items {
  height: 72%;
}

.coll-item {

  &.active {
    background: #ccc !important;
  }

  a {
    font-size: 20px;
    color: black;
  }
}
</style>
