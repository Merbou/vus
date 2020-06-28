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

class messageController extends Controller
{


    public function view($id)
    {
        try {
            $messagesViewd = message::where([['room_id', $id], ["sender_id", "!=", Auth::id()]])->update(['seen' => 1]);

            return response()->json(204);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }
    public function index($id)
    {
        try {
            $messagesViewd = message::where([['room_id', $id], ["sender_id", "!=", Auth::id()]])->update(['seen' => 1]);

            $messages = message::select([
                "id", 'content', 'room_id', 'sender_id', 'username', 'seen', "reply_id","created_at","updated_at",
                DB::raw('DATE_FORMAT(created_at, "%H:%i") as timestamp'),
                DB::raw('DATE_FORMAT(created_at, "%e %b %Y") as date'),
            ])
                ->with('replyMessage')
                ->where([['room_id', $id], ['reply_id', '=', null]])
                ->orderBy('updated_at', 'desc')
                ->paginate(20);
            return response()->json($messages, 200);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }


    public function store($id, Request $request)
    {
        try {

            if (!$id  || $id == 'null' || $id == 'undefined') throw new Exception();
            $request->validate([
                'content' => 'required|string',
            ]);
            $message = new message();
            if ($request->reply_id && message::findOrFail($request->reply_id)->touch()) {
                $message->reply_id = $request->reply_id;
            }

            $message->content = $request->content;
            $message->room_id = $id;
            $message->sender_id = Auth::id();
            $message->username = Auth::user()->username;


            if ($message->save()) {
                broadcast(new MessageEvent($message))->toOthers();
                return response()->json($message, 200);
            }
        } catch (Exception $e) {
            return response()->json($e, 400);
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
            if (!$id  || $id == 'null' || $id == 'undefined') throw new Exception();

            $request->validate([
                'content' => 'required|string',
            ]);


            $message = message::where('id', $id)
                ->update(['content' => $request->content]);

            return response()->json($message,200);
        } catch (Exception $e) {

            return response()->json($e, 400);
        } catch (QueryException $e) {
            if (!room::where("id", $id)->first())
                return response()->json("Room Not existe", 400);
            return response()->json($e, 400);
        }
    }


    public function destroy($id)
    {
        try {
            if (!$id  || $id == 'null' || $id == 'undefined') throw new Exception();

            $message = message::where('id', $id)->delete();
            return response()->json(204);
        } catch (QueryException $e) {
            if (!room::where("id", $id)->first())
                return response()->json("Room Not existe", 400);
            return response()->json($e, 400);
        } catch (Exception $e) {

            return response()->json($e, 400);
        }
    }
}
