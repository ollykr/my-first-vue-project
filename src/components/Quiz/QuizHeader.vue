<template>
    <header>
    <h1>{{state.name}}</h1>
    <p class="quiz-header-intro">Welcome to your first quiz. How do you think you'll do?</p>
    <QuizQuestion />
    </header>
</template>
<script setup>
import { state } from "@/stores/quizStore";
</script>

<style scoped>
.quiz-header-intro {
    margin-block-end: 5rem;
}
</style>
