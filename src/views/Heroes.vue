<template>
  <main id="main">
    <Sidebar path="heroes" title="Игровые персонажи" />
    <section class="content">
      <router-view />
    </section>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar';

export default {
  components: {
    Sidebar,
  },
};
</script>
