<template>
  <router-link :to="href" tag="li" class="menu-item" active-class="active">
    <a href="#">{{title}}</a>
  </router-link>
</template>

<script>
export default {
  props: {
    href: String,
    title: String,
  },
};
</script>


<style lang="scss" scoped>
.menu-item {
  display: inline-block;
  margin-right: 30px;
  padding: 5px 10px;

  &:last-child {
    margin-right: 10px;
  }
}

a {
  display: block;
  padding: 5px 10px;
  font-size: 16px;
}

.active {
  background: #4a148c;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba($color: #000000, $alpha: 0.5);
}
</style>
