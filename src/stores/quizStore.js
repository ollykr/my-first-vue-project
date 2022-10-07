// state needs to be reactive, especially useful for objects
import { reactive } from "vue";

export let state = reactive({
  name: "My Second Quiz",
  questions: [],
});
