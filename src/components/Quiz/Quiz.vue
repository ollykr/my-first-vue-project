<template>
<h1>{{ name }}</h1>
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

// The only place you can change a data is in parent - this is a rule, that's why we use an object as a second paramether
// function 'changeName' is responsible for changing a name
// name, means key and value are the same - 'name'
// If we want to trigger a change , we just need to pass a reference to the function in a child
provide('name', {
    name,
changeName: () => name.value = 'Changed'

});
</script>