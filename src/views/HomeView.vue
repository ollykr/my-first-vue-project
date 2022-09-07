<!--Options API//-->
<!--
<script>
// import TheWelcome from "../components/TheWelcome.vue";

// export default {
//   components: { TheWelcome },
//       data() {
//       return {
//         message: "Hello World!"
//       }
//   },

//       mounted() {
//         alert("I have been mounted");
//       }
// }

// </script>

// <template>
//   <main>
//     <TheWelcome />

//     <p>{{ message }}</p>
//   </main>
// </template>//-->

<!--Composition API //-->
<!-- When we use <script setup> we turn on compiler macro that makes it friendlier to write a code//-->
<script setup>
import TheWelcome from "../components/TheWelcome.vue";
// in Composition API we import only components we use it
// import { ref} from "vue";
// declare "ref" to enable reactivity between input's value and its underlying property - i.e content above it
// Use $...if you enabled reactivityTransform in vite.config.js, otherwise use import { ref} from "vue"; It is experimental feature
// define data as variable
let message = $ref("Hello, World!");
let doSomething = () => {
alert("doing it now")
};
// Using Composition API always access data using .value
setTimeout(() => {
  // message.value = "I Have been Changed";
  // Or with reactivityTranform on
  message = "I Have been Changed";
}, 2000);
</script>
<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>
    <button @click="doSomething">Click Me</button>
    <p><input type="text" v-model="message" /></p>
  </main>
</template>