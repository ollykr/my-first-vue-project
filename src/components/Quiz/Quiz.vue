<template>

<QuizHeader />

<QuizQuestion />

<QuizFooter :quiz="quiz"/>
</template>

<script setup>

import QuizHeader from "@/components/Quiz/QuizHeader.vue";

import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";

import QuizFooter from "@/components/Quiz/QuizFooter.vue";

import {provide, ref} from "vue";

defineProps({ quiz: Object });

// For reactive data
let name = ref('John Doe');

// Component provides a value accessible by "children/grandchildren" components, we don't need to drill down to them
// second paramether - name is not just "John Doe", it is a reactive object
provide('name', name);
</script>