<?php

use Illuminate\Database\Seeder;

class contactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $contacts = Factory(App\contact::class, 500)->create();
        $rooms = Factory(App\ModelsChat\room::class, 3)->create();
        App\User::all()
            ->each(function ($user) {
                $user->rooms()->createMany(
                    factory(App\ModelsChat\room::class,1)->make()->toArray()
                );
            });

        $messages = Factory(App\ModelsChat\message::class, 100)->create();
    }
}
