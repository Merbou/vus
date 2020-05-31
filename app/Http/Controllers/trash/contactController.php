<?php

namespace App\Http\Controllers\trash;

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

        $contacts = contact::where([["to", auth::id()], ["deleted", 1]])->orderBy('created_at', 'asc')
            ->paginate(50);

        return response()->json($contacts, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function recycle(Request $request)
    {
        try {

            $contacts = contact::whereIn('id', $request->ids)->update(['deleted' => 0]);

            return response()->json(204);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 404);
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

            if (contact::destroy($request->ids))
                return response()->json(204);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 404);
        }
    }
}
