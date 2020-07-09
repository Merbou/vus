<?php

namespace App\Http\Controllers\chat;

use App\Events\userEvent;
use App\Http\Controllers\Controller;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests\idsRequest;
use App\ModelsChat\room;
use App\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class roomController extends Controller
{



    public function index()
    {
        try {
            $rooms = room::with([
                'users:users.id,users.username',
                'last_message'
            ])
                ->whereHas('users', function ($query) {
                    return $query
                        ->where('users.id', '=', Auth::id());
                })
                ->select('id', 'id as room_id', 'name as room_name', "owner")
                ->paginate(100);

            return response()->json($rooms, 200);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }

    public function single($id)
    {
        try {
            $this->authorize("view", [room::class, $id]);

            $room = room::with([
                'users:users.id,users.username',
                'last_message'
            ])
                ->where('id', $id)
                ->select('id', 'id as room_id', 'name as room_name', "owner")
                ->first();

            return response()->json(["room" => $room], 200);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }



    public function store(Request $request)
    {
        try {

            $data = ["name" => null, "owner" => Auth::id()];
            $rules = ['ids.*' => 'required|integer'];

            if ($request->room_name && $request->room_name !== "null" && $request->room_name !== "undefined") {
                $rules["room_name"] = 'string';
                $data["name"] = $request->room_name;
            }


            $request->validate($rules);

            $res = $this->filterIdsWith($request->ids);


            if (count($res["ids"])) {
                $res["ids"]->push(Auth::id());


                $room = room::create($data);
                $room->users()->attach($res["ids"]);
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




    public function quit($id)
    {
        try {
            if (!$id) return;

            $room = room::where('id', $id)->with(['users' => function ($query) {
                $query->where('users.id', '!=', Auth::id());
            }])->first();
            if (!$room) return response()->json(204);

            $room->users()->detach(Auth::id());
            if (count($room->users) > 1) {
                if ($room->owner != Auth::id()) {
                    $room->owner = $room->users[0]->id;
                    $room->update();
                }
            } else $room->delete();

            return response()->json(204);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            return response()->json($e, 403);
        }
    }


    public function kick(idsRequest $request, $id)
    {
        try {


            $room = room::where('id', $id)->with('users')->first();
            $this->authorize("kick", $room);

            $room->users()->detach($request->ids);
            $freshRoom = $room->fresh();
            broadcast(new userEvent(["room_id" => $id, "deleted" => true, "ids" => $request->ids]))->toOthers();
            if ($freshRoom->users->count() < 2) {
                $room->delete();
            }


            return response()->json(204);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }


    public function invite(idsRequest $request, $id)
    {
        try {
            $room = room::where('id', $id)->first();
            $this->authorize("invite", $room);
            $attachedIds = $room->users_ids();
            $newIds = array_diff($request->ids, $attachedIds->toArray());
            $room->users()->attach($newIds);
            $users = User::whereIn("id", $request->ids)->select(['id', "username"])->get();
            if ($users->count())
                broadcast(new userEvent(['users' => $users, 'room_id' => $id, 'invited' => true]))->toOthers();
            return response()->json(204);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }

    private function filterIdsWith($ids)
    {

        $ids = User::whereIn('id', $ids)->pluck("id");

        return ["ids" => $ids];
    }
}
