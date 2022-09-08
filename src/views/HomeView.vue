<script>
export default {
methods: {
  flash(message) {
    alert(message);
  }
}
}
</script>
<template>
  <main>
      <button @click="flash('it works')">Click me</button>
  </main>
</template>