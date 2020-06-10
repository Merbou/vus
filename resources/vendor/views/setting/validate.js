import { extend } from "vee-validate";
import { required, email, min, confirmed, integer, alpha_dash, size, mimes } from "vee-validate/dist/rules";

extend("email", email);
extend("integer", integer);
extend("alpha_dash", alpha_dash);
extend("size", size);
extend("mimes", mimes);

extend("required", { ...required, message: "This field is required " });
extend("min", { ...min, message: "password should be minimum 8 characters " });
extend('confirmed', { ...confirmed, message: 'Password confirmation does not match' });

export default { required, email, min, confirmed, integer, alpha_dash, size, mimes }