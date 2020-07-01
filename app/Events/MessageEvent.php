<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\ModelsChat\message;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

class MessageEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    public $message, $updated, $room_id, $deleted, $id, $typing;



    public function __construct($params)
    {

        extract($params, EXTR_REFS);
        $this->message = $message ?? null;
        $this->id = $id ?? null;
        $this->room_id = $room_id ?? $message->room_id ?? null;
        $this->typing = $typing ?? null;
        $this->updated = $updated ?? null;
        $this->deleted = $deleted ?? null;
    }


    public function broadcastOn()
    {
        try {

            if ($this->room_id)
                $users = DB::table('room_user')->where("room_id", $this->room_id)->select("user_id")->get();
            $presenceChannels = [];
            if ($users->count())
                foreach ($users as $user)
                    $presenceChannels[] = new PrivateChannel('App.User.' .  $user->user_id);


            return $presenceChannels;
        } catch (QueryException $e) {

            return response()->json($e, 400);
        }
    }

    public function broadcastWith()
    {
        if ($this->updated)
            return ['message' => $this->message, 'is_updated' => true];

        if ($this->deleted)
            return ['message' =>  ["id" => $this->id], 'is_deleted' => true];

        if ($this->typing)
            return ['message' =>  ["typing_id" => $this->typing], 'is_typing' => true];

        if ($this->message)
            return ['message' => $this->message];


        return ['message' => null, 'is_view' => true];
    }
}
