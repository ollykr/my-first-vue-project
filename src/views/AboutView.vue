<script setup>
import { useCounterStore } from "@/stores/CounterStore";
</script>

<template>
  <div>
<h1>About page</h1>
<p>The current count is {{ counter.count }}</p>
</div>
</template>
