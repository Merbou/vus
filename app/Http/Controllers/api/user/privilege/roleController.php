<?php

namespace App\Http\Controllers\api\user\privilege;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class roleController extends Controller
{
    public function only()
    {
        try {
            $roles = Role::where("name", "!=", "super-admin")->get();
            return response()->json($roles, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json($e, 400);
        }
    }


    public function roles()
    {
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


    public function deleteRole($id)
    {
        try {
            $role = Role::findOrFail($id)->delete();
            return response()->json(204);
        } catch (\Exception $e) {
            return response()->json($e, 400);
        }
    }
}
