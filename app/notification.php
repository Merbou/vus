<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class notification extends Model
{
    protected $fillable = [
        "to",
        "title",
        "description",
        "icon"
    ];
}
