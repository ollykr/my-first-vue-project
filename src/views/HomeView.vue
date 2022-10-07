<script setup>
import Quiz from "@/components/Quiz/Quiz.vue";
</script>
<template>
  <main>
    <!-- Passing Quiz object (:quiz) to a component -->
    <!-- In real life we will be fetching it from a server -->
<Quiz :quiz="{ name: 'My First Quiz', questions: [] }" />
  </main>
</template>