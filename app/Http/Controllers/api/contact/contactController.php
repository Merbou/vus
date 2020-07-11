<?php

namespace App\Http\Controllers\api\contact;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\contact;
use Auth;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class contactController extends Controller
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


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            Auth::user()->can('contacts.@delete contacts');
            Auth::user()->can('contacts.@read contacts');

            $contacts = contact::where([["to", Auth::id()], ["deleted", 0]])->orderBy('created_at', 'asc')
                ->paginate(20);

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
            Auth::user()->can('contacts.@delete contacts');
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
            Auth::user()->can('contacts.@read contacts');
            if (contact::find($id)->update(["vu" => 1]))
                return response()->json(204);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 400);
        }
    }



    public function globalSearch(Request $request)
    {
        try {
            Auth::user()->can('contacts.@delete contacts');
            Auth::user()->can('contacts.@read contacts');
            if (!$request->c_query) response()->json(204);



            $like = [
                "email",
                "subject",
                "created_at",
                "vu",
            ];
            $contacts = contact::query()
                ->where([["to", Auth::id()], ["deleted", 0]])
                ->whereLike($like, $request->c_query)
                ->paginate(20);

            return response()->json(["contacts" => $contacts], 200);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }

    public function trashGglobalSearch(Request $request)
    {
        try {
            Auth::user()->can('contacts.@delete contacts');
            Auth::user()->can('contacts.@read contacts');
            if (!$request->c_query) response()->json(204);




            $like = [
                "email",
                "subject",
                "created_at",
                "vu",
            ];
            $contacts = contact::query()
                ->where([["to", Auth::id()], ["deleted", 1]])
                ->whereLike($like, $request->c_query)
                ->paginate(20);

            return response()->json(["contacts" => $contacts], 200);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }



    public function countViews()
    {
        try {
            Auth::user()->can('contacts.@delete contacts');
            Auth::user()->can('contacts.@read contacts');
            $views = contact::where([["to", Auth::id()], ["vu", 0], ["deleted", 0]])
                ->count();
            return response()->json(["views" => $views], 200);
        } catch (QueryException $e) {
            return response()->json($e, 400);
        }
    }
}
