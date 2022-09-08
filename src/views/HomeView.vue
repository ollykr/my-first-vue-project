<script>
// use composable
import {useFlash} from "@/composables/useFlash";

// export an object

export default {
//  setup method (as per Composition API)
setup() {
  // trigger function
let { flash } = useFlash(); /* returns an object with a key "flash" */
// return here is exactly as data() method
return { flash };
}

};
</script>
<template>
  <main>
    <!-- flash() comes from mixins but it is not obvious, especially, if we have lots of components using mixins so that's why it is frown upon -->
    <button @click="flash('it works')">Click me</button>
  </main>
</template>