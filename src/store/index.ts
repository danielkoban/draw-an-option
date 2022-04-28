import { ref } from "vue";
import { Items } from "../types/Items";
import { NewItem } from "../types/NewItem"

const newItem = ref<NewItem>("");
const items = ref<Items>([]);

const addItem = () => {
  items.value.push(newItem.value);
  newItem.value = "";
}

const removeItem = (index: number) => {
  items.value.splice(index, 1); 
}

export default {
  newItem,
  items,
  addItem,
  removeItem
}

