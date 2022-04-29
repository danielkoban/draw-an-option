<template>
  <h2>{{ drawnItem }}</h2>
  <button @click="drawItem" :disabled="!disabled">Wylosuj</button>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import store from "../store";

export default defineComponent({
  setup() {
    const { items } = store;
    const drawnItem = ref("");

    const drawItem = () => {
      drawnItem.value =
        items.value[Math.floor(Math.random() * items.value.length)];
    };

    const disabled = computed(() => !!items.value.length);

    return {
      drawnItem,
      items,
      drawItem,
      disabled,
    };
  },
});
</script>

<style>
</style>