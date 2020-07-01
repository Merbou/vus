<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Cache;
use Illuminate\Support\Facades\Auth;

class userStatue
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::check()) {
            $expTime = Carbon::now()->addMinutes(1);
            Cache::put('online-user' . Auth::id(), $expTime);
        }
        return $next($request);
    }
}
