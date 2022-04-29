<template>
  <p v-if="!items.length">No items to draw</p>
  <ul v-else>
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
      <span class="delete-btn" @click="removeItem(index)">&#10005;</span>
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