<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class userRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public function rules()
    {
        return  $this->getDataToValidation();
    }



    private function getDataToValidation()
    {

        $array = [];

        if (!empty($this->firstname) && $this->firstname !== "null")
            $array['firstname'] = 'string';

        if (!empty($this->lastname) && $this->lastname !== "null")
            $array['lastname'] = 'string | max:255';

        if (!empty($this->username) && $this->username !== "null")
            $array['username'] = 'string | max:255';

        if (!empty($this->phone) && $this->phone !== "null")
            $array['phone'] = "phone:" .  join(",", config("app.COUNTRYS_ISO_CODE"));

        if (!empty($this->picture_path) && $this->picture_path !== "null")
            $array['picture_path'] = 'string';

        if (!empty($this->sex) && $this->sex !== "null")
            $array['sex'] = 'boolean';

        if (!empty($this->avatar) && $this->avatar !== "null")
            $array['avatar'] = 'image | max:900';

        if (!empty($this->last_password) && $this->last_password !== "null")
            $array['password'] = 'confirmed | min:8 | string';

        if (!empty($this->password) && $this->password !== "null")
            $array['password'] = 'confirmed | min:8 | string';




        return $array;
    }
}
