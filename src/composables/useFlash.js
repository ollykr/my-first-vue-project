import swal from "sweetalert";
// Composables is a preferred way to mixins
export function useFlash() {
  // declare flash as a function
  function flash(title, message, level = "success") {
    return swal(title, message, level);
  }
  // return whatever you want to expose to an outside world / or to share - e.g function flash
  return { flash };
}
