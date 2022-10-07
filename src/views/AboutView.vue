<script setup>
import { counter } from "@/stores/counterStore";
</script>

<template>
  <div>
<h1>About page</h1>
<p>The current count is {{ counter.count }}</p>
</div>
</template>
