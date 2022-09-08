<script setup>
// use composable
import { useFlash } from "@/composables/useFlash";
let { flash } = useFlash(); /* returns an object with a key "flash" */
</script>
<template>
  <main>
    <!-- flash() comes from mixins but it is not obvious, especially, if we have lots of components using mixins so that's why it is frown upon -->
    <button @click="flash('test', 'it works')">Click me</button>
  </main>
</template>