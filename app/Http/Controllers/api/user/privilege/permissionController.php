<?php

namespace App\Http\Controllers\api\user\privilege;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \Auth;
class permissionController extends Controller
{

    public function permissions()
    {
        Auth::user()->can('users.privilege');
        try {

            $permissions = Permission::where("name", "!=", "users.privilege")->get();

            return response()->json($permissions, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 400);
        }
    }


    public function storePermissions(Request $request)
    {
        Auth::user()->can('users.privilege');

        try {

            $request->validate([
                'role_id' => 'required|integer',
                'permissions_id.*' => 'required|integer',
            ]);

            $role = Role::findOrfail($request->role_id);
            $role->revokePermissionTo(Permission::all());

            $permissions = Permission::whereIn("id", $request->permissions_id)->get();
            $role->givePermissionTo($permissions);

            return response()->json(204);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 400);
        }
    }
}
