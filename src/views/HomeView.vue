<script setup>
import Quiz from "@/components/Quiz/Quiz.vue";

import { state } from "@/stores/quizStore";

</script>
<template>
  <main>
    <!-- Passing Quiz object (:quiz) to a component -->
    <!-- In real life we will be fetching it from a server -->
<Quiz :quiz="state" />
  </main>
</template>