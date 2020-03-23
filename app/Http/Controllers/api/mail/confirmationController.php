<?php

namespace App\Http\Controllers\api\mail;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Mail\mailConfirmation;
use Illuminate\Support\Facades\Mail;
use App\User;

use function Psy\debug;

class confirmationController extends Controller
{
    public function send($id)
    {

        $user = User::findOrfail($id);
        $userActivation = $user->userActivation()->create([
            'code' => rand(10000, 9999999),
        ]);

        Mail::to(User::findOrfail($id))->send(new mailConfirmation($userActivation->code));

        return  response()->json(204);
    }

    public function confirm($id, Request $request)
    {

        $user = User::where('id',$id)->with('userActivation')->first();
         if ($user->userActivation->code == $request->code) {
            $user->email_verified_at = now();
            return  response()->json(204);
        } else return  response()->json(406);
    }
}
