<?php

namespace App\Http\Controllers\api\user;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\Controllers\Controller;
use App\User;
use App\Http\Requests\userRequest;
use \Auth;
use Hash;


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



            $users = User::orderBy('created_at', 'asc')
                ->paginate(100);

            return response()->json($users, 206);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 404);
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

            $user = User::findOrFail($id);
            $user->is_active = !$user->is_active;
            $user->save();
            return response()->json(204);
        } catch (ModelNotFoundException $e) {

            return response()->json($e, 404);
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

            if ($request->firstname)
                $user->firstname = $request->firstname;

            if ($request->lastname)
                $user->lastname = $request->lastname;

            if ($request->username)
                $user->username = $request->username;

            if ($request->phone)
                $user->phone = $request->phone;

            if ($avatar) {
                $user->picture_path = $this->store($avatar, Auth::id());
            } else {
                #when sex is updated if(personal pict not exist) change pict according to sex
                $user->picture_path = $this->changeAvatarIfNotExist($request->sex, $user);
                if ($request->sex == 1 || $request->sex == 0)
                    $user->sex = $request->sex;
            }

            if ($request->password) {
                if (Hash::check($request->last_password, $user->password)) {
                    $user->password = bcrypt($request->password);
                } else
                    return response()->json(["errors" => ["password" => ["password does not match"]]], 422);
            }

            $user->save();
            return response()->json($user, 200);
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
