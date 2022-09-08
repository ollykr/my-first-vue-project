import { ref, watch } from "vue";
// 'val' accepts defalt value which sets to null
export function useStorage(key, val = null) {
  // if it finds key, it returns its value, otherwise it returns null wrapped in a ref
  let storedVal = read();

  // if there is storedVal already, return it
  if (storedVal) {
    // we do find a key so we wrap it in a ref
    let val = ref(storedVal);
  } else {
    // otherwise set a ref to a default value
    val = ref(val);
    // create a value and instantly save it to a local storage
    write();
  }

  // Ultimately I want to return a ref to an user
  // write to local storage using 'watch' API to make local storage updated, keep an eye on v-model
  // set a "deep watcher" to track changes in child properties in nested objects, for example, if they do, I want to call a write() function
  // it can have a performance penalty, if you are dealing with a gigantic object
  watch(val, write, { deep: true });

  function read() {
    return JSON.parse(localStorage.getItem(key));
  }

  // since we already have 'key' and 'value' we don't need to explicetly use them as in write(key, val)
  // the 'key' was passed in when we call a function (localStorage(key)) and the 'val' is a ref (let val = ref(storedVal);)
  // when you have a ref, write 'val.value'
  function write() {
    // clear it from a local storage , if the typed value is deleted in <input>
    if ((val.value === null) | (val.value === "")) {
      localStorage.removeItem(key);
    } else {
      // a function writes a value back to local storage
      // for serialization use JSON.stringify
      localStorage.setItem(key, JSON.stringify(val.value));
    }
  }

  return val;
}
