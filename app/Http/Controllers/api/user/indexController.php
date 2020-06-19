<?php

namespace App\Http\Controllers\api\user;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;
use App\User;
use Exception;

class indexController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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
                ->paginate(100);

            if (!$users) throw new  Exception("Error Processing Request");

            return response()->json($users, 206);
        } catch (Exception $e) {
            return response()->json($e, 400);
        }
    }



    public function quickSearch(Request $request)
    {
        try {
            if (!$request->selected) response()->json(204);

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

            $selected = ["id", "username", "email"];

            $users = User::query()
                ->select($selected)
                ->where("id", "!=", Auth::id())
                ->whereLike(['username', 'email', 'firstname', 'lastname'], $request->selected)
                ->get();

            return response()->json(["users" => $users], 206);
        } catch (Exception $e) {
            return response()->json($e, 400);
        }
    }
}
