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


    private $message;



    public function __construct(message $message)
    {
        $this->message = $message;
    }


    public function broadcastOn()
    {
        try {
            $this->message->room_id;


            $rooms_users = DB::table('room_user')
                ->where("room_id", $this->message->room_id)
                ->select("user_id")->get();
            $presenceChannels = [];
            if ($rooms_users->count()) {
                foreach ($rooms_users as $room_user) {
                    $presenceChannels[] = new PrivateChannel('App.User.' .  $room_user->user_id);
                }
            }
            return $presenceChannels;
        } catch (QueryException $e) {
            return false;
        }
    }

    public function broadcastWith()
    {
        return ['message' => $this->message];
    }
}
