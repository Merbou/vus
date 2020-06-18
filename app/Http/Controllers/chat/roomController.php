<?php

namespace App\Http\Controllers\chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ModelsChat\room;
use Illuminate\Support\Facades\Auth;

class roomController extends Controller
{



    public function index()
    {
        try {
            $rooms = room::select('id', 'name')
                ->with('users:users.id,users.username')
                ->whereHas('users', function ($query) {
                    return $query
                        ->select('users.id as user_id', 'users.username as username')
                        ->where('users.id', '=', Auth::id());
                })->paginate(100);

            return response()->json($rooms, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 400);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
