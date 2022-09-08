<script>
// use mixin
import flash from "@/mixins/flash";

// export an object

export default {
  // I can provide an array of mixins
  mixins: [flash],
};
</script>

<template>
  <div>
    <!-- flash() comes from mixins but it is not obvious, especially, if we have lots of components using mixins so that's why it is frown upon -->
    <button @click="flash('it works on the About page')">Click me</button>
  </div>
</template>