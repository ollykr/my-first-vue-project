<script setup>
// set up reactive properties
// 'watch' to make local storage' values updated when input's value is changed
import { ref, watch } from "vue";
// default to empty string
let food = ref(localStorage.getItem("food"));
let age = ref(localStorage.getItem("age"));

watch(food, (val) => {
  write("food", val);
});
watch(age, (val) => {
  write("age", val);
});

function write(key, val) {
  localStorage.setItem(key, val);
}

setTimeout(() => {
  food.value = "changed";
}, 2000);
</script>
<template>
  <main>
    <!-- We want to save typed values into a local storage -->
    <p>What is your favorite food?</p>
    <input type="text" v-model="food" />

    <p>How old are you?</p>
    <input type="text" v-model="age" />
  </main>
</template>