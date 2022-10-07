import { reactive } from "vue";

export let counter = reactive({
  count: 0,
  // action
  increment() {
    if (this.count >= 10) {
      return;
    }

    this.count++;
  },
});
