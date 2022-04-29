<template>
  <div>
    <input type="text" v-model="newItem" @keyup.enter="addItem" />
    <button @click="addItem">Dodaj</button>
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
  border: 1px solid #d7c0d0;
  border-radius: 25px;
  outline: none;
}
</style>