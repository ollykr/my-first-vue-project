<script setup>
import { onMounted, ref } from "vue";
let textarea = ref(null);

onMounted(() => {
  textarea.value.addEventListener("keydown", (e) => {
    let t = textarea.value;
    // tab was pressed
    if (e.keyCode === 9) {
      // get caret position/selection
      let val = t.value,
        start = t.selectionStart,
        end = t.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret

      t.value = val.substring(0, start) + "\t" + val.substring(end);

      // put caret at right position again
      t.selectionStart = t.selectionEnd = start + 1;
      e.preventDefault();
    }
  });
});
</script>
<template>
  <main>
    <form action="">
      <!-- use "ref" to access any DOM element -->
      <textarea ref="textarea" style="width: 100%; height: 300px">
  Hi There!
</textarea
      >
    </form>
  </main>
</template>