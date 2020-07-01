<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

class userEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    public $userList, $invited, $room_id, $deleted, $ids;



    public function __construct($params)
    {
        extract($params, EXTR_REFS);
        $this->userList = $users ?? null;
        $this->ids = $ids ?? null;
        $this->room_id = $room_id ?? $message->room_id ?? null;
        $this->invited = $invited ?? null;
        $this->deleted = $deleted ?? null;
    }


    public function broadcastOn()
    {

        try {

            if ($this->room_id)
                $users = DB::table('room_user')->where("room_id", $this->room_id)->select("user_id")->get();
            $privateChannels = [];
            if ($users->count())
                foreach ($users as $user)
                    $privateChannels[] = new PrivateChannel('App.User.' .  $user->user_id);


            return $privateChannels;
        } catch (QueryException $e) {

            return response()->json($e, 400);
        }
    }

    public function broadcastWith()
    {

        if ($this->invited)
            return ['users' => $this->userList, "room_id" => $this->room_id, 'is_invited' => true];

        if ($this->deleted)
            return ["user_ids" => $this->ids, "room_id" => $this->room_id, 'is_deleted' => true];
    }
}
