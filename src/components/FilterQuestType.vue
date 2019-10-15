<template>
  <div>
    <select @change="filterType" v-model="type" ref="filterType">
      <option value selected>
        <span class="text-quest--type">Все </span>
      </option>
      <option value="green">
        <span class="text-quest--type">
          Исследования
          <img
            src="/img/sprite/green_icon.png"
            alt="Исследования"
            class="typeQuestIcon"
          />
        </span>
      </option>
      <option value="orange">
        <span class="text-quest--type">
          Cтолкновения
          <img
            src="/img/sprite/orange_icon.png"
            alt="Cтолкновения"
            class="typeQuestIcon"
          />
        </span>
      </option>
      <option value="violet">
        <span class="text-quest--type">
          Встреча
          <img src="/img/sprite/violet_icon.png" alt="Встреча" class="typeQuestIcon" />
        </span>
      </option>
    </select>
    <label>Фильтр квестов по типу</label>
  </div>
</template>

<script>
export default {
  model: {
    value: 'value',
    event: 'filterType',
  },

  props: {
    value: String,
  },

  data() {
    return {
      type: this.value,
      select: null,
    };
  },

  mounted() {
    this.select = M.FormSelect.init(this.$refs.filterType, {});
  },

  destroyed() {
    if (this.select && this.select.destroy) this.select.destroy();
  },

  methods: {
    filterType() {
      this.$emit('filterType', this.type);
    },
  },
};
</script>

<style lang="scss">
.text-quest--type {
  color: black;

  .typeQuestIcon {
    width: 25px;
    height: 25px;
    margin: 0;
  }
}
</style>
