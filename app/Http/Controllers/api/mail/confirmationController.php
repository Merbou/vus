<?php

namespace App\Http\Controllers\api\mail;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Mail\mailConfirmation;
use Illuminate\Support\Facades\Mail;
use App\User;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;



class confirmationController extends Controller
{




    public function send($id)
    {

        try {



            $user = User::where('id', $id)->with('userActivation')->first();


            //create activation Code for a secifique user
            //if a reedy exit assignment a new code activation Code
            $code = $this->setActiviationCode($user);



            Mail::to($user)->send(new mailConfirmation($code));



            return  response()->json(202);
        } catch (ModelNotFoundException $e) {



            return response()->json($e, 400);
        }
    }







    public function confirm($id, Request $request)
    {

        try {



            $user = User::where('id', $id)->with('userActivation')->first();



            if ($user->userActivation->code == $request->code) {



                $user->email_verified_at = now();


                $user->save();


                return  response()->json(204);
            } else throw new Exception("code activation not acceptable !");
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
