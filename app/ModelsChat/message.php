<?php

namespace App\ModelsChat;

use Illuminate\Database\Eloquent\Model;

class message extends Model
{
    public function sender()
    {
        return $this->belongsTo('App\User', 'sender_id');
    }

    public function room()
    {
        return $this->belongsTo('App\ModelsChat\room');
    }
}
