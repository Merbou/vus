<?php

namespace App\Http\Controllers\api\user;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;
use App\User;
use Exception;
use Illuminate\Database\QueryException;

class indexController extends Controller
{




    function __construct()
    {
        Builder::macro('whereLike', function ($attbs, $patterns) {
            $this->where(function ($query) use ($attbs, $patterns) {
                foreach (Arr::wrap($attbs) as $attb) {
                    foreach (Arr::wrap($patterns) as $pattern) {
                        $query->orWhere($attb, "like", "%{$pattern}%");
                    }
                }
            });
            return $this;
        });
    }


    public function index()
    {
        try {
            $selected = ["id", "email", "username", "firstname", "lastname", "created_at", "sex", "email_verified_at", "is_active"];

            $users = User::select($selected)->where("id", "!=", Auth::id())
                ->with("roles")
                ->whereDoesntHave('roles', function ($query) {
                    $query->where('name', 'super-admin');
                })
                ->orderBy('created_at', 'asc')
                ->paginate(20);

            if (!$users) throw new  Exception("Error Processing Request");

            return response()->json($users, 206);
        } catch (Exception $e) {
            return response()->json($e, 400);
        }
    }



    public function quickSearch(Request $request)
    {
        try {
            if (!$request->u_query) response()->json(204);
            $request->validate(['ids.*' => 'integer']);

            $selected = ["id as _id", "id", "username", "email", "picture_path"];
            $users = User::query()
                ->select($selected)
                ->where([["id", "!=", Auth::id()], ["is_active", "=", 1]])
                ->whereNotIn("id", $request->ids ?? [])
                ->whereLike(['username', 'email', 'firstname', 'lastname'], $request->u_query)
                ->paginate(20);

            return response()->json(["users" => $users], 206);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }

    public function globalSearch(Request $request)
    {
        try {

            if (!$request->u_query) response()->json(204);
            $request->validate(['ids.*' => 'integer']);


            $selected = ["id", "email", "username", "firstname", "lastname", "created_at", "sex", "email_verified_at", "is_active"];
            $users = User::query()
                ->select($selected)
                ->where("id", "!=", Auth::id())
                ->whereNotIn("id", $request->ids ?? [])
                ->whereLike([
                    'username', 'email', 'firstname',
                    'lastname', 'sex', 'created_at',
                    'email_verified_at', 'is_active'
                ], $request->u_query)
                ->paginate(20);

            return response()->json(["users" => $users], 206);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }
}
