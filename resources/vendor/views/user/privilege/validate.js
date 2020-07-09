import { extend } from "vee-validate";
import { required, max, alpha_spaces, } from "vee-validate/dist/rules";

extend("alpha_spaces", alpha_spaces);
extend("required", { ...required, message: "This field is required " });
extend("max", max);

export default { required, max, alpha_spaces }