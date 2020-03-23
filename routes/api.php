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
