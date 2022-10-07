<script setup>
// defineProps macro
defineProps({
  modelValue: String,
});

// Composition API for emits
// It is a good practice to declare it here
let emit = defineEmits(["update:modelValue"]);

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
  <textarea
    @keydown.tab.prevent="onTabPress"
    @keyup="update"
    v-text="modelValue"
  />
</template>