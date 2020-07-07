<?php

namespace App\Http\Controllers\api\contact;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\contact;
use Auth;


class contactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {

            $contacts = contact::where([["to", Auth::id()], ["deleted", 0]])->orderBy('created_at', 'asc')
                ->paginate(50);

            return response()->json($contacts, 206);
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
    public function destroy(Request $request)
    {
        try {

            $contacts = contact::whereIn('id', $request->ids)->update(['deleted' => 1]);

            return response()->json(204);
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

    public function read($id)
    {
        try {

            if (contact::find($id)->update(["vu" => 1]))
                return response()->json(204);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 400);
        }
    }





    public function countViews()
    {
        try {
            $views = contact::where([["to", Auth::id()], ["vu", 0], ["deleted", 0]])
                ->count();
            return response()->json(["views" => $views], 200);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }
}
