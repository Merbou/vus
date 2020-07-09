import { extend } from "vee-validate";
import { max, alpha_spaces } from "vee-validate/dist/rules";

extend("alpha_spaces", alpha_spaces);
extend("max", max);

export default { max, alpha_spaces }