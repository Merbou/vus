<?php

namespace App\Http\Controllers\api\user;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\Controllers\Controller;
use App\User;
use App\Http\Requests\userRequest;
use \Auth;
use Exception;
use Hash;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class handleAccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $selected = ["id", "email", "username", "firstname", "lastname", "created_at", "sex", "email_verified_at", "is_active"];

            $users = User::select($selected)->where("id", "!=", Auth::id())
                ->with("roles")
                ->whereDoesntHave('roles', function ($query) {
                    $query->where('name', 'super-admin');
                })
                ->orderBy('created_at', 'asc')
                ->paginate(100);

            return response()->json($users, 206);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 400);
        }
    }




    /**
     * blocked the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function blocked($id)
    {

        try {
            if ($id == Auth::id()) throw new Exception();
            $user = User::findOrFail($id);
            $user->is_active = !$user->is_active;
            $user->save();
            return response()->json(204);
        } catch (ModelNotFoundException $e) {

            return response()->json($e, 400);
        } catch (Exception $e) {

            return response()->json($e, 400);
        }
    }




    /**
     * ParamatreAdmin the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(userRequest $request)
    {
        try {

            $user = User::findOrFail(Auth::id());

            $avatar = $request->avatar;

            if (!empty($request->firstname) && $request->firstname !== "null")
                $user->firstname = $request->firstname;

            if (!empty($request->lastname) && $request->lastname !== "null")
                $user->lastname = $request->lastname;

            if (!empty($request->username) && $request->username !== "null")
                $user->username = $request->username;

            if (!empty($request->phone) && $request->phone !== "null")
                $user->phone = $request->phone;

            if (!empty($avatar) && $request->firstname !== "null") {
                $user->picture_path = $this->store($avatar, Auth::id());
            } else {
                #when sex is updated if(personal pict not exist) change pict according to sex
                $user->picture_path = $this->changeAvatarIfNotExist($request->sex, $user);
                if ($request->sex == 1 || $request->sex == 0)
                    $user->sex = $request->sex;
            }

            if (!empty($request->password) && $request->password !== "null") {
                if (Hash::check($request->last_password, $user->password)) {
                    $user->password = bcrypt($request->password);
                } else
                    return response()->json(["errors" => ["password" => ["password does not match"]]], 422);
            }

            $user->save();
            return response()->json($user, 200);
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
    private function store($image, $id)
    {
        return $image->store("public/User$id/avatar");
    }


    private function changeAvatarIfNotExist($newSex, $user)
    {
        $root_path_avatar = config("auth.avatars");
        $root_path_avatars = ["$root_path_avatar/man.png", "$root_path_avatar/woman.png"];

        if (in_array($user->picture_path, $root_path_avatars) || !$user->picture_path)
            if ($newSex) return $root_path_avatars[0];
            else return $root_path_avatars[1];

        return $user->picture_path;
    }
}
