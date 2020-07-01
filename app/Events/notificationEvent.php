<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\notification;

class notificationEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;



    private $notificaiton;



    public function __construct(notification $notificaiton)
    {
        $this->notificaiton = $notificaiton;
    }


    public function broadcastOn()
    {
        return new PrivateChannel('App.User.' . $this->notificaiton->to);
    }

    public function broadcastWith(){
        return ['notification' => $this->notificaiton];
    }
}
