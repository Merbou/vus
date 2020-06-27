<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\ModelsChat\message;

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


        return new PresenceChannel('message.room.' . $this->message->room_id);
    }

    public function broadcastWith()
    {
        return ['message' => $this->message];
    }
}
