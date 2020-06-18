<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ModelsChat\room;
use Faker\Generator as Faker;

$factory->define(room::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
    ];
});
