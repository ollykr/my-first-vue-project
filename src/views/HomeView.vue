<script setup>
// set up reactive properties
import { ref } from "vue";
// default to empty string
let food = ref(localStorage.getItem("food"));
let age = ref(localStorage.getItem("age"));

function write(key, val) {
  localStorage.setItem(key, val);
}
</script>
<template>
  <main>
    <!-- We want to save typed values into a local storage -->
    <p>What is your favorite food?</p>
    <!-- When a user types in it, let's use "write" function -->
    <input type="text" v-model="food" @input="write('food', food)" name="" id="" />
    <p>How old are you?</p>
    <!-- When a user types in it, let's use "write" function -->
    <input type="text" v-model="age" @input="write('age', age)" name="" id="" />
  </main>
</template>