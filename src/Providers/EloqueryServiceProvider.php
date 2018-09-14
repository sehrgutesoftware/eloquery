<?php

namespace SehrGut\Eloquery\Providers;

use Illuminate\Support\ServiceProvider;

class EloqueryServiceProvider extends ServiceProvider
{
    /** @inheritDoc */
    public function register()
    {
        $this->app->alias(\SehrGut\Eloquery\Eloquery::class, 'eloquery');
    }
}
