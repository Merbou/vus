<?php

namespace App\Http\Controllers\api\user\privilege;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class permissionController extends Controller
{

    public function permissions()
    {
        try {
            $permissions = Permission::where("name", "!=", "users.privilege")->get();

            return response()->json($permissions, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 400);
        }
    }


    public function storePermissions(Request $request)
    {
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
