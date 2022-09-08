<script>
import swal from 'sweetalert';
export default {
  methods: {
    flash(message) {
      swal(message);
    },
  },
};
</script>

<template>
  <div>
    <button @click="flash('it works on the About page')">Click me</button>
  </div>
</template>
