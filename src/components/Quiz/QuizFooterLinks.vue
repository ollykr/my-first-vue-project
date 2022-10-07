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

// Since the data is reactive , we can test it using a Timeout, a new name is reflected in a parent as well since it is a reactive data
setTimeout(() => {
    name.value = 'A New Name';
}, 2000);

</script>
