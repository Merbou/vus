import { extend } from "vee-validate";
import { max, alpha_dash, } from "vee-validate/dist/rules";

extend("alpha_dash", alpha_dash);
extend("max", max);

export default { max, alpha_dash }