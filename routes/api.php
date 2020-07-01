<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\User;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return User::where("id", Auth::id())->with("roles.permissions")->first();
});

Route::post('/register', "api\Auth\AuthController@register");

Route::post('/login', "api\Auth\AuthController@login");


Route::middleware(['auth:api'])->group(function () {

    Route::post("/mail-send/{id}", "api\mail\confirmationController@send");
    Route::post("/mail-confirmation/{id}", "api\mail\confirmationController@confirm");
});

Route::middleware(['auth:api', 'verified'])->group(function () {
    //accessibility
    Route::get("/roles", "api\user\privilege\\roleController@roles");
    Route::get("/roles-only", "api\user\privilege\\roleController@only");
    Route::post("/role", "api\user\privilege\\roleController@storeRole");
    Route::delete("/role/{id}", "api\user\privilege\\roleController@deleteRole");
    Route::post("/role-assign/{id}", "api\user\privilege\\roleController@assignRole");

    Route::get("/permissions", "api\user\privilege\permissionController@permissions");
    Route::post("/permissions", "api\user\privilege\permissionController@storePermissions");
    //Account
    Route::get("/users", "api\user\indexController@index");
    Route::put("/block-account/{id}", "api\user\handleAccountController@blocked");
    Route::put("/update-user", "api\user\handleAccountController@update");
    Route::post("/users-q-search", "api\user\indexController@quickSearch");
    
    //chart account
    Route::get("/count-account", "api\user\chartAccountController@count");
    Route::get("/roles-percentage", "api\user\chartAccountController@rolesUserPercentage");
    
    //Contact
    Route::get("/contacts", "api\contact\contactController@index");
    Route::delete("/destroy-contacts", "api\contact\contactController@destroy");
    Route::put("/contact/{id}", "api\contact\contactController@read");
    
    //chats
    //room
    Route::get("/rooms", "chat\\roomController@index");
    Route::get("/room/{id}", "chat\\roomController@single");
    Route::post("/quit-room/{id}", "chat\\roomController@quit");
    Route::post("/kick-room/{id}", "chat\\roomController@kick");
    Route::post("/invite-room/{id}", "chat\\roomController@invite");
    Route::post("/create-room", "chat\\roomController@store");
    Route::post("/room-q-search", "chat\\roomController@quickSearch");
    //message
    Route::get("/messages/{id}", "chat\\messageController@index");
    Route::get("/view-messages/{id}", "chat\\messageController@view");
    Route::post("/message/{id}", "chat\\messageController@store");
    Route::put("/edit-message/{id}", "chat\\messageController@update");
    Route::delete("/destroy-message/{id}", "chat\\messageController@destroy");
    // Route::get("/typing-messages/{id}/{room_id}", "chat\\messageController@typing");
    
    //Notifications
    Route::get("/notifications", "api\\notification\\notificationController@index");
    Route::put("/view-notifications", "api\\notification\\notificationController@view");
    Route::get("/view-notifications", "api\\notification\\notificationController@getView");
    Route::get("/notification/{id}", "api\\notification\\notificationController@store");

    //Trash
    Route::get("/trash-contacts", "trash\contactController@index");
    Route::delete("/trash-contacts/trash", "trash\contactController@destroy");
    Route::post("/trash-contacts/recycle", "trash\contactController@recycle");
});
