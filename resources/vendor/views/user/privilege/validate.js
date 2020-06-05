import { extend } from "vee-validate";
import { required, max, alpha_dash, } from "vee-validate/dist/rules";

extend("alpha_dash", alpha_dash);
extend("required", { ...required, message: "This field is required " });
extend("max", max);

export default { required, max, alpha_dash }