<?php

namespace App\Http\Controllers\chat;

use App\Events\MessageEvent;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ModelsChat\message;
use App\ModelsChat\room;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class messageController extends Controller
{


    public function view($id)
    {
        try {
            $messagesViewd = message::where([['room_id', $id], ["sender_id", "!=", Auth::id()]])->update(['seen' => 1]);
            broadcast(new MessageEvent(['room_id' => $id]))->toOthers();
            return response()->json(204);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }
    public function index($id)
    {
        try {
            $this->authorize("viewMessages", [room::class, $id]);

            $select = [
                "id", 'content', 'room_id', 'sender_id', 'username',
                'seen', "edited", "reply_id",
                DB::raw('DATE_FORMAT(created_at, "%H:%i") as timestamp'),
                DB::raw('DATE_FORMAT(created_at, "%e %b %Y") as date'),
            ];
            $messagesViewd = message::where([['room_id', $id], ["sender_id", "!=", Auth::id()]])->update(['seen' => 1]);

            $messages = message::select($select)
                ->with('replyMessage')
                ->where([['room_id', $id], ['reply_id', '=', null]])
                ->orderBy('created_at', 'desc')
                ->paginate(20);
            return response()->json($messages, 200);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }


    public function store($id, Request $request)
    {
        try {

            $this->authorize("sendMessages", [room::class, $id]);

            if (!$id  || $id == 'null' || $id == 'undefined') return response()->json(422);
            $request->validate([
                'content' => 'required|string',
            ]);
            $message = new message();
            if ($request->reply_id && $master_message = message::findOrfail($request->reply_id)) {
                if ($master_message->replyMessage) {
                    if ($master_message->replyMessage->sender_id != Auth::id())
                        return response()->json(204);
                    $master_message->replyMessage()->delete();
                }
                $master_message->touch();
                $message->reply_id = $request->reply_id;
            }

            $message->content = $request->content;
            $message->room_id = $id;
            $message->sender_id = Auth::id();
            $message->username = Auth::user()->username;


            if ($message->save()) {
                broadcast(new MessageEvent(['message' => $message]))->toOthers();
                return response()->json($message, 200);
            }
        } catch (QueryException $e) {
            if (!room::where("id", $id)->first())
                return response()->json("Room Not existe", 400);
            return response()->json($e, 400);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 400);
        }
    }


    public function update(Request $request, $id)
    {
        try {

            if (!$id  || $id == 'null' || $id == 'undefined') return response()->json(422);

            $request->validate([
                'content' => 'required|string',
            ]);

            $message = message::where('id', $id)->first();
            $this->authorize("update", $message);

            $message->update(['content' => $request->content, 'edited' => 1]);
            broadcast(new MessageEvent(['message' => $message, 'updated' => true]))->toOthers();
            return response()->json($message, 200);
        } catch (QueryException $e) {
            if (!room::where("id", $id)->first())
                return response()->json("Room Not existe", 400);
            return response()->json($e, 400);
        }
    }


    public function destroy($id)
    {
        try {
            if (!$id  || $id == 'null' || $id == 'undefined') return response()->json(422);

            $message = message::findOrFail($id);
            $this->authorize("delete", $message);

            $room_id = $message->room_id;

            if ($message->delete()) {
                broadcast(new MessageEvent(["room_id" => $room_id, "deleted" => true, "id" => $id]))->toOthers();
                return response()->json(204);
            }
        } catch (QueryException $e) {
            if (!room::findOrFail($room_id))
                return response()->json("Room Not existe", 400);
            return response()->json($e, 400);
        } catch (NotFoundHttpException $e) {

            return response()->json($e, 404);
        }
    }



    // public function typing($id,$room_id)
    // {
    //     try {
    //         broadcast(new MessageEvent(["typing" => $id, 'room_id' => $room_id]))->toOthers();
    //         return response()->json(204);
    //     } catch (QueryException $e) {
    //         return response()->json($e, 400);
    //     }
    // }
}
