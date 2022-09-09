<script setup>
import { onMounted, ref } from "vue";

let textarea = ref(null);

function onTabPress(e) {
  // Give me target of the event - i.e textarea node
  let textarea = e.target;
  // get caret position/selection
  let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd;

  // set textarea value to: text before caret + tab + text after caret

  textarea.value = val.substring(0, start) + "\t" + val.substring(end);

  // put caret at right position again
  textarea.selectionStart = textarea.selectionEnd = start + 1;
}
</script>
<template>
  <main>
    <form action="">
      <!-- use "ref" to access any DOM element -->
      <!-- .prevent is  the same as e.preventDefault() -->
      <textarea
        @keydown.tab.prevent="onTabPress"
        style="width: 100%; height: 300px"
      >
  Hi There!
</textarea
      >
    </form>
  </main>
</template>