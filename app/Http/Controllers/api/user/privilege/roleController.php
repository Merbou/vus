<?php

namespace App\Http\Controllers\api\user\privilege;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use \Auth;


class roleController extends Controller
{
    public function only()
    {
        Auth::user()->can('users.privilege');

        try {
            $roles = Role::where("name", "!=", "super-admin")->get();
            return response()->json($roles, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 400);
        }
    }


    public function roles()
    {
        Auth::user()->can('users.privilege');

        try {
            $roles = Role::where("name", "!=", "super-admin")
                ->with("permissions:permissions.id")
                ->orderBy('created_at', 'asc')
                ->paginate(100);
            return response()->json($roles, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 400);
        }
    }





    public function storeRole(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|max:20|string',
            ]);

            $role = Role::create($request->all());

            return response()->json(["id" => $role->id], 200);
        } catch (\Exception $e) {
            return response()->json($e, 400);
        }
    }





    public function assignRole(Request $request, $id)
    {
        Auth::user()->can('users.table@assign role');

        $request->validate(['roles.*' => 'required|string']);
        $roles = Role::whereIn('name', $request->roles)->get();
        $user = User::findOrFail($id);
        $user->syncRoles($roles);
        return response()->json(204);
    }





    public function deleteRole($id)
    {
        Auth::user()->can('users.privilege');

        try {
            $role = Role::findOrFail($id)->delete();
            return response()->json(204);
        } catch (\Exception $e) {
            return response()->json($e, 400);
        }
    }
}
