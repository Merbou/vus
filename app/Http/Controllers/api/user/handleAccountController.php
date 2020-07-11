<?php

namespace App\Http\Controllers\api\user;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Http\Requests\userRequest;
use App\Jobs\ResizeImage;
use Exception;
use App\User;
use \Auth;
use Hash;


class handleAccountController extends Controller
{


    /**
     * blocked the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function blocked($id)
    {

        Auth::user()->can('users.table@block user');
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
        Auth::user()->can('setting');
        try {

            $user = User::findOrFail(Auth::id());

            $avatar = $request->avatar;

            if (!empty($request->firstname) && $request->firstname !== "null" && $request->firstname !== "undefined")
                $user->firstname = $request->firstname;

            if (!empty($request->lastname) && $request->lastname !== "null" && $request->lastname !== "undefined")
                $user->lastname = $request->lastname;

            if (!empty($request->username) && $request->username !== "null" && $request->username !== "undefined")
                $user->username = $request->username;

            if (!empty($request->phone) && $request->phone !== "null" && $request->phone !== "undefined")
                $user->phone = $request->phone;

            if (!empty($avatar) && $request->avatar !== "null" && $request->avatar !== "undefined")
                $user->picture_path = $this->storeAvatar($avatar);


            if ($request->sex == 1 || $request->sex == 0)
                $user->sex = $request->sex;

            if (!empty($request->password) && $request->password !== "null" && $request->password !== "undefined") {
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
    private function storeAvatar($image)
    {
        $id = Auth::id();
        $dir_user_avatar = "public/User$id/avatar";


        ///delete all avatars of auth:user
        $files =   Storage::allFiles($dir_user_avatar);
        Storage::delete($files);

        $path = $image->store($dir_user_avatar);
        //fire job(resizeImage) on queue
        ResizeImage::dispatch($path)->onQueue('ResizeImage');
        return $path;
    }
}
