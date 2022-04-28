<template>
  <AddItem />
  <ItemList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddItem from "./components/AddItem.vue";
import ItemList from "./components/ItemList.vue";

export default defineComponent({
  name: "App",
  components: {
    AddItem,
    ItemList,
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
