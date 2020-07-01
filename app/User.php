<?php

namespace App;

use Cache;
use Laravel\Passport\HasApiTokens;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'email', 'password', "firstName",
        'lastName', "phone", "picture_path", "sex", "is_active",
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function userActivation()
    {
        return $this->hasOne('App\userActivation');
    }

    public function contacts()
    {
        return $this->hasMany('App\contact');
    }

    public function messages()
    {
        return $this->hasMany('App\ModelsChat\message');
    }

    public function rooms()
    {
        return $this->belongsToMany('App\ModelsChat\room');
    }
    
    public function online()
    {
        return Cache::has("online-user" . $this->id);
    }
}
