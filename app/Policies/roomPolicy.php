<?php

namespace App\Policies;

use App\ModelsChat\room;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Database\Eloquent\Builder;

class roomPolicy
{
    use HandlesAuthorization;

    public function view(User $user, $id)
    {
        return $user->can('chat.@view all rooms') ||
            room::where("id", $id)->whereHas('users', function (Builder $query) use ($user) {
                $query->where('users.id', $user->id);
            })->exists();
    }

    public function viewMessages(User $user, $id)
    {


        return $user->can('chat.@view all messages') ||
            room::where("id", $id)->whereHas('users', function (Builder $query) use ($user) {
                $query->where('users.id', $user->id);
            })->exists();
    }




    public function kick(User $user, room $room)
    {
        return (int) $room->owner === (int) $user->id;
    }


    public function invite(User $user, room $room)
    {
        return (int) $room->owner === (int) $user->id;
    }

    public function sendMessages(User $user, $id)
    {
        return $user->can('chat.@send messages for all users') ||
            room::where("id", $id)->whereHas('users', function (Builder $query) use ($user) {
                $query->where('users.id', $user->id);
            })->exists();
    }
}
