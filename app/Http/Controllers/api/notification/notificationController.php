<?php

namespace App\Http\Controllers\api\notification;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\notification;
use App\Events\notificationEvent;

class notificationController extends Controller
{




    public function index()
    {
        try {
            $view = notification::where([["to", \Auth::id()], ["vu", 0]])->count();

            $notifications = notification::where("to", \Auth::id())->orderBy('created_at', 'asc')
                ->paginate(10);
            if (!$notifications) throw new  Exception("Error Processing Request");

            return response()->json(["notifications" => $notifications, "view" => $view], 206);
        } catch (Exception $e) {
            return response()->json($e, 400);
        }
    }



    public function store(Request $request, $id)
    {
        try {
            $request->validate([
                'title' => 'required|string',
                'description' => 'required|string',
                'icon' => 'required|string',
            ]);

            $notifications = new notification();
            $notifications->to = $id;
            $notifications->title = $request->title;
            $notifications->description = $request->description;
            $notifications->icon = $request->icon;

            if ($notifications->save()) {
                event(new notificationEvent($notifications));
                return response()->json(204);
            } else  throw new  Exception("Error Processing Request");
        } catch (Exception $e) {
            return response()->json($e, 400);
        }
    }


    public function getView()
    {
        try {
            $view = notification::where([["to", \Auth::id()], ["vu", 0]])->count();
            return response()->json(["view" => $view], 206);
        } catch (Exception $e) {
            return response()->json($e, 400);
        }
    }

    public function view()
    {
        try {
            if (notification::where("to", \Auth::id())->update(['vu' => 1]))
                return response()->json(204);
            else  throw new  Exception("Error Processing Request");
        } catch (Exception $e) {
            return response()->json($e, 400);
        }
    }
}
