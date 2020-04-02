<?php

namespace App\Http\Controllers\api\user;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\DB;


class chartAccountController extends Controller
{
    public function count()
    {

        try {

            $users_created = DB::table('users')
                ->select(DB::raw('count(*) as x'), DB::raw('DATE_FORMAT(created_at, "%Y %m %e %H:%i") y'))
                ->groupBy("y")
                ->get()->map(function ($query) {
                    return [$query->y, $query->x];
                });

            return response()->json($users_created, 206);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 404);
        }
    }
}
