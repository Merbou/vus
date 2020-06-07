<?php

namespace App\Http\Controllers\api\Auth;

use Illuminate\Database\QueryException;
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


            if (!$user->assignRole("writer")) throw new Exception("Role did not grant user");;

            $user->picture_path = $this->SetInitAvatar();
            $roles = Role::where('name', 'writer')->with("permissions")->get();

            // Creating a token
            $access_token = $user->createToken('access_token')->accessToken;


            return response()->json(["user" => $user, "roles"  => $roles, "token" => $access_token], 200);
        } catch (\Exception $th) {
            $user->delete();
            return response()->json($th, 500);
        } catch (\QueryException $th) {
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



            if (!Auth::attempt($credentials)) throw new Exception(["error" => "unauthenticated"], 1);





            $user = User::where("id", Auth::id())->with("roles.permissions")->first();


            // Creating a token
            $access_token = $user->createToken('access_token')->accessToken;



            return response()->json(["user" => $user, "token" => $access_token], 200);
        } catch (\Exception $th) {
            return response()->json($th, 403);
        } catch (\QueryException $th) {
            return response()->json($th, 400);
        }
    }



    private function createWithHashing($data)
    {


        $data["password"] = bcrypt($data["password"]);

        $user = User::create($data);

        return $user;
    }


    private function SetInitAvatar()
    {
        $root_path_avatar = config("auth.avatars");
        return "$root_path_avatar/man.png";
    }
}
