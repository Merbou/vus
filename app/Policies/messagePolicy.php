<?php

namespace App\Policies;

use App\User;
use App\ModelsChat\message;
use App\ModelsChat\room;
use Illuminate\Auth\Access\HandlesAuthorization;

class messagePolicy
{
    use HandlesAuthorization;

    public function update(User $user, message $message)
    {
        return (int) $message->sender_id === (int) $user->id;
    }


    public function delete(User $user, message $message)
    {
        return (int) $message->sender_id === (int) $user->id;
    }
}
