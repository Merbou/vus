<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class contact extends Model
{
    protected $fillable = [
        "to",
        "email",
        "subject",
        "description",
        "vu",
        "type",
    ];
}
