<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class DatabaseSeeder extends Seeder
{


    /**
     * Create the initial roles and permissions.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'dashboard']);
        Permission::create(['name' => 'users.table']);
        Permission::create(['name' => 'users.chart']);
        Permission::create(['name' => 'users.privilege']);
        Permission::create(['name' => 'trash']);
        Permission::create(['name' => 'setting']);
        Permission::create(['name' => 'contacts.@delete contacts']);
        Permission::create(['name' => 'contacts.@read contacts']);

        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'writer']);
        $role1->givePermissionTo('dashboard');
        $role1->givePermissionTo('users.chart');
        // $role1->givePermissionTo('users.table');
        $role1->givePermissionTo('contacts.@read contacts');
        $role1->givePermissionTo('setting');
        $role1->givePermissionTo('trash');

        $role2 = Role::create(['name' => 'admin']);
        $role2->givePermissionTo('dashboard');
        $role2->givePermissionTo('users.chart');
        $role2->givePermissionTo('users.table');
        $role2->givePermissionTo('contacts.@read contacts');
        $role2->givePermissionTo('contacts.@delete contacts');
        $role2->givePermissionTo('setting');
        $role2->givePermissionTo('trash');

        $role3 = Role::create(['name' => 'super-admin']);
        // gets all permissions via Gate::before rule; see AuthServiceProvider

        $user = App\User::create([
            'username' => 'exmple',
            'email' => 'exmple@example.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            "email_verified_at" => "2020-03-30T12:18:55.000000Z"
        ]);

        $user->assignRole($role1);

        $user = App\User::create([
            'username' => 'superAdmin',
            'email' => 'superAdmin@example.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            "email_verified_at" => "2020-03-30T12:18:55.000000Z"
        ]);
        $user->assignRole($role3);


        // create demo users
        $users = Factory(App\User::class, 1000)->create();
        foreach ($users as $user) {
            $user->assignRole($role1);
        }

        $user = Factory(App\User::class, 500)->create();

        foreach ($users as $user) {
            $user->assignRole($role2);
        }



        factory(App\contact::class, 1000)->create();
    }
}
