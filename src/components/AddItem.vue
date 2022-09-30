<template>
  <div>
    <input type="text" v-model="newItem" @keyup.enter="addItem" />
    <button @click="addItem" :disabled="!newItem">Dodaj</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../store";

export default defineComponent({
  setup() {
    const { newItem, addItem } = store;

    return {
      newItem,
      addItem,
    };
  },
});
</script>

<style lang="scss">
input {
  height: 40px;
  margin: 10px;
  padding: 12px;
  border: 1px solid var(--color-pink);
  border-radius: 25px;
  outline: none;
}
</style>