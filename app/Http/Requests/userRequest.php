<?php

namespace App\Http\Requests;

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

        if ($this->firstname)
            $array['firstname'] = 'string';

        if ($this->lastname)
            $array['lastname'] = 'string | max:255';

        if ($this->username)
            $array['username'] = 'string | max:255';

        if ($this->phone)
            $array['phone'] = 'string | max:255';

        if ($this->picture_path)
            $array['picture_path'] = 'string';

        if ($this->picture_path)
            $array['picture_path'] = 'string';

        if ($this->sex)
            $array['sex'] = 'boolean';

        if ($this->avatar)
            $array['avatar'] = 'mimes:jpeg,jpg,png | max:900';

        if ($this->password)
            $array['password'] = 'confirmed | min:8 | string';




        return $array;
    }
}
