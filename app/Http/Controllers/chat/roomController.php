<?php

namespace App\Http\Controllers\chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ModelsChat\room;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;


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
