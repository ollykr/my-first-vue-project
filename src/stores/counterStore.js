import { reactive } from "vue";

export let counter = reactive({
  // state
  count: 0,
  // method or action
  increment() {
    if (this.count >= 10) {
      return;
    }

    this.count++;
  },
});
