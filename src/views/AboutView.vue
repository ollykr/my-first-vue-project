<script setup>
// use composable
import { useFlash } from "@/composables/useFlash";
let { flash } = useFlash(); /* returns an object with a key "flash" */
</script>

<template>
  <div>
    <!-- flash() comes from mixins but it is not obvious, especially, if we have lots of components using mixins so that's why it is frown upon -->
    <button @click="flash('Yay!', 'it works on the About page', 'info')">Click me</button>
  </div>
</template>
