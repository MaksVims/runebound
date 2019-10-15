<template>
  <div class="navbar">
    <div class="container">
      <Logo />
      <Menu />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import Menu from '@/components/BaseMenu';

export default {
  name: 'baseNavBar',
  components: {
    Logo,
    Menu,
  },
};
</script>
