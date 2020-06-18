<?php

namespace App\ModelsChat;

use Illuminate\Database\Eloquent\Model;

class room extends Model
{
    public function messages()
    {
        return $this->hasMany('App\ModelsChat\message');
    }

    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
