<?php

namespace App\Http\Controllers\chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ModelsChat\message;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use stdClass;

class messageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        try {
            $messagesViewd = message::where([['room_id', $id], ["sender_id", Auth::id()]])->update(['seen' => 1]);

            $messages = message::select([
                "id", 'id as _id', 'content', 'room_id', 'sender_id', 'username', 'seen',
                DB::raw('DATE_FORMAT(created_at, "%H:%i") as timestamp'),
                DB::raw('DATE_FORMAT(created_at, "%e %b %Y") as date'),
            ])
                ->where('room_id', $id)->paginate(20);
            return response()->json($messages, 200);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($id, Request $request)
    {
        try {
            if (!$id || $id == 'null' || $id == 'undefined') throw new Exception();

            $request->validate([
                'content' => 'required|string',
            ]);


            $message = message::create([
                'content' => $request->content,
                'room_id' => $id,
                'sender_id' => Auth::id(),
                'username' => Auth::user()->username,
            ]);


            return response()->json($this->getMessageFormat($message), 200);
        } catch (Exception $e) {

            return response()->json($e, 400);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }


    public function update(Request $request, $id)
    {
        try {
            if (!$id || $id == 'null' || $id == 'undefined') throw new Exception();

            $request->validate([
                'content' => 'required|string',
            ]);


            $message = message::where('id', $id)
                ->update(['content' => $request->content]);

            return response()->json(204);
        } catch (Exception $e) {

            return response()->json($e, 400);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }


    public function destroy($id)
    {
        try {

            $message = message::where('id', $id)->delete();
            return response()->json(204);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }


    public function getMessageFormat($message)
    {
        $response = new stdClass();
        $response->_id = $message->id;
        $response->content = $message->content;
        $response->sender_id = $message->sender_id;
        $response->room_id = $message->room_id;
        $response->username = $message->username;

        return $response;
    }
}
