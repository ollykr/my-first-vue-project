import swal from "sweetalert";
// Composables is a preferred way to mixins
export function useFlash() {
  // declare flash as a function
  function flash(message) {
    // 'Success' is a title, 'success' is an icon
    return swal("Success", message, "success");
  }
  // return whatever you want to expose to an outside world / or to share - e.g function flash
  return { flash };
}
