/* creating mixins - sort of traditional way that frown upon these days */
import swal from "sweetalert";
export default {
  methods: {
    flash(message) {
      // 'Success' is a title, 'success' is an icon
      return swal("Success", message, "success");
    },
  },
};
