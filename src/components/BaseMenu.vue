<template>
  <div class="main-menu">
    <ul class="main-menu--list">
      <BaseLink title='Правила' href='/rules'/>
      <BaseLink title='Герои' href='/heroes'/>
      <BaseLink title='Квесты' href='/quests'/>
      <BaseLink title='Предметы' href='/items'/>
      <BaseLink title='Режим игры' href='/gamemode'/>
    </ul>
  </div>
</template>

<script>
import BaseLink from '@/components/BaseLink';

export default {
  components: {
    BaseLink,
  },
};
</script>
