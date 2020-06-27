<?php

namespace App\Http\Controllers\chat;

use App\Http\Controllers\Controller;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests\idsRequest;
use App\ModelsChat\room;
use App\User;
use Symfony\Component\HttpKernel\Exception\HttpException;

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



    public function store(Request $request)
    {
        try {
            $data = ["name" => null, "owner" => Auth::id()];
            $rules = ['ids.*' => 'required|integer'];

            if ($request->roomName && $request->roomName !== "null" && $request->roomName !== "undefined") {
                $rules["roomName"] = 'string';
                $data["name"] = $request->roomName;
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


            $room->users()->detach(Auth::id());
            if (count($room->users)) {
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
            if ($room->owner !== Auth::id()) throw new HttpException("Forbidden");
            $room->users()->detach($request->ids);
            $freshRoom = $room->fresh();
            if ($freshRoom->users->count() < 2)
                $room->delete();


            return response()->json(204);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            return response()->json($e, 422);
        } catch (HttpException $e) {
            return response()->json($e, 403);
        }
    }


    public function invite(idsRequest $request, $id)
    {
        try {
            $room = room::where('id', $id)->first();
            if ($room->owner !== Auth::id()) throw new HttpException("Forbidden");

            if ($room->users()->attach($request->ids))
                return response()->json(204);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            return response()->json($e, 422);
        } catch (HttpException $e) {
            return response()->json($e, 403);
        }
    }

    private function filterIdsWith($ids)
    {

        $ids = User::whereIn('id', $ids)->select("id", "username")
            ->get()
            ->map(function ($q) use (&$usernames) {
                return $q["id"];
            });

        return ["ids" => $ids];
    }
}
