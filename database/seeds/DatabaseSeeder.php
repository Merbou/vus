<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{


    public function run()
    {
        $this->call([
            UserRolePermissionsSeeder::class,
            contactSeeder::class,
        ]);
    }
}
