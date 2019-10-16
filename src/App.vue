<template>
  <div id="app" style="background: url('/img/general/main-bg-2.jpg')">
    <NavBar />
    <div id="wrapper-main">
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/BaseNavBar';

export default {
  components: {
    NavBar,
  },

  created() {
    this.$router.push('/');
  },
};
</script>

<style lang="scss">
@import "@/assets/variable.scss";
@import "@/assets/common_style.scss";
@import "@/assets/baseNavBar.scss";
@import "@/assets/cardItemDesktop.scss";
@import '@/assets/game_mode.scss';
@import "~materialize-css/dist/css/materialize.min.css";
</style>
