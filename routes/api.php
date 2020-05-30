<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return \Auth::user();
});

Route::post('/register', "api\Auth\AuthController@register");

Route::post('/login', "api\Auth\AuthController@login");

Route::middleware(['auth:api'])->group(function () {

    Route::post("/mail-send/{id}", "api\mail\confirmationController@send");
    Route::post("/mail-confirmation/{id}", "api\mail\confirmationController@confirm");
});

Route::middleware(['auth:api', 'verified'])->group(function () {
    //Account
    Route::get("/users-account", "api\user\handleAccountController@index");
    Route::put("/block-account/{id}", "api\user\handleAccountController@blocked");
    Route::put("/update-user", "api\user\handleAccountController@update");
    Route::get("/count-account", "api\user\chartAccountController@count");

    //Contact
    Route::get("/contacts", "api\contact\contactController@index");
    Route::delete("/destroy-contacts", "api\contact\contactController@destroy");
    Route::put("/contact/{id}", "api\contact\contactController@read");
});
