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

defineProps({ quiz: Object });
// Component provides a value accessible by "children/grandchildren" components, we don't need to drill down to them
provide('key', 'Hello There!');
</script>