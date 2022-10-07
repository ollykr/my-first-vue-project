<template>
    <div>
        <!-- spit up a value -->
        <h5>{{ name }}</h5>

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

let name = inject('name');

</script>
