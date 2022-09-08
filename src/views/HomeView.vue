<script setup>
// import re-usable composable "useStorage"
import { useStorage } from "@/composables/useStorage";

// I want to use storage for food and I catch it in 'food' variable
// 'useStorage' looks for a key 'food' in a local storage API, if it finds it, it returns it and maybe it return as a ref too
// This way we can instantly use it within <input>
// set default value 'salad'
let food = useStorage('food', 'tacos');
let age = useStorage('age', 10);
// to track changes in nested objects
useStorage('obj', {one: 'one'});
</script>
<template>
  <main>
    <!-- We want to save typed values into a local storage -->
    <p>What is your favorite food?</p>
    <input type="text" v-model="food">
    <p>How old are you?</p>
    <input type="text" v-model="age">
  </main>
</template>