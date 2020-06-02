<?php


use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionsDemoSeeder extends Seeder
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
        Permission::create(['name' => 'users']);
        Permission::create(['name' => 'contacts']);
        Permission::create(['name' => 'trash']);
        Permission::create(['name' => 'setting']);
        Permission::create(['name' => 'delete contacts']);
        Permission::create(['name' => 'read contacts']);

        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'writer']);
        $role1->givePermissionTo('dashboard');
        $role1->givePermissionTo('users');
        $role1->givePermissionTo('contacts');
        $role1->givePermissionTo('read contacts');
        $role1->givePermissionTo('setting');
        $role1->givePermissionTo('trash');

        $role2 = Role::create(['name' => 'admin']);
        $role1->givePermissionTo('dashboard');
        $role1->givePermissionTo('users');
        $role1->givePermissionTo('contacts');
        $role2->givePermissionTo('read contacts');
        $role2->givePermissionTo('delete contacts');
        $role1->givePermissionTo('setting');
        $role1->givePermissionTo('trash');

        $role3 = Role::create(['name' => 'super-admin']);
        // gets all permissions via Gate::before rule; see AuthServiceProvider


        // create demo users
        $user = Factory(App\User::class, 1000)->create([
            'username' => 'User',
            'email' => 'test@example.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            "email_verified_at" => "2020-03-30T12:18:55.000000Z"
        ]);
        $user->assignRole($role1);

        $user = Factory(App\User::class)->create([
            'username' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            "email_verified_at" => "2020-03-30T12:18:55.000000Z"
        ]);
        $user->assignRole($role2);

        $user = Factory(App\User::class)->create([
            'username' => 'Super-Admin',
            'email' => 'superadmin@example.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            "email_verified_at" => "2020-03-30T12:18:55.000000Z"
        ]);
        $user = Factory(App\User::class)->create([
            'username' => 'Super-Admin',
            'email' => 'superadmin@example.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            "email_verified_at" => "2020-03-30T12:18:55.000000Z"
        ]);
        $user->assignRole($role3);
    }
}
