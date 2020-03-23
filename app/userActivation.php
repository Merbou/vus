<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class userActivation extends Model
{


       /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "user_id","code"
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
