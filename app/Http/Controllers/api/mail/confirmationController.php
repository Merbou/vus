<?php

namespace App\Http\Controllers\api\mail;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Mail\mailConfirmation;
use Illuminate\Support\Facades\Mail;
use App\User;
use Exception;
use Illuminate\Database\QueryException;

class confirmationController extends Controller
{




    public function send($id, Request $request)
    {

        try {


            $user = User::where('id', $id)->with('userActivation')->first();
            //resend a code only if request is resend Code or is first send code  
            if ($this->ifUserHasMailCode($request->resend, $user))
                return  response()->json(202);


            //create activation Code for a secifique user
            //if a reedy exit assignment a new code activation Code
            $code = $this->setActiviationCode($user);
            $mailConfirmation = new mailConfirmation($code);

            Mail::to($user)->queue($mailConfirmation->onQueue('Emails'));



            return  response()->json(202);
        } catch (QueryException $e) {



            return response()->json($e, 400);
        }
    }




    private function ifUserHasMailCode($resend, $user)
    {
        if (!$resend && ($user->userActivation) ? $user->userActivation->code : false)
            return true;
    }



    public function confirm($id, Request $request)
    {

        try {



            $user = User::where('id', $id)->with('userActivation')->first();



            if ($user->userActivation->code == $request->code) {



                $user->email_verified_at = now();


                $user->save();


                return  response()->json(["email_verified_at" => $user->email_verified_at], 200);
            } else throw new Exception("code activation not acceptable !",1);
        } catch (Exception $e) {




            return response()->json($e, 406);
        }
    }






    private function setActiviationCode($user)
    {



        return $user->userActivation()->updateOrCreate(

            ['user_id' => $user->id],
            ['code' => rand(10000, 9999999)],

        )->code;
    }
}
