<?php

use Illuminate\Support\Facades\Route;

Route::get('/404', function () {
    abort(404);
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*'); // if route not existe return view("welcome")
