<template>
  <div>
    <input type="text" v-model="newItem" @keyup.enter="addItem" />
    <button @click="addItem">+</button>
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

<style>
</style>