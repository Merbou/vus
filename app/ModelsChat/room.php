<?php

namespace App\ModelsChat;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class room extends Model
{

    protected $fillable = [
        "name",
    ];
    public function messages()
    {
        return $this->hasMany('App\ModelsChat\message');
    }

    public function last_message()
    {
        return $this->hasOne('App\ModelsChat\message')
            ->select([
                'id', 'content', 'room_id', 'sender_id', 'username', 'seen',
                DB::raw('DATE_FORMAT(created_at, "%e/%c/%Y %H:%i") as timestamp'),
                DB::raw('CAST(DATE_FORMAT(created_at, "%Y%c%e%H%i%s") AS INT) as date'),
            ])
            ->latest();
    }

    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
