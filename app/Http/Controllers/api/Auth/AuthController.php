<?php

namespace App\Http\Controllers\api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\registerRequest;
use App\Http\Requests\Auth\loginRequest;
use Spatie\Permission\Models\Role;
use App\User;
use Auth;



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

        try {


            $user = $this->createWithHashing($request->all());

            $roles = Role::where('name', 'writer')->with("permissions")->get();

            if (!$user->assignRole($roles->first())) throw new \Exception("Role did not grant user");


            // Creating a token
            $access_token = $user->createToken('access_token')->accessToken;


            return response()->json(["user" => $user, "roles"  => $roles, "token" => $access_token], 200);
        } catch (\Exception $th) {
            $user->delete();
            return response()->json($th, 400);
        } catch (QueryException $th) {
            return response()->json($th, 400);
        }
    }











    /**
     * login user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(loginRequest $request)
    {



        try {


            $credentials = $request->only('email', 'password');



            if (!Auth::attempt($credentials)) throw new \Exception("unauthenticated");





            $user = User::where("id", Auth::id())->with("roles.permissions")->first();


            // Creating a token
            $access_token = $user->createToken('access_token')->accessToken;



            return response()->json(["user" => $user, "token" => $access_token], 200);
        } catch (\Exception $th) {
            return response()->json($th, 403);
        } catch (QueryException $th) {
            return response()->json($th, 400);
        }
    }



    private function createWithHashing($data)
    {


        $data["password"] = bcrypt($data["password"]);

        $user = User::create($data);

        return $user;
    }
}
