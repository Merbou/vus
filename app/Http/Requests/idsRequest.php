<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class idsRequest extends FormRequest
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
        return ['ids.*' => 'required|integer'];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'ids' => array_filter($this->ids, function ($id) {
                return $id != null;
            }),
        ]);
    }
}
