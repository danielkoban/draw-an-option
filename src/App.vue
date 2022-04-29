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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
