<?php

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;



Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
Broadcast::channel('message.room.{id}', function ($user, $id) {
    try {

        if (DB::table('room_user')
            ->where([["user_id", $user->id], ["room_id", $id]])
            ->exists()
        )
            return ["user" => $user];
    } catch (QueryException $e) {
        return false;
    }
});
