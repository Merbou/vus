<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\contact;
use Faker\Generator as Faker;

$factory->define(contact::class, function (Faker $faker) {
    return [
        'email' => $faker->unique()->safeEmail,
        'subject' => $faker->title,
        'description' => $faker->paragraph,
        'to' => rand(1,15)
    ];
});
