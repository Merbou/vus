<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ModelsChat\message;
use Faker\Generator as Faker;

$factory->define(message::class, function (Faker $faker) {
    return [
        'content' => $faker->paragraph,
        'username' => $faker->name,
        'sender_id' => rand(1,15),
        'room_id' => rand(1,3),
    ];
});
