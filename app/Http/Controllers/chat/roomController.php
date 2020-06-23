<?php

namespace App\Http\Controllers\chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ModelsChat\room;
use App\User;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;

use function PHPSTORM_META\map;

class roomController extends Controller
{



    public function index()
    {
        try {
            $rooms = room::with([
                'users:users.id as _id,users.username',
                'last_message'
            ])
                ->whereHas('users', function ($query) {
                    return $query
                        ->where('users.id', '=', Auth::id());
                })
                ->select('id', 'id as roomId', 'name as roomName')
                ->paginate(100);

            return response()->json($rooms, 200);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }



    public function store(Request $request)
    {
        try {
            $data = ["name" => null];
            $rules = ['ids.*' => 'required|integer'];

            if ($request->roomName && $request->roomName !== "null" && $request->roomName !== "undefined") {
                $rules["roomName"] = 'string';
                $data["name"] = $request->roomName;
            }


            $request->validate($rules);

            $usernames = array();
            $users = User::whereIn('id', $request->ids)->select("id", "username")->get()->map(function ($q) use (&$usernames) {
                array_push($usernames, $q["username"]);
                return $q["id"];
            });

            if (count($users)) {
                $users->push(Auth::id());
                if (!$data["name"])
                    $data["name"] = join(",", array_slice($usernames, 0, 3));
                if (count($usernames) > 3)
                    $data["name"] .= "...";
                $room = room::create($data);
                $room->users()->attach($users);
            }
            return response()->json(["id" => $room->id], 200);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }

    public function quickSearch(Request $request)
    {
        try {
            if (!$request->pattern) response()->json(204);

            $rooms = room::where("name", "like", "%{$request->pattern}%")
                ->with([
                    'users:users.id as _id,users.username',
                    'last_message'
                ])
                ->whereHas('users', function ($query) {
                    return $query
                        ->where('users.id', '=', Auth::id());
                })
                ->select('id', 'id as roomId', 'name as roomName')
                ->get();

            return response()->json(["rooms" => $rooms], 206);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }




    public function destroy($id)
    {
        //
    }
}
