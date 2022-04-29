<template>
  <AddItem />
  <ItemList />
  <Drawing />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddItem from "./components/AddItem.vue";
import ItemList from "./components/ItemList.vue";
import Drawing from "./components/Drawing.vue";

export default defineComponent({
  name: "App",
  components: {
    AddItem,
    ItemList,
    Drawing,
  },
});
</script>

<style lang="scss">
</style>
