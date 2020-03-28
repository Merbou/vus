<?php

namespace App\Http\Controllers\api\user;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class handleAccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {



            $users = User::orderBy('created_at', 'asc')
                ->paginate(100);

            return response()->json($users, 206);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 404);
        }
    }




    /**
     * blocked the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function blocked($id)
    {

        try {

            $user = User::findOrFail($id);
            $user->is_active = !$user->is_active;
            $user->save();
            return response()->json(204);
        } catch (ModelNotFoundException $e) {

            return response()->json($e, 404);
        }
    }
}
