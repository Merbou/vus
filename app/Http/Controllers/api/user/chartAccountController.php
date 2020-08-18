<?php

namespace App\Http\Controllers\api\user;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Auth;
class chartAccountController extends Controller
{
    public function count()
    {

        Auth::user()->can('users.chart');
        try {

            $users_created = DB::table('users')
                ->select(DB::raw('count(*) as x'), DB::raw('DATE_FORMAT(created_at, "%Y %b %e") y'))
                ->groupBy("y")
                ->get()->map(function ($query) {
                    return [$query->y, $query->x];
                });

            return response()->json($users_created, 206);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }

    public function rolesUserPercentage()
    {

        Auth::user()->can('users.privilege');
        try {

            $roles_percentages = DB::table('users')
                ->join('model_has_roles', 'users.id', '=', 'model_id')
                ->join('roles', 'model_has_roles.role_id', '=', 'roles.id')
                ->select(DB::raw("count(*) as series"), DB::raw('roles.name as label'))
                ->groupBy("label")
                ->get();

            return response()->json($roles_percentages, 206);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }
}
