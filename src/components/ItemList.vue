<template>
  <p v-if="!items.length">No items to draw</p>
  <ul v-else>
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
      <button @click="removeItem(index)">-</button>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";
import store from "../store";

export default defineComponent({
  setup() {
    const { items, removeItem } = store;

    return {
      items,
      removeItem,
    };
  },
});
</script>

<style>
</style>