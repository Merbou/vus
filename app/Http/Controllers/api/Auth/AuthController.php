<?php

namespace App\Http\Controllers\api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\registerRequest;
use App\Http\Requests\Auth\loginRequest;
use App\User;


class AuthController extends Controller
{

    /**
     * register user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(registerRequest $request)
    {



        $user = $this->createWithHashing($request->all());


        // Creating a token
        $access_token = $user->createToken('access_token')->accessToken;



        return response()->json(["user" => $user, "token" => $access_token], 200);
    }











    /**
     * login user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {



        $credentials = $request->only('email', 'password');


        
        if (!\Auth::attempt($credentials)) {



            return response()->json(["error" => "unauthenticated"], 403);
        }



        $user = \Auth::user();


        // Creating a token
        $access_token = $user->createToken('access_token')->accessToken;


        
        return response()->json(["user" => $user, "token" => $access_token], 200);
    }





    private function createWithHashing($data)
    {



        $data["password"] = bcrypt($data["password"]);



        $user = User::create($data);



        return $user;
    }
}
