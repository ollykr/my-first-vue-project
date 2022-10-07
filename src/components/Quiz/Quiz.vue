<template>
<QuizHeader />

<QuizQuestion />

<QuizFooter :quiz="quiz"/>
</template>

<script setup>

import QuizHeader from "@/components/Quiz/QuizHeader.vue";

import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";

import QuizFooter from "@/components/Quiz/QuizFooter.vue";

import {provide} from "vue";

// Quiz needs to be available in QuizFooterLinks nested child component
let props = defineProps({ quiz: Object });

provide('quiz', props.quiz);

</script>