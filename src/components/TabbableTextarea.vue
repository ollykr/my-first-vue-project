<script setup>
// defineProps macro
defineProps({
modelValue: String
});
function onTabPress(e) {
  let textarea = e.target;

  let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd;

  textarea.value = val.substring(0, start) + "\t" + val.substring(end);

  textarea.selectionStart = textarea.selectionEnd = start + 1;
}
</script>

<template>
  <!-- .prevent is  the same as e.preventDefault() -->
  <!-- Use "modelValue" prop via v-text="modelValue" -->
  <textarea @keydown.tab.prevent="onTabPress" v-text="modelValue" />
</template>
