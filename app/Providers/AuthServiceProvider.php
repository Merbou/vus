<?php

namespace App\Providers;

use App\ModelsChat\message;
use App\ModelsChat\room;
use App\Policies\messagePolicy;
use App\Policies\roomPolicy;
use Laravel\Passport\Passport;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        message::class => messagePolicy::class,
        room::class => roomPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();

        // Gate::before(function ($user, $ability) {
        //     return $user->hasRole('super-admin') ? true : null;
        // });
    }
}
