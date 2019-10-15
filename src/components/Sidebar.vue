<template>
  <section class="sidebar">
    <h4>{{title}}</h4>
    <template v-if="path === 'items'">
      <SearchRange v-model="cost" @searchCost="cost = $event" />
    </template>

    <template v-if="path === 'quests'">
      <FilterQuestType v-model="type" @filterType="type = $event" />
    </template>

    <Search v-model="filter" @search="filter = $event" />
    <SideBarItems :items="filterItems" :path="path" />
  </section>
</template>

<script>
import Search from "@/components/SearchSidebar";
import SearchRange from "@/components/SearchSidebarRange";
import SideBarItems from "@/components/SideBarItems";
import FilterQuestType from "@/components/FilterQuestType";

export default {
  components: {
    Search,
    SideBarItems,
    SearchRange,
    FilterQuestType
  },

  props: {
    path: String,
    title: String
  },

  data() {
    return {
      filter: "",
      cost: 20,
      type: ""
    };
  },

  computed: {
    filterItems() {
      let items = this.$store.getters.getItems;
      if (this.filter.length) {
        items = items.filter(
          item =>
            item.title.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1
        );
      }
      if (this.path === "items")
        items = items.filter(item => item.cost <= this.cost);
      if (this.type.length > 0 && this.path === "quests")
        items = this.filterQuest(items);
      return items.sort((a, b) => a.title.localeCompare(b.title));
    }
  },

  created() {
    this.$store.dispatch("loadItems", this.path);
  },

  methods: {
    filterQuest(items) {
      return items.filter(item => item.type === this.type);
    }
  }
};
</script>

<style lang="scss">
.sidebar {
  width: 35%;
  background: #fff;
  padding: 20px 15px;
  border-radius: 10px;
  z-index: 4;
  max-height: 80vh;

  h4 {
    text-align: center;
    margin-bottom: 10px;
  }

  input {
    margin-bottom: 10px;
  }
}

</style>
