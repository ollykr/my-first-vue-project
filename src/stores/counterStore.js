// define a new store

import { defineStore } from "pinia";

// assign a function to a variable and export it
// 'counter' can be replaced with whatever you want
export let useCounterStore = defineStore("counter", {
  // data
  state() {
    return {
      count: 5,
    };
  },
  // methods
  actions: {
    increment() {
      if (this.count < 10) {
        this.count++;
      }
    },
  },
  // computed properties
  getters: {
    remaining() {
      return 10 - this.count;
    },
  },
});
