<template>
    <div>
        <!-- When you click on me, I wanna call 'changeName' function from a parent - Quiz.vue -->
        <button @click="changeName">{{ name }}</button>

    <ul>
        <li><a href="#">Get a Job</a></li>
        <li><a href="#">Contact Us</a></li>
    </ul>
    </div>
</template>
<script setup>
// Grab a value from Quiz.vue which a granddad of this component
import {inject} from "vue";

defineProps({ quiz: Object });
// Accept parent's changeName function
let { name, changeName } = inject('name');

// Triggering a change set up on a parent via function here


</script>
