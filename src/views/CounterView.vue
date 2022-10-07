<script setup>
import { useCounterStore } from "@/stores/CounterStore";

// Call a function
let counter = useCounterStore();

</script>

<template>
<div>
<h1>{{ counter.count }}</h1>
<button @click="counter.increment()">Increment ({{ counter.remaining }} Remaining)</button>
</div>

</template>
