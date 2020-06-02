<?php

use Illuminate\Support\Facades\Route;
// use Spatie\Permission\Models\Role;
// use Spatie\Permission\Models\Permission;
// use App\User;
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*'); // if route not existe return view("welcome")

// Route::get('/spatie', function () {
//     // $role = Role::create(['name' => 'super-admin']);
//     // $permission = Permission::create(['name' => 'all']);
//     // $role->givePermissionTo($permission);
//     $user=User::findOrFail(\Auth::id());
//     $user->assignRole('super-admin');
//     print_r($user->getRoleNames());
// });
